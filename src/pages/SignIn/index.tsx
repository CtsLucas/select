import { Link } from 'react-router-dom';
import { EnvelopeSimple, GoogleLogo, Lock, LockSimple } from 'phosphor-react';

import logo from '@assets/logo.svg';
import { InputText, Button, AuthForm } from '@components';

import { useSignIn } from './useSignIn';

import { LoginContainer, LoginHeader } from './styles';

export default function SignIn() {
  const { handleLoading, handleSignInWithGoogle, loading } = useSignIn();

  return (
    <LoginContainer>
      <LoginHeader>
        <img src={logo} alt="" />
        <h1>Escolha o seu caminho!</h1>
      </LoginHeader>

      <AuthForm onLoading={handleLoading} variant="sign-in">
        <InputText
          label="Endereço de e-mail"
          icon={<EnvelopeSimple />}
          type="email"
          id="email"
          placeholder="Digite seu e-mail"
          name="email"
        />

        <InputText
          label="Senha"
          icon={<Lock />}
          type="password"
          id="password"
          placeholder="Digite sua senha"
          name="password"
        />

        <div className="forgot-password">
          <LockSimple size={20} />
          <Link to="/forgot-password">Esqueci minha senha</Link>
        </div>

        <Button type="submit" disabled={loading}>
          Fazer Login
        </Button>

        <Button
          type="button"
          icon={<GoogleLogo weight="bold" size={24} />}
          disabled={loading}
          onClick={handleSignInWithGoogle}
        >
          Entrar com o Google
        </Button>

        <div className="sign-up">
          <span>Não tem uma conta?</span>
          <Link to="/sign-up">Cadastre-se</Link>
        </div>
      </AuthForm>
    </LoginContainer>
  );
}
