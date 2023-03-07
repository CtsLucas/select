import { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LessonType } from '../../@types/Contents';
import { ContentsContext } from '../../contexts/ContentsContext';
import { api } from '../../lib/axios';
import { ModuleType } from './components/Accordion';

interface ResponseProps {
  modules: ModuleProps[];
}

interface ModuleProps {
  duration: number;
  lessons: LessonType[];
  title: string;
}

export function useCourse() {
  const [modules, setModules] = useState<ModuleType[]>([]);

  const { id } = useParams();
  const { contents } = useContext(ContentsContext);

  const course = contents.courses?.find((product) => {
    return product.id === id;
  });

  const fetchCourses = useCallback(async () => {
    try {
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
    }
  }, []);

  useEffect(() => {
    fetchCourses();

    window.scrollTo(0, 0);
  }, []);

  return { course, modules };
}
