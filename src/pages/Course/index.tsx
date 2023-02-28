import { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  FileArrowDown,
  Medal,
  MonitorPlay,
  WarningOctagon,
} from 'phosphor-react';

import { api } from '../../lib/axios';
import { LessonType } from '../../@types/Contents';
import { formatLevel } from '../../utils/formatters';
import { ContentsContext } from '../../contexts/ContentsContext';

import { Accordion, ModuleType } from './components/Accordion';
import { Banner } from '../../components/Banner';
import { LevelIcon } from '../../components/LevelIcon';

import {
  CourseContainer,
  CourseContent,
  CourseDescription,
  CourseDescriptionContent,
  CourseDescriptionHeader,
  CourseDetails,
  CourseDetailsContent,
  CourseDetailsHeader,
  CourseDetailsItem,
  CourseModules,
  CourseModulesContent,
  CourseModulesHeader,
  CourseWrapper,
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
              <LevelIcon size={24} level={course?.level} />
              <strong>{formatLevel(course?.level || '')}</strong>
            </CourseDetailsItem>
            <CourseDetailsItem>
              <Medal size={24} />
              <strong>Certificado ao concluir o curso</strong>
            </CourseDetailsItem>
          </CourseDetailsContent>
        </CourseDetails>

        <CourseWrapper>
          {modules.length > 0 ? (
            <>
              <CourseModules>
                <CourseModulesHeader>
                  <strong>Conteúdo do curso</strong>
                </CourseModulesHeader>

                <CourseModulesContent>
                  <Accordion data={modules} />
                </CourseModulesContent>
              </CourseModules>

              <CourseDescription>
                <CourseDescriptionHeader>
                  <strong>Sobre o curso</strong>
                </CourseDescriptionHeader>

                <CourseDescriptionContent>
                  <p>{course?.description}</p>
                </CourseDescriptionContent>

                <CourseDescriptionHeader>
                  <strong>Autor</strong>
                </CourseDescriptionHeader>

                <CourseDescriptionContent>
                  <p>{course?.instructor}</p>
                </CourseDescriptionContent>
              </CourseDescription>
            </>
          ) : (
            <div className="contentEmpty">
              <strong>
                <WarningOctagon size={32} weight="duotone" />
                Conteúdo em construção...{' '}
              </strong>
              <p>
                Esse conteúdo ainda está sendo desenvolvido, mas não se
                preocupe, quando estiver disponível você será notificado!
              </p>
            </div>
          )}
        </CourseWrapper>
      </CourseContent>
    </CourseContainer>
  );
}
