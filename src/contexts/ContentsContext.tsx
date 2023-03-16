import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import axios from 'axios';

import { CourseType, JourneyType } from '@/types/models';
import { api } from '@/lib/axios';

interface ContentsContextType {
  contents: Contents;
  loading: boolean;
  handleLoading: (value?: boolean) => void;
}

export const ContentsContext = createContext({} as ContentsContextType);

interface ContentsProviderProps {
  children: ReactNode;
}

interface Contents {
  courses?: CourseType[];
  journeys?: JourneyType[];
}

export function ContentsProvider({ children }: ContentsProviderProps) {
  const [contents, setContents] = useState<Contents>({});
  const [loading, setLoading] = useState(true);

  function handleLoading(value?: boolean) {
    setLoading(value ?? !loading);
  }

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
    handleLoading(true);
    try {
      const { data: journeysData } = await api.get('/journeys');

      const journeysId = journeysData.map(
        (jorney: JourneyType) => jorney.pathID
      );

      const coursesData = await axios.all<Array<CourseType>>(
        journeysId.map((id: string) =>
          api.get(`/journeys/${id}/courses`).then((res) => res.data)
        )
      );

      const journeys = journeysData.map(
        (journey: JourneyType, index: number) => {
          const details = getDetailsFromCourses(coursesData[index]);

          return {
            ...journey,
            ...details,
          };
        }
      );

      const { data: courses } = await api.post('/list-type', {
        listType: 'COURSES',
      });

      setContents((prevState) => ({
        ...prevState,
        journeys,
        courses,
      }));
    } catch (error) {
      console.log('error: ', error);
    } finally {
      handleLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContents();
  }, []);

  return (
    <ContentsContext.Provider value={{ contents, loading, handleLoading }}>
      {children}
    </ContentsContext.Provider>
  );
}

export function useContent() {
  return useContext(ContentsContext);
}
