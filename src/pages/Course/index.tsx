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
  BannerContent,
  CourseContent,
  Details,
  Modules,
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
  }, []);

  return (
    <CourseContainer>
      <Banner
        backgroundImage={course?.medias.thumb ? course?.medias.thumb : ''}
      >
        <BannerContent>
          <h1>{course?.title}</h1>

          <p>{course?.description}</p>
        </BannerContent>
      </Banner>

      <CourseContent>
        <Details>
          <strong>Detalhes do curso</strong>
          <div className="details-wrapper">
            <div className="details-item">
              <MonitorPlay size={24} />
              <span>{course?.modules.length} Capítulos</span>
            </div>
            <div className="details-item">
              <FileArrowDown size={24} />
              <span>0 materiais extras</span>
            </div>
            <div className="details-item">
              <ChartBar size={24} />
              <span>{formatLevel(course?.level || '')}</span>
            </div>
            <div className="details-item">
              <Medal size={24} />
              Certificado ao concluir o curso
            </div>
          </div>
        </Details>

        <Modules>
          <strong>Capítulos do curso</strong>

          <div className="modules-wrapper ">
            <Accordion data={modules} />
          </div>
        </Modules>
      </CourseContent>
    </CourseContainer>
  );
}
