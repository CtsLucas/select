import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAuth } from '@contexts/AuthContext';

export function useSignIn() {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  function handleLoading(value: boolean) {
    setLoading(value);
  }

  async function handleSignInWithGoogle() {
    setLoading(true);

    try {
      await signInWithGoogle();
      navigate('/');
    } catch (error) {
      console.error(error);
      toast.error('Erro ao fazer login com o Google');
    } finally {
      handleLoading(false);
    }
  }

  return { loading, handleLoading, handleSignInWithGoogle };
}
