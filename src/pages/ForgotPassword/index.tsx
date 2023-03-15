import { Link } from 'react-router-dom';
import { EnvelopeSimple } from 'phosphor-react';

import { InputText, Button, AuthForm } from '@components';
import logo from '@assets/logo.svg';

import { useForgotPassword } from './useForgotPassword';
import { ForgotPasswordContainer, ForgotPasswordHeader } from './styles';

export default function ForgotPassword() {
  const { loading, handleLoading } = useForgotPassword();

  return (
    <ForgotPasswordContainer>
      <ForgotPasswordHeader>
        <img src={logo} alt="" />
        <h2>Recupere seu acesso!</h2>
      </ForgotPasswordHeader>

      <AuthForm onLoading={handleLoading} variant="forgot-password">
        <InputText
          label="Endereço de e-mail"
          name="email"
          icon={<EnvelopeSimple />}
          type="email"
          id="email"
          placeholder="Digite seu e-mail"
        />

        <Button type="submit" disabled={loading}>
          Enviar e-mail de recuperação
        </Button>

        <div className="sign-in">
          <span>Lembrou-se do acesso?</span>
          <Link to="/sign-in">Entrar</Link>
        </div>
        <div className="sign-up">
          <span>Não possuí cadastro?</span>
          <Link to="/sign-up">Cadastra-se</Link>
        </div>
      </AuthForm>
    </ForgotPasswordContainer>
  );
}
