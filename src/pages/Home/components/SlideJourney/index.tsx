import { ClockAfternoon } from 'phosphor-react';

import { SlideJourneyType } from '@/types/models';
import { formatDuration } from '@utils/formatters';

import {
  SlideJourneyContainer,
  SlideJourneyHeader,
  SlideJourneyContent,
  SlideJourneyFooter,
} from './styles';

interface SlideJourneyProps {
  data: SlideJourneyType;
  onLoading: () => void;
}

export default function SlideJourney({ data, onLoading }: SlideJourneyProps) {
  const {
    id,
    thumb,
    title,
    description,
    countCourses = 0,
    duration = 0,
  } = data;

  function handleLoading() {
    onLoading();
  }

  return (
    <SlideJourneyContainer
      to={`../journeys/${id}`}
      title={title?.toUpperCase()}
    >
      <SlideJourneyHeader>
        <img src={thumb} alt="" onLoad={handleLoading} />
        <strong>{title}</strong>
      </SlideJourneyHeader>
      <SlideJourneyContent>
        <p>{description}</p>
      </SlideJourneyContent>
      <SlideJourneyFooter>
        <span>
          {countCourses === 1
            ? `${countCourses} Curso`
            : `${countCourses} Cursos`}
        </span>
        <span>
          <ClockAfternoon size={20} />
          {formatDuration(duration)}
        </span>
      </SlideJourneyFooter>
    </SlideJourneyContainer>
  );
}
