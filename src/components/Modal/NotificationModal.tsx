import { MouseEventHandler } from 'react';

import ModalActionButton from '@/components/Button/ModalActionButton';

export default function NotificationModal({
  handleCloseModal,
  notificationText,
}: {
  handleCloseModal: MouseEventHandler<HTMLButtonElement>;
  notificationText: string;
}) {
  return (
    <div className='h-[220px] w-[327px] rounded-[8px] bg-white px-[28px] py-[32px] md:h-[250px] md:w-[540px]'>
      <div className='relative flex size-full items-center justify-center'>
        <h1 className='mb-[15px] text-[16px] text-black-33 md:text-[18px]'>{notificationText}</h1>
        <ModalActionButton
          className='absolute bottom-0 right-1/2 translate-x-1/2 md:right-0 md:translate-x-0'
          onClick={handleCloseModal}
        >
          확인
        </ModalActionButton>
      </div>
    </div>
  );
}
