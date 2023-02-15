import { HeaderContainer, IconAvatar } from './styles';

import logoSVG from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoSVG} alt="" />
      </Link>

      <IconAvatar>
        <span>LC</span>
      </IconAvatar>
    </HeaderContainer>
  );
}
