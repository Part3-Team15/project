import Image from 'next/image';
import Link from 'next/link';

import LOGO_SIGN from '@/../public/images/logo_sign.svg';

export default function TopLogoSection({ text }: { text: string }) {
  return (
    <div className='mb-[30px] mt-[50px] flex items-center justify-center'>
      <Link href='/'>
        <div className='flex flex-col items-center justify-center'>
          <Image src={LOGO_SIGN} alt='로고 이미지' className='md:h-[279px] md:w-[200px]' priority />
          <p className='text-[20px] text-black_33'>{text}</p>
        </div>
      </Link>
    </div>
  );
}
