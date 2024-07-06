import Image from 'next/image';
import Link from 'next/link';

function HomeLink() {
  return (
    <div className='flex-1 self-start'>
      <Link
        href='https://www.lionsseminovos.com.br/'
        target='_blank'
        title='Ir para página inicial'>
        <Image src='/logo.png' alt='Logo' width={100} height={100} />
      </Link>
    </div>
  );
}

export default HomeLink;
