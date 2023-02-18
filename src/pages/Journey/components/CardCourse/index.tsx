import { ChartBar, Clock } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

import { CourseType } from '../../../../@types/Contents';
import { formatDuration, formatLevel } from '../../../../utils/formatters';

import {
  CardCourseContainer,
  CardCourseImage,
  CardCourseContent,
  CardCourseFooter,
  CardButton,
} from './styles';

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
      <CardCourseImage imageURL={thumb} />

      <CardCourseContent>
        <h2>{title}</h2>
        <span>{instructor}</span>
        <p>{description}</p>
        <CardCourseFooter>
          <span>
            <ChartBar />
            {formatLevel(level)}
          </span>
          <span>
            <Clock />
            {formatDuration(duration)}
          </span>
        </CardCourseFooter>
        <CardButton onClick={() => navigate(`/courses/${id}`)}>
          Começar curso
        </CardButton>
      </CardCourseContent>
    </CardCourseContainer>
  );
}
