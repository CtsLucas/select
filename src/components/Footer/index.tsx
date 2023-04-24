import logoSVG from '@assets/logo.svg';

import { FooterContainer, FooterContent } from './styles';
import { useAnalyticsEventTracker } from '@/hooks/useAnalyticsEventTracker';

export default function Footer() {
  const gaEventTracker = useAnalyticsEventTracker('Contact us');
  return (
    <FooterContainer>
      <FooterContent>
        <img src={logoSVG} alt="" />

        <span>
          2023 © Todos os direitos reservados. Lucas Cavalcante Silva
          <a href="#" onClick={() => gaEventTracker('call')}>
            Call Us
          </a>
          <a
            href="mailto:lucas.cavalcante.dev@icloud.com"
            onClick={() => gaEventTracker('email')}
          >
            Write to us
          </a>
        </span>
      </FooterContent>
    </FooterContainer>
  );
}
