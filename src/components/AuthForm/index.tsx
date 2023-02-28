/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { useAuth } from '../../contexts/AuthContext';

import { AuthFormContainer } from './style';

export const AuthFormSchemaValidation = zod
  .object({
    email: zod.string().email('Digite um e-mail válido'),
    password: zod
      .string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .nullish(),
    confirmPassword: zod
      .string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .nullish(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword && confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmPassword'],
        message: 'As senhas não coincidem',
      });
    }
  });

export type AuthFormSchema = zod.infer<typeof AuthFormSchemaValidation>;

interface AuthFormProps {
  variant: 'sign-in' | 'sign-up' | 'forgot-password';
  children: ReactNode;
  onLoading: (value: boolean) => void;
}

export function AuthForm({ children, onLoading, variant }: AuthFormProps) {
  const authForm = useForm({
    resolver: zodResolver(AuthFormSchemaValidation),
  });

  const { signIn, signUp, resetPassword } = useAuth();
  const navigate = useNavigate();

  const { handleSubmit } = authForm;

  async function onSubmit(
    data: any /* AuthFormSchema - TODO: handle type error*/
  ) {
    onLoading(true);

    switch (variant) {
    case 'sign-in':
      try {
        await signIn(data.email, data.password!);

        navigate('/');
      } catch (error) {
        console.error(error);
      } finally {
        onLoading(false);
      }
      break;
    case 'sign-up':
      try {
        await signUp(data.email, data.password!);

        navigate('/');
      } catch (error) {
        console.error(error);
      } finally {
        onLoading(false);
      }
      break;
    case 'forgot-password':
      try {
        await resetPassword(data.email);

        navigate('/sign-in');
      } catch (error) {
        console.error(error);
      } finally {
        onLoading(false);
      }
      break;

    default:
      break;
    }
  }

  return (
    <FormProvider {...authForm}>
      <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
        {children}
      </AuthFormContainer>
    </FormProvider>
  );
}
