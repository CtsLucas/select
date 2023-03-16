import { CaretDown, PlayCircle } from 'phosphor-react';

import { formatDuration } from '@utils/formatters';
import { ModuleType } from '@/types/models';

import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
  Lesson,
} from './styles';

interface AccordionProps {
  data: ModuleType[];
}

export default function Accordion({ data }: AccordionProps) {
  if (!data) return null;

  return (
    <AccordionRoot type="single" collapsible>
      {data.map((module) => (
        <AccordionItem value={module.title} key={module.title}>
          <AccordionHeader>
            <AccordionTrigger>
              <CaretDown size={16} />
              <strong>{module.title}</strong>
              <span>{formatDuration(module.duration)}</span>
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
