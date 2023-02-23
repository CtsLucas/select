import { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChartBar, FileArrowDown, Medal, MonitorPlay } from 'phosphor-react';

import { api } from '../../lib/axios';
import { LessonType } from '../../@types/Contents';
import { formatLevel } from '../../utils/formatters';
import { ContentsContext } from '../../contexts/ContentsContext';

import { Banner } from '../../components/Banner';
import { Accordion, ModuleType } from './components/Accordion';

import {
  CourseContainer,
  CourseContent,
  CourseDetails,
  CourseDetailsContent,
  CourseDetailsHeader,
  CourseDetailsItem,
  CourseModules,
  CourseModulesContent,
  CourseModulesHeader,
} from './styles';

interface ResponseProps {
  modules: ModuleProps[];
}

interface ModuleProps {
  duration: number;
  lessons: LessonType[];
  title: string;
}

export function Course() {
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

  return (
    <CourseContainer>
      <Banner
        backgroundImage={course?.medias.thumb ? course?.medias.thumb : ''}
        title={course?.title}
        description={course?.description}
      />

      <CourseContent>
        <CourseDetails>
          <CourseDetailsHeader>
            <strong>Detalhes do curso</strong>
          </CourseDetailsHeader>
          <CourseDetailsContent>
            <CourseDetailsItem>
              <MonitorPlay size={24} />
              <strong>{course?.modules.length} Capítulos</strong>
            </CourseDetailsItem>
            <CourseDetailsItem>
              <FileArrowDown size={24} />
              <strong>0 materiais extras</strong>
            </CourseDetailsItem>
            <CourseDetailsItem>
              <ChartBar size={24} />
              <strong>{formatLevel(course?.level || '')}</strong>
            </CourseDetailsItem>
            <CourseDetailsItem>
              <Medal size={24} />
              <strong>Certificado ao concluir o curso</strong>
            </CourseDetailsItem>
          </CourseDetailsContent>
        </CourseDetails>

        <CourseModules>
          <CourseModulesHeader>
            <strong>Conteúdo do curso</strong>
          </CourseModulesHeader>

          <CourseModulesContent>
            <Accordion data={modules} />
          </CourseModulesContent>
        </CourseModules>
      </CourseContent>
    </CourseContainer>
  );
}
