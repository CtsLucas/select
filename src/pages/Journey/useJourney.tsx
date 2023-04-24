import { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CourseType } from '@/types/models';
import { ContentsContext } from '@contexts/ContentsContext';
import { api } from '@/lib/axios';

export function useJourney() {
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [loading, setLoading] = useState(true);

  const {
    contents: { journeys },
  } = useContext(ContentsContext);

  const { id } = useParams();

  const journey = journeys?.find((journey) => journey.pathID === id);

  const fetchCourses = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`/journeys/${id}/courses`);

      setCourses(data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCourses();

    window.scrollTo(0, 0);
  }, []);

  return { journey, courses, loading };
}
