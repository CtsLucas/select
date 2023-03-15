import { Link } from 'react-router-dom';
import { EnvelopeSimple, Lock } from 'phosphor-react';

import logo from '@assets/logo.svg';
import { InputText, Button, AuthForm } from '@components';

import { useSignUp } from './useSignUp';

import { SignUpContainer, SignUpHeader } from './styles';

export default function SignUp() {
  const { loading, handleLoading } = useSignUp();

  return (
    <SignUpContainer>
      <SignUpHeader>
        <img src={logo} alt="" />
        <h2>Cadastre-se e escolha a sua jornada!</h2>
      </SignUpHeader>

      <AuthForm onLoading={handleLoading} variant="sign-up">
        <InputText
          label="Endereço de e-mail"
          name="email"
          icon={<EnvelopeSimple />}
          type="email"
          id="email"
          placeholder="Digite seu e-mail"
        />

        <InputText
          label="Senha"
          name="password"
          icon={<Lock />}
          type="password"
          id="password"
          placeholder="Digite sua senha"
        />

        <InputText
          label="Confirmação de Senha"
          name="confirmPassword"
          icon={<Lock />}
          type="password"
          id="confirmPassword"
          placeholder="Digite sua senha"
        />

        <Button type="submit" disabled={loading}>
          Cadastrar
        </Button>

        <div className="sign-in">
          <span>Já possuí uma conta?</span>
          <Link to="/sign-in">Entrar</Link>
        </div>
      </AuthForm>
    </SignUpContainer>
  );
}
