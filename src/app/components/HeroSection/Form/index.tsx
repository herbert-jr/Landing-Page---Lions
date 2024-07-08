'use client';

import { veiculos } from '@/app/assets/data/database';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import InputSelect from './InputSelect';
import InputText from './InputText';
import TypeButton from './TypeButton';

function Form() {
  const [search, setSearch] = useState({
    type: 'carro',
    brand: '',
    category: '',
    year: '',
    price: '',
  });
  const [resultCount, setResultCount] = useState(0);

  const { type, brand, category, year, price } = search;

  const listType = veiculos.filter((veiculo) => veiculo.tipo === type);

  const listBrand = Array.from(
    new Set(listType.map((veiculo) => veiculo.marca)),
  );

  const listCategory = Array.from(
    new Set(listType.map((veiculo) => veiculo.categoria)),
  );

  const handleTypeChange = (
    selectedType: string,
    e: MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    setSearch({ ...search, type: selectedType, brand: '', category: '' });
  };

  const handleBrandChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearch({ ...search, brand: e.target.value });
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearch({ ...search, category: e.target.value });
  };

  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch({ ...search, year: e.target.value });
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch({ ...search, price: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', search);
  };

  useEffect(() => {
    const filteredResults = veiculos.filter((veiculo) => {
      return (
        veiculo.tipo === type &&
        (brand ? veiculo.marca === brand : true) &&
        (category ? veiculo.categoria === category : true) &&
        (year ? veiculo.ano.toString() === year : true) &&
        (price ? veiculo.preco <= parseFloat(price) : true)
      );
    });
    setResultCount(filteredResults.length);
  }, [search, type, brand, category, year, price]);

  return (
    <form
      className='w-[95%] border bg-white h-auto py-1 rounded-md -mt-5 z-10
      flex flex-col items-start justify-center shadow-md'
      onSubmit={handleSubmit}>
      <fieldset className='w-full h-auto px-2 py-3 flex gap-4'>
        <TypeButton
          text={['Comprar', 'carros']}
          onClick={(e) => handleTypeChange('carro', e)}
          isActive={type === 'carro'}
        />
        <TypeButton
          text={['Comprar', 'motos']}
          onClick={(e) => handleTypeChange('moto', e)}
          isActive={type === 'moto'}
        />
      </fieldset>
      <fieldset className='w-full flex flex-col md:flex-row'>
        <fieldset className='w-full h-auto px-2 py-1 flex gap-2'>
          <InputSelect
            text='Marca'
            brands={listBrand}
            name='brand'
            value={brand}
            onChange={handleBrandChange}
          />
        </fieldset>
        <fieldset className='w-full h-auto px-2 py-1 flex gap-2'>
          <InputSelect
            text='Categoria'
            brands={listCategory}
            name='category'
            value={category}
            onChange={handleCategoryChange}
          />
        </fieldset>
        <fieldset className='w-full h-full px-2 py-1 flex gap-2 items-center justify-between'>
          <InputText
            name='ano'
            text='Ano'
            type='number'
            value={year}
            onChange={handleYearChange}
          />
          <InputText
            name='preco'
            text='Até'
            type='number'
            value={price}
            onChange={handlePriceChange}
          />
        </fieldset>
      </fieldset>
      <fieldset className='w-full px-2 py-3 flex items-center justify-end'>
        <button
          type='submit'
          className='px-3 py-2.5 bg-primary-600 hover:bg-primary-700 text-copy-white
          font-semibold rounded-lg transition-all ease-personality duration-300'>
          Ver ofertas ({resultCount})
        </button>
      </fieldset>
    </form>
  );
}

export default Form;
