import { ClockAfternoon } from 'phosphor-react';

import { formatDuration } from '../../utils/formatters';

import { SlideJourneyContainer } from './styles';

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
  const { thumb, title, description, countCourses = 0, duration = 0 } = data;

  function handleLoading() {
    onLoading();
  }

  return (
    <SlideJourneyContainer>
      <div className="header">
        <img src={thumb} alt="" onLoad={handleLoading} />
        <strong>{title}</strong>
      </div>
      <div className="content">
        <p>{description}</p>
      </div>
      <div className="footer">
        <span>
          {countCourses === 1
            ? `${countCourses} Curso`
            : `${countCourses} Cursos`}
        </span>
        <span>
          <ClockAfternoon />
          {formatDuration(duration)}
        </span>
      </div>
    </SlideJourneyContainer>
  );
}
