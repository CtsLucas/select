import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { EnvelopeSimple, Lock } from 'phosphor-react';

import { useAuth } from '../../contexts/AuthContext';

import logo from '../../assets/logo.svg';

import { InputText } from '../../components/Input';
import { Button } from '../../components/Button';

import { SignUpContainer, SignUpForm, SignUpHeader } from './styles';

export function SignUp() {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [loading, setLoading] = useState(false);

  /* TO-DO: Add validations with React Hook Form and ZOD */

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    if (password.length < 6) {
      alert('A senha deve ter no mínimo 6 caracteres');
      setLoading(false);
      return;
    }

    if (password !== passwordConfirmation) {
      setLoading(false);
      alert('As senhas não conferem');
      return;
    }

    try {
      await signUp(email, password);
      navigate('/login');
    } catch (error) {
      alert('Erro ao cadastrar usuário');

      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SignUpContainer onSubmit={handleSubmit}>
      <SignUpHeader>
        <img src={logo} alt="" />
        <h2>Cadastre-se e escolha a sua jornada!</h2>
      </SignUpHeader>

      <SignUpForm>
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

        <InputText
          label="Senha"
          name="password"
          icon={<Lock />}
          type="password"
          id="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <InputText
          label="Confirmação de Senha"
          name="password-confirmation"
          icon={<Lock />}
          type="password"
          id="password-confirmation"
          placeholder="Digite sua senha"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />

        <Button type="submit" disabled={loading}>
          Cadastrar
        </Button>

        <div className="sign-in">
          <span>Já possuí uma conta?</span>
          <Link to="/login">Entrar</Link>
        </div>
      </SignUpForm>
    </SignUpContainer>
  );
}
