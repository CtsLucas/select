import { useEffect } from 'react';
import { Clock } from 'phosphor-react';

import { formatDuration, formatLevel } from '@utils/formatters';
import { LevelIcon } from '@components';

import {
  SlideCourseContainer,
  SlideCourseWrapper,
  SlideCourseHeader,
  SlideCourseFooter,
  SlideIcon,
} from './styles';

export interface SlideCourseType {
  id: string;
  thumb: string;
  title: string;
  instructor: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
}

export interface SlideCourseProps {
  data: SlideCourseType;
  onLoading: () => void;
}

export default function SlideCourse({ data, onLoading }: SlideCourseProps) {
  const { id, thumb, title, instructor, level, duration } = data;

  function handleLoading() {
    onLoading();
  }

  useEffect(() => {
    const image = new Image();
    image.src = thumb;
    image.onload = handleLoading;
  }, [thumb]);

  return (
    <SlideCourseContainer to={`../courses/${id}`}>
      <SlideIcon imageURL={thumb} />
      <SlideCourseWrapper>
        <SlideCourseHeader>
          <strong>{title}</strong>
          <span>{instructor}</span>
        </SlideCourseHeader>

        <SlideCourseFooter>
          <span>
            <LevelIcon level={level} />
            {formatLevel(level)}
          </span>
          <span>
            <Clock size={20} />
            {formatDuration(duration)}
          </span>
        </SlideCourseFooter>
      </SlideCourseWrapper>
    </SlideCourseContainer>
  );
}
