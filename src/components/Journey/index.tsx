import { ClockAfternoon } from 'phosphor-react';

import { JourneyContainer } from './styles';

export interface JourneyType {
  id: string;
  thumb: string;
  title: string;
  description: string;
}

export interface JourneyProps {
  data: JourneyType;
  onLoading: () => void;
}

export function Journey({ data, onLoading }: JourneyProps) {
  const { thumb, title, description } = data;

  function handleLoading() {
    onLoading();
  }

  return (
    <JourneyContainer>
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
    </JourneyContainer>
  );
}
