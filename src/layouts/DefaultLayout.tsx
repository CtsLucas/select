import { Outlet } from 'react-router-dom';

import { useContent } from '@contexts/ContentsContext';
import { Footer, Header, Loader } from '@components';

import { DefaultLayoutContainer } from './styles';

export function DefaultLayout() {
  const { loading } = useContent();

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </DefaultLayoutContainer>
  );
}
