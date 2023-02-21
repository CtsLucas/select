import { InputHTMLAttributes, ReactNode } from 'react';

import { InputTextContainer } from './styles';

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  icon?: ReactNode;
}

export function InputText({ name, label, icon, ...props }: InputTextProps) {
  return (
    <InputTextContainer>
      <label htmlFor={name}>{label}</label>
      {icon}
      <input {...props} />
    </InputTextContainer>
  );
}
