import { Plus } from 'phosphor-react';
import { Link } from 'react-router-dom';

import { BannerContainer, MaskBanner } from './styles';

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

  return (
    <BannerContainer>
      <img src={thumb} alt="" onLoad={handleLoading} />

      <MaskBanner>
        <div className="author">
          <span>{instructor}</span>
        </div>

        <div className="title">
          <h1>{title}</h1>
        </div>

        <div className="details">
          <Plus size={16} />
          <Link to={`/courses/${id}`}>Mais Detalhes</Link>
        </div>
      </MaskBanner>
    </BannerContainer>
  );
}
