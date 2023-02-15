import { useCallback, useContext, useEffect, useState } from 'react';
import { ClockAfternoon, MonitorPlay } from 'phosphor-react';
import { useParams } from 'react-router-dom';

import { formatDuration } from '../../utils/formatters';

import { api } from '../../lib/axios';
import { ContentsContext } from '../../contexts/ContentsContext';
import { CourseType } from '../../@types/Contents';

import {
  BannerWrapper,
  Detail,
  DetailsContainer,
  JourneyContainer,
  JourneyContent,
  Separator,
} from './styles';
import { CardCourse } from './components/CardCourse';

export function Journey() {
  const {
    contents: { journeys },
  } = useContext(ContentsContext);

  const { id } = useParams();

  const journey = journeys?.find((journey) => journey.pathID === id);

  const [courses, setCourses] = useState<CourseType[]>([]);

  const fetchCourses = useCallback(async () => {
    const { data } = await api.get(`/journeys/${id}/courses`);

    setCourses(data || []);
  }, []);

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <JourneyContainer>
      <BannerWrapper>
        <strong>{journey?.title}</strong>

        <p>{journey?.description}</p>
      </BannerWrapper>

      <DetailsContainer>
        <Detail>
          <strong>Tempo estimado</strong>
          <div className="content">
            <ClockAfternoon size={24} />
            <span>{formatDuration(journey?.duration || 0)}</span>
          </div>
        </Detail>
        <Separator />
        <Detail>
          <strong>Total de cursos</strong>
          <div className="content">
            <MonitorPlay size={24} />
            <span>
              {journey?.countCourses === 1
                ? `${journey?.countCourses} Curso`
                : `${journey?.countCourses} Cursos`}
            </span>
          </div>
        </Detail>
      </DetailsContainer>

      <JourneyContent>
        {courses.map((course) => {
          return <CardCourse data={course} key={course.id} />;
        })}
      </JourneyContent>
    </JourneyContainer>
  );
}
