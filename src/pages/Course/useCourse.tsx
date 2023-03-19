import { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { LessonType, ModuleType } from '@/types/models';
import { ContentsContext } from '@contexts/ContentsContext';
import { api } from '@/lib/axios';

interface ResponseProps {
  modules: ModuleType[];
}

export function useCourse() {
  const [modules, setModules] = useState<ModuleType[]>([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const { contents } = useContext(ContentsContext);

  const course = contents.courses?.find((product) => {
    return product.id === id;
  });

  const fetchCourses = useCallback(async () => {
    try {
      setLoading(true);
      const {
        data: { modules },
      } = await api.get<ResponseProps>(`/lessons/${id}`);

      const modulesWithLessons = modules.map((module) => {
        const duration = module.lessons.reduce(
          (acc: number, lesson: LessonType) => {
            return acc + lesson.duration;
          },
          0
        );

        return {
          ...module,
          duration,
        };
      });

      setModules(modulesWithLessons);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCourses();

    window.scrollTo(0, 0);
  }, []);

  return { course, modules, loading };
}
