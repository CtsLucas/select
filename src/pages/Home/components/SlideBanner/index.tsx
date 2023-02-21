import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChartBar, ClockAfternoon, MonitorPlay, Plus } from 'phosphor-react';

import { Banner } from '../../../../components/Banner';

import {
  SlideBannerContainer,
  SlideBannerHeader,
  SlideBannerContent,
  SlideBannerFooter,
  LinkButton,
} from './styles';
import { formatDuration, formatLevel } from '../../../../utils/formatters';

export interface SlideBannerType {
  instructor: string;
  id: string;
  thumb: string;
  title: string;
  duration: number;
  coursesCount: number;
  level: string;
}

export interface SlideBannerProps {
  data: SlideBannerType;
  onLoading: () => void;
}

export function SlideBanner({ data, onLoading }: SlideBannerProps) {
  const { id, thumb, instructor, title, duration, coursesCount, level } = data;

  function handleLoading() {
    onLoading();
  }

  useEffect(() => {
    const image = new Image();
    image.src = thumb;
    image.onload = handleLoading;
  }, [thumb]);

  return (
    <Banner backgroundImage={thumb}>
      <SlideBannerContainer>
        <SlideBannerHeader>
          <span>{instructor}</span>
        </SlideBannerHeader>

        <SlideBannerContent>
          <h1>{title}</h1>

          <div className="details">
            <span>
              <ClockAfternoon size={20} /> {formatDuration(duration)}
            </span>
            <span>
              <MonitorPlay size={20} />{' '}
              {coursesCount === 1
                ? `${coursesCount} Capítulo`
                : `${coursesCount} Capítulos`}
            </span>
            <span>
              <ChartBar size={20} /> {formatLevel(level)}
            </span>
          </div>
        </SlideBannerContent>

        <SlideBannerFooter>
          <LinkButton to={`../courses/${id}`}>
            <Plus size={16} weight="bold" />
            <span>Mais Detalhes</span>
          </LinkButton>
        </SlideBannerFooter>
      </SlideBannerContainer>
    </Banner>
  );
}
