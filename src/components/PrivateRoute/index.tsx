import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

interface PrivateRouteProps {
  children: ReactNode;
}
export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
