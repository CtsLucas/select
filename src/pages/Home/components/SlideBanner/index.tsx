import { useEffect } from 'react';
import { ClockAfternoon, MonitorPlay, Plus } from 'phosphor-react';

import { SlideBannerType } from '@/types/models';
import { formatDuration, formatLevel } from '@utils/formatters';
import { Banner, LevelIcon } from '@components';

import {
  SlideBannerContainer,
  SlideBannerHeader,
  SlideBannerContent,
  SlideBannerFooter,
  LinkButton,
} from './styles';

interface SlideBannerProps {
  data: SlideBannerType;
  onLoading: () => void;
}

export default function SlideBanner({ data, onLoading }: SlideBannerProps) {
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
              <LevelIcon level={level} /> {formatLevel(level)}
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
