import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { EnvelopeSimple } from 'phosphor-react';

import { useAuth } from '../../contexts/AuthContext';

import logo from '../../assets/logo.svg';

import { InputText } from '../../components/Input';
import { Button } from '../../components/Button';

import {
  ForgotPasswordContainer,
  ForgotPasswordForm,
  ForgotPasswordHeader,
} from './styles';

export function ForgotPassword() {
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  /* TO-DO: Add validations with React Hook Form and ZOD */

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      await resetPassword(email);
      navigate('/login');
    } catch (error) {
      alert('Erro ao enviar um e-mail de recuperação de acesso!');

      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ForgotPasswordContainer onSubmit={handleSubmit}>
      <ForgotPasswordHeader>
        <img src={logo} alt="" />
        <h2>Recupere seu acesso!</h2>
      </ForgotPasswordHeader>

      <ForgotPasswordForm>
        <InputText
          label="Endereço de e-mail"
          name="email"
          icon={<EnvelopeSimple />}
          type="email"
          id="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button type="submit" disabled={loading}>
          Enviar e-mail de recuperação
        </Button>

        <div className="sign-in">
          <span>Lembrou-se do acesso?</span>
          <Link to="/login">Entrar</Link>
        </div>
        <div className="sign-up">
          <span>Não possuí cadastro?</span>
          <Link to="/sign-up">Cadastra-se</Link>
        </div>
      </ForgotPasswordForm>
    </ForgotPasswordContainer>
  );
}
