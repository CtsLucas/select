import { LessonType } from '../../../../@types/Contents';
import { Accordion } from '../Accordion';

import { ModulesContainer } from './styles';

interface ModulesProps {
  modules: ModuleType[];
}

export interface ModuleType {
  duration: number;
  lessons: LessonType[];
  title: string;
}

export function Modules({ modules }: ModulesProps) {
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
