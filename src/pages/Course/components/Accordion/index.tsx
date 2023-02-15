import { CaretDown, PlayCircle } from 'phosphor-react';

import { LessonType } from '../../../../@types/Contents';
import { formatDuration } from '../../../../utils/formatters';

import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
  Lesson,
} from './styles';

interface AccordionProps {
  data: Module[];
}

interface Module {
  id: string;
  title: string;
  duration: number;
  lessons: LessonType[];
}

export function Accordion({ data }: AccordionProps) {
  /* TO-DO: reassess component name */
  return (
    <AccordionRoot type="single" collapsible>
      {data.map((module) => (
        <AccordionItem value={module.id} key={module.id}>
          <AccordionHeader>
            <AccordionTrigger>
              <CaretDown size={16} />
              <div className="informations">
                <strong>{module.title}</strong>
                <span>{formatDuration(module.duration)}</span>
              </div>
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            {module.lessons.map((lesson) => (
              <Lesson key={lesson.id}>
                <PlayCircle />
                <strong>{lesson.title}</strong>
                <span>{formatDuration(lesson.duration)}</span>
              </Lesson>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
}
