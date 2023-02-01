import logoSVG from '../../assets/logo.svg';

import { FooterContainer } from './styles';

export function Footer() {
  return (
    <FooterContainer>
      <img src={logoSVG} alt="" />

      <div>
        <span>
          2023 © Todos os direitos reservados. Lucas Cavalcante Silva.
        </span>
      </div>
    </FooterContainer>
  );
}
