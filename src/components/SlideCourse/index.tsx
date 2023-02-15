import { ChartBar, Clock } from 'phosphor-react';

import { formatDuration, formatLevel } from '../../utils/formatters';

import { SlideCourseContainer } from './styles';

export interface SlideCourseType {
  id: string;
  thumb: string;
  title: string;
  instructor: string;
  level: string;
  duration: number;
}

export interface SlideCourseProps {
  data: SlideCourseType;
  onLoading: () => void;
}

export function SlideCourse({ data, onLoading }: SlideCourseProps) {
  const { id, thumb, title, instructor, level, duration } = data;

  function handleLoading() {
    onLoading();
  }

  return (
    <SlideCourseContainer to={`/courses/${id}`}>
      <img src={thumb} alt="" onLoad={handleLoading} />
      <div className="info">
        <strong>{title}</strong>
        <span>{instructor}</span>
        <div className="details">
          <span>
            <ChartBar />
            {formatLevel(level)}
          </span>
          <span>
            <Clock />
            {formatDuration(duration)}
          </span>
        </div>
      </div>
    </SlideCourseContainer>
  );
}
