import {
  FileArrowDown,
  Medal,
  MonitorPlay,
  WarningOctagon,
} from 'phosphor-react';

import { useCourse } from './useCourse';
import { formatLevel } from '../../utils/formatters';

import { Accordion } from './components/Accordion';
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

export function Course() {
  const { course, modules } = useCourse();

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
