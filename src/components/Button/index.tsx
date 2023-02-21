import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonContainer } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
}

export function Button({ children, icon, ...props }: ButtonProps) {
  return (
    <ButtonContainer {...props}>
      {icon}
      {children}
    </ButtonContainer>
  );
}
