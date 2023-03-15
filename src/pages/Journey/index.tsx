import { Banner } from '@components';
import { CarouselCourse, JourneyStatistics } from '@pages/Journey/components';

import { useJourney } from './useJourney';

import { JourneyContainer, JourneyContent } from './styles';

export default function Journey() {
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
