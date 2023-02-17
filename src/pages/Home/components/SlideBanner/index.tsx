import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'phosphor-react';

import {
  SlideBannerContainer,
  SlideBanerMask,
  SlideBannerHeader,
  SlideBannerContent,
  SlideBannerFooter,
} from './styles';

export interface SlideBannerType {
  instructor: string;
  id: string;
  thumb: string;
  title: string;
}

export interface SlideBannerProps {
  data: SlideBannerType;
  onLoading: () => void;
}

export function SlideBanner({ data, onLoading }: SlideBannerProps) {
  const { id, thumb, instructor, title } = data;

  function handleLoading() {
    onLoading();
  }

  useEffect(() => {
    const image = new Image();
    image.src = thumb;
    image.onload = handleLoading;
  }, [thumb]);

  return (
    <SlideBannerContainer imageURL={thumb}>
      <SlideBanerMask>
        <SlideBannerHeader>
          <span>{instructor}</span>
        </SlideBannerHeader>

        <SlideBannerContent>
          <h1>{title}</h1>
        </SlideBannerContent>

        <SlideBannerFooter>
          <Plus size={16} />
          <Link to={`/courses/${id}`}>Mais Detalhes</Link>
        </SlideBannerFooter>
      </SlideBanerMask>
    </SlideBannerContainer>
  );
}
