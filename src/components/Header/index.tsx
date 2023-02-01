import { HeaderContainer, IconAvatar } from './styles';

import logoSVG from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoSVG} alt="" />

      <IconAvatar>
        <span>LC</span>
      </IconAvatar>
    </HeaderContainer>
  );
}
