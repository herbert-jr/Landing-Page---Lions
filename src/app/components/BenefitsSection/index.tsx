import Benefits from './Benefits';

type Benefit = {
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    title: 'Pós-venda personalizado',
    description:
      'Possuímos um ótimo sistema de atendimento pós-venda com uma equipe especializada e oficinas credenciadas para deixar nossos clientes satisfeitos.',
  },
  {
    title: 'Não perca na troca',
    description:
      'Somos especialistas em carros e, por isso, sabemos como avaliar o seu usado. Na Lions você pode receber até 90% do valor da tabela FIPE no momento da troca.',
  },
  {
    title: 'Nada de juros altos',
    description:
      'Somos o líder nacional em financiamentos. Por consequência, grandes bancos fornecem para nossos clientes taxas de juros baixas e fácil aprovação de crédito.',
  },
  {
    title: 'Preços diferenciados',
    description:
      'Compramos carros em grandes lotes e com grandes descontos. Desta forma, conseguimos te repassar bons descontos.',
  },
];
function BenefitsSection() {
  return (
    <section
      className='w-[min(90%,1440px)] h-auto mt-16 flex flex-col md:flex-row
     items-center md:items-start justify-center'>
      <div className='w-full h-auto flex flex-col items-start justify-center'>
        <h1 className='text-[40px] md:text-[48px] lg:text-[58px] leading-none font-bold'>
          Conheça nossas vantagens.
        </h1>
        <h2 className='mt-2 font-medium md:text-xl'>
          Negocie com a Lions e tenha benefícios{' '}
          <span className='text-copy-red'>exclusivos</span>.
        </h2>
      </div>
      <div className='w-full h-auto flex flex-col items-center justify-center mt-10 md:mt-0'>
        {benefits.map((benefit, index) => (
          <Benefits
            key={index}
            title={benefit.title}
            description={benefit.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default BenefitsSection;
