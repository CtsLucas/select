import { ChartBar, Clock } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

import { CourseType } from '../../../../@types/Contents';
import { formatDuration, formatLevel } from '../../../../utils/formatters';

import { CardCourseContainer } from './styles';

interface CardCourseProps {
  data: CourseType;
}

export function CardCourse({ data }: CardCourseProps) {
  const navigate = useNavigate();
  const {
    id,
    medias: { thumb },
    title,
    instructor,
    description,
    level,
    duration,
  } = data;

  return (
    <CardCourseContainer>
      <img src={thumb} alt="" />

      <div className="content">
        <strong>{title}</strong>
        <span>{instructor}</span>
        <p>{description}</p>
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
        <button onClick={() => navigate(`/courses/${id}`)}>
          Começar curso
        </button>
      </div>
    </CardCourseContainer>
  );
}
