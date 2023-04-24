import { Navigate } from 'react-router-dom';

import { useAuth } from '@contexts/AuthContext';
import { DefaultLayout } from '@layouts/DefaultLayout';

export default function PrivateRoute() {
  const { currentUser } = useAuth();

  return currentUser ? <DefaultLayout /> : <Navigate to="/sign-in" />;
}
