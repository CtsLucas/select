import logoSVG from '@assets/logo.svg';

import { FooterContainer, FooterContent } from './styles';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <img src={logoSVG} alt="" />

        <span>
          2023 © Todos os direitos reservados. Lucas Cavalcante Silva.
        </span>
      </FooterContent>
    </FooterContainer>
  );
}
