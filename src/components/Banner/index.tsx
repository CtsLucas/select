import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'phosphor-react';

import {
  BannerContainer,
  MaskBanner,
  BannerHeader,
  BannerContent,
  BannerFooter,
} from './styles';

export interface BannerType {
  instructor: string;
  id: string;
  thumb: string;
  title: string;
}

export interface BannerProps {
  data: BannerType;
  onLoading: () => void;
}

export function Banner({ data, onLoading }: BannerProps) {
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
    <BannerContainer imageURL={thumb}>
      <MaskBanner>
        <BannerHeader>
          <span>{instructor}</span>
        </BannerHeader>

        <BannerContent>
          <h1>{title}</h1>
        </BannerContent>

        <BannerFooter>
          <Plus size={16} />
          <Link to={`/courses/${id}`}>Mais Detalhes</Link>
        </BannerFooter>
      </MaskBanner>
    </BannerContainer>
  );
}
