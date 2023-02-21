import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { EnvelopeSimple, Lock, LockSimple } from 'phosphor-react';

import { useAuth } from '../../contexts/AuthContext';

import logo from '../../assets/logo.svg';

import { InputText } from '../../components/Input';
import { Button } from '../../components/Button';

import { LoginContainer, LoginForm, LoginHeader } from './styles';

export function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

    try {
      await signIn(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <LoginContainer onSubmit={handleSubmit}>
      <LoginHeader>
        <img src={logo} alt="" />
        <h1>Escolha o seu caminho!</h1>
      </LoginHeader>

      <LoginForm>
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

        <div className="forgot-password">
          <LockSimple size={20} />
          <Link to="/forgot-password">Esqueci minha senha</Link>
        </div>

        <Button type="submit" disabled={loading}>
          Fazer Login
        </Button>

        <div className="sign-up">
          <span>Não tem uma conta?</span>
          <Link to="/sign-up">Cadastre-se</Link>
        </div>
      </LoginForm>
    </LoginContainer>
  );
}
