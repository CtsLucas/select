import { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CourseType } from '../../@types/Contents';
import { ContentsContext } from '../../contexts/ContentsContext';
import { api } from '../../lib/axios';

export function useJourney() {
  const [courses, setCourses] = useState<CourseType[]>([]);

  const {
    contents: { journeys },
  } = useContext(ContentsContext);

  const { id } = useParams();

  const journey = journeys?.find((journey) => journey.pathID === id);

  const fetchCourses = useCallback(async () => {
    try {
      const { data } = await api.get(`/journeys/${id}/courses`);

      setCourses(data || []);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchCourses();

    window.scrollTo(0, 0);
  }, []);

  return { journey, courses };
}
