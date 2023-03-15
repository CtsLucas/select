import { Carousel } from '@pages/Home/components';

import { useHome } from './useHome';

import { HomeContainer, HomeContent } from './styles';

export default function Home() {
  const { banners, courses, journeys } = useHome();

  return (
    <HomeContainer>
      <Carousel slides={banners} variant="banner" />

      <HomeContent>
        <Carousel
          slides={journeys}
          variant="journey"
          title="Jornadas a serem trilhadas"
        />
        <Carousel
          slides={courses}
          variant="course"
          title="Cursos disponíveis"
        />
      </HomeContent>
    </HomeContainer>
  );
}
