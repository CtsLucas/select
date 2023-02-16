import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import axios from 'axios';

import { CourseType, Journey } from '../@types/Contents';

import { api } from '../lib/axios';

interface ContentsContextType {
  contents: Contents;
}

export const ContentsContext = createContext({} as ContentsContextType);

interface ContentsProviderProps {
  children: ReactNode;
}

interface Contents {
  courses?: CourseType[];
  journeys?: Journey[];
}

export function ContentsProvider({ children }: ContentsProviderProps) {
  const [contents, setContents] = useState<Contents>({});

  function getDetailsFromCourses(journey: CourseType[]) {
    const countCourses = journey.length;

    const duration = journey.reduce((acc, course) => {
      return acc + course.duration;
    }, 0);

    return {
      countCourses,
      duration,
    };
  }

  const fetchContents = useCallback(async () => {
    try {
      const { data: journeysData } = await api.get('/journeys');

      const journeysId = journeysData.map((jorney: Journey) => jorney.pathID);

      const coursesData = await axios.all<Array<CourseType>>(
        journeysId.map((id: string) =>
          api.get(`/journeys/${id}/courses`).then((res) => res.data)
        )
      );

      const journeys = journeysData.map((journey: Journey, index: number) => {
        const details = getDetailsFromCourses(coursesData[index]);

        return {
          ...journey,
          ...details,
        };
      });

      const { data: courses } = await api.post('/list-type', {
        listType: 'COURSES',
      });

      setContents((prevState) => ({
        ...prevState,
        journeys,
        courses,
      }));
    } catch (err) {
      console.log('error: ', err);
    }
  }, []);

  useEffect(() => {
    fetchContents();
  }, []);

  return (
    <ContentsContext.Provider value={{ contents }}>
      {children}
    </ContentsContext.Provider>
  );
}
