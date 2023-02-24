import { useCallback, useContext, useEffect, useState } from 'react';
import { ClockAfternoon, MonitorPlay } from 'phosphor-react';
import { useParams } from 'react-router-dom';

import { api } from '../../lib/axios';
import { CourseType } from '../../@types/Contents';
import { formatDuration } from '../../utils/formatters';
import { ContentsContext } from '../../contexts/ContentsContext';

import { Banner } from '../../components/Banner';
import { Separator } from '../../components/Separator';
import { CarouselCourse } from './components/CarouselCourse';

import {
  Detail,
  DetailsContainer,
  JourneyContainer,
  JourneyContent,
} from './styles';

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

    window.scrollTo(0, 0);
  }, []);

  return (
    <JourneyContainer>
      <Banner
        backgroundImage={journey?.medias.banner ? journey?.medias.banner : ''}
        title={journey?.title}
        description={journey?.description}
      />

      <DetailsContainer>
        <Detail>
          <strong>Tempo estimado</strong>
          <div className="content">
            <ClockAfternoon size={24} />
            <span>{formatDuration(journey?.duration || 0)}</span>
          </div>
        </Detail>
        <Separator size={40} />
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
        <h2>{journey?.title}</h2>

        <CarouselCourse slides={courses} />
      </JourneyContent>
    </JourneyContainer>
  );
}
