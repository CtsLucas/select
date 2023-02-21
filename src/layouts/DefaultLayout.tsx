import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Loader } from '../components/Loader';
import { useContent } from '../contexts/ContentsContext';

export function DefaultLayout() {
  const { loading } = useContent();

  return loading ? (
    <Loader />
  ) : (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
