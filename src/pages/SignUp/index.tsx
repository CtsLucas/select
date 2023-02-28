import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EnvelopeSimple, Lock } from 'phosphor-react';

import logo from '../../assets/logo.svg';

import { InputText } from '../../components/Input';
import { Button } from '../../components/Button';
import { AuthForm } from '../../components/AuthForm';

import { SignUpContainer, SignUpHeader } from './styles';

export function SignUp() {
  const [loading, setLoading] = useState(false);

  function handleLoading(value: boolean) {
    setLoading(value);
  }

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
