import { ClockAfternoon } from 'phosphor-react';

import { formatDuration } from '../../../../utils/formatters';

import {
  SlideJourneyContainer,
  SlideJourneyHeader,
  SlideJourneyContent,
  SlideJourneyFooter,
} from './styles';

export interface SlideJourneyType {
  id: string;
  thumb: string;
  title: string;
  description: string;
  countCourses?: number;
  duration?: number;
}

export interface SlideJourneyProps {
  data: SlideJourneyType;
  onLoading: () => void;
}

export function SlideJourney({ data, onLoading }: SlideJourneyProps) {
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
