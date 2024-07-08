interface BrandProps extends React.HTMLAttributes<HTMLSelectElement> {
  brands: string[];
  text: string;
  name: string;
  value: string;
}

function InputSelect({ name, text, brands, value, ...rest }: BrandProps) {
  return (
    <div className='w-full flex flex-col items-start gap-1'>
      <label htmlFor='brand' className='text-sm font-semibold text-gray-500'>
        {text}
      </label>
      <select
        className='w-full h-10 px-2 border-2 rounded-md bg-white text-gray-500'
        name={`${name}`}
        value={`${value}`}
        {...rest}>
        <option value=''>Selecione a marca</option>
        {brands.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputSelect;
