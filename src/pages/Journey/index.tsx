import { useJourney } from './useJourney';

import { Banner } from '../../components/Banner';
import { CarouselCourse } from './components/CarouselCourse';
import { JourneyStatistics } from './components/JourneyStatistics';

import { JourneyContainer, JourneyContent } from './styles';

export function Journey() {
  const { journey, courses } = useJourney();

  return (
    <JourneyContainer>
      <Banner
        backgroundImage={journey?.medias.banner ? journey?.medias.banner : ''}
        title={journey?.title}
        description={journey?.description}
      />

      <JourneyStatistics journey={journey} />

      <JourneyContent>
        <h2>{journey?.title}</h2>

        <CarouselCourse slides={courses} />
      </JourneyContent>
    </JourneyContainer>
  );
}
