import { FileArrowDown, Medal, MonitorPlay } from 'phosphor-react';

import { CourseType } from '@/types/Contents';

import { LevelIcon } from '@components';
import { formatLevel } from '@utils/formatters';

import { CourseStatisticsContainer, StatisticsItem } from './styles';

interface CourseStatisticsProps {
  course?: CourseType;
}

export default function CourseStatistics({ course }: CourseStatisticsProps) {
  return (
    <CourseStatisticsContainer>
      <div className="course-statistics__header">
        <strong>Detalhes do curso</strong>
      </div>
      <div className="course-statistics__content">
        <StatisticsItem>
          <MonitorPlay size={24} />
          <strong>{course?.modules.length} Capítulos</strong>
        </StatisticsItem>
        <StatisticsItem>
          <FileArrowDown size={24} />
          <strong>0 materiais extras</strong>
        </StatisticsItem>
        <StatisticsItem>
          <LevelIcon size={24} level={course?.level} />
          <strong>{formatLevel(course?.level || '')}</strong>
        </StatisticsItem>
        <StatisticsItem>
          <Medal size={24} />
          <strong>Certificado ao concluir o curso</strong>
        </StatisticsItem>
      </div>
    </CourseStatisticsContainer>
  );
}
