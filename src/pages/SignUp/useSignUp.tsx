import { useState } from 'react';

export function useSignUp() {
  const [loading, setLoading] = useState(false);

  function handleLoading(value: boolean) {
    setLoading(value);
  }

  return { loading, handleLoading };
}
