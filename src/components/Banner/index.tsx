import { Plus } from 'phosphor-react';
import { BannerContainer, MaskBanner } from './styles';

export function Banner() {
  return (
    <BannerContainer>
      <img
        src="https://assets.staart.com/app/_c/afc1ef67-d0fa-4f96-824d-3dd90eab1c12/thumb/Web_Card_1_1440x720.png"
        alt=""
      />

      <MaskBanner>
        <div className="author">
          <span>Mateus Silva</span>
        </div>

        <div className="title">
          <h1>Fundamentos do React</h1>
        </div>

        <div className="details">
          <Plus size={16}/>
          <span>Mais Detalhes</span>
        </div>
      </MaskBanner>
    </BannerContainer>
  );
}
