import { ChartBar, Clock } from 'phosphor-react';
import { CoursesContainer } from './styles';

export interface CourseType {
  id: string;
  thumb: string;
  title: string;
  instructor: string;
  level: string;
  duration: number;
}

export interface CourseProps {
  data: CourseType;
  onLoading: () => void;
}

export function Course({ data, onLoading }: CourseProps) {
  console.log('🚀 ~ file: index.tsx:19 ~ Course ~ data', data);
  const { thumb, title, instructor, level, duration } = data;

  function handleLoading() {
    onLoading();
  }

  function formatLevel(level: string) {
    switch (level) {
    case 'beginner':
      return 'Iniciante';
    case 'intermediate':
      return 'Intermediário';
    case 'advanced':
      return 'Avançado';
    default:
      return 'Iniciante';
    }
  }

  function formatDuration(duration: number) {
    const minutes = Math.floor(duration / 60000);
    const hours = Math.floor(minutes / 60);
    const minutesLeft = minutes % 60;

    if (hours > 0) {
      return `${hours}h ${minutesLeft}min`;
    } else {
      return `${minutesLeft}min`;
    }
  }

  return (
    <CoursesContainer>
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
    </CoursesContainer>
  );
}
