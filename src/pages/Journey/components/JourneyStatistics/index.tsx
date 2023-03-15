import { ClockAfternoon, MonitorPlay } from 'phosphor-react';

import { JourneyType } from '../../../../@types/Contents';
import { formatDuration } from '../../../../utils/formatters';
import { Separator } from '../../../../components/Separator';

import { JourneyStatisticsContainer, StatisticsItem } from './styles';

interface JourneyStatisticsProps {
  journey?: JourneyType;
}

export function JourneyStatistics({ journey }: JourneyStatisticsProps) {
  return (
    <JourneyStatisticsContainer>
      <StatisticsItem>
        <strong>Tempo estimado</strong>
        <div className="statisticsItem__content">
          <ClockAfternoon size={24} />
          <span>{formatDuration(journey?.duration || 0)}</span>
        </div>
      </StatisticsItem>
      <Separator size={40} />
      <StatisticsItem>
        <strong>Total de cursos</strong>
        <div className="statisticsItem__content">
          <MonitorPlay size={24} />
          <span>
            {journey?.countCourses === 1
              ? `${journey?.countCourses} Curso`
              : `${journey?.countCourses} Cursos`}
          </span>
        </div>
      </StatisticsItem>
    </JourneyStatisticsContainer>
  );
}
