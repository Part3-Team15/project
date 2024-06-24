import { UseFormRegister } from 'react-hook-form';

import { TInputs } from '@/containers/signup/SignUpForm';

export default function TextInputWithLabelForAuth({
  id,
  label,
  placeholder,
  error,
  register,
}: {
  id: 'nickname' | 'email';
  label: string;
  placeholder: string;
  error?: string;
  register: UseFormRegister<TInputs>;
}) {
  let type = 'text';
  let autoComplete = 'off';

  if (id === 'email') {
    type = 'email';
    autoComplete = 'email';
  }

  return (
    <div>
      <label htmlFor={id} className='mb-[10px] block text-black_33'>
        {label}
      </label>
      <div className='relative'>
        <input
          {...register(id)}
          className={`h-[50px] w-full rounded-xl border border-gray_d9 bg-white px-[10px] text-[16px] text-gray_9f ${
            error && 'border-2 border-red'
          }`}
          type={type}
          id={id}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
      </div>
      {error && <p className='mt-2 text-red'>{error}</p>}
    </div>
  );
}
