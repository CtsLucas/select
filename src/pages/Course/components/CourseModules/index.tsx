import { LessonType } from '@/types/Contents';
import { Accordion } from '@pages/Course/components';

import { ModulesContainer } from './styles';

interface ModulesProps {
  modules: ModuleType[];
}

export interface ModuleType {
  duration: number;
  lessons: LessonType[];
  title: string;
}

export default function CourseModules({ modules }: ModulesProps) {
  return (
    <ModulesContainer>
      <div className="modules__header">
        <strong>Conteúdo do curso</strong>
      </div>

      <div className="modules__content">
        <Accordion data={modules} />
      </div>
    </ModulesContainer>
  );
}
