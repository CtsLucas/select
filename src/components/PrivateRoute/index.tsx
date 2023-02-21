import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import { DefaultLayout } from '../../layouts/DefaultLayout';

export const PrivateRoute = () => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? <DefaultLayout /> : <Navigate to="/login" />;
};
