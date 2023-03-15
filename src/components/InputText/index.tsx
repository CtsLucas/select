import { InputHTMLAttributes, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

import { InputError, InputTextContainer, InputTextContent } from './styles';

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  icon?: ReactNode;
}

export default function InputText({
  name,
  label,
  icon,
  ...props
}: InputTextProps) {
  const { register, formState, clearErrors } = useFormContext();

  const error = formState.errors[name]?.message as string;

  return (
    <InputTextContainer>
      <InputTextContent isError={!!error}>
        <label htmlFor={name}>{label}</label>
        {icon}
        <input
          {...register(name, {
            onChange: () => clearErrors(name),
          })}
          {...props}
        />
      </InputTextContent>
      {error && <InputError>{error}</InputError>}
    </InputTextContainer>
  );
}
