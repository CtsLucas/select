import { HeaderContainer, HeaderContent, IconAvatar } from './styles';

import logoSVG from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <img src={logoSVG} alt="" />
        </Link>

        <IconAvatar>
          <span>LC</span>
        </IconAvatar>
      </HeaderContent>
    </HeaderContainer>
  );
}
