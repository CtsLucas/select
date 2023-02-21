import { HeaderContainer, HeaderContent } from './styles';

import logoSVG from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { DropDownMenu } from '../DropDownMenu';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/home">
          <img src={logoSVG} alt="" />
        </Link>

        <DropDownMenu />
      </HeaderContent>
    </HeaderContainer>
  );
}
