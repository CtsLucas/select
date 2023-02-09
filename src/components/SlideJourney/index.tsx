import { ClockAfternoon } from 'phosphor-react';

import { SlideJourneyContainer } from './styles';

export interface SlideJourneyType {
  id: string;
  thumb: string;
  title: string;
  description: string;
}

export interface SlideJourneyProps {
  data: SlideJourneyType;
  onLoading: () => void;
}

export function SlideJourney({ data, onLoading }: SlideJourneyProps) {
  const { thumb, title, description } = data;

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
      {/* TO-DO: Create structure to carry out the request to /journeys/{id}/courses  */}
      <div className="footer">
        <span>6 Cursos</span>
        <span>
          <ClockAfternoon />
          15h 51min
        </span>
      </div>
    </SlideJourneyContainer>
  );
}
