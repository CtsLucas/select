import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import { Caurosel } from '../../components/Carousel';

import { HomeContainer } from './styles';
import { Footer } from '../../components/Footer';

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <Banner />
        <Caurosel title="Todos os Cursos" titleAlign="right" />
        <Caurosel title="Todos os Cursos" titleAlign="right" />
      </HomeContainer>
      <Footer />
    </>
  );
}
