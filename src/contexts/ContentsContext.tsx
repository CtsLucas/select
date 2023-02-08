import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { Course, Journey, Lesson } from '../@types/Contents';

import { api } from '../lib/axios';

interface ContentsContextType {
  contents: Contents;
}

export const ContentsContext = createContext({} as ContentsContextType);

interface ContentsProviderProps {
  children: ReactNode;
}

interface Contents {
  courses?: Course[];
  journeys?: Journey[];
  lessons?: Lesson[];
}

export function ContentsProvider({ children }: ContentsProviderProps) {
  const [contents, setContents] = useState<Contents>({});

  const fetchContents = useCallback(async () => {
    try {
      const { data } = await api.post('/list-type', {
        listType: 'ALL',
      });

      setContents(data);
    } catch (error) {
      console.log(error);
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
