import { Link } from 'react-router-dom';

import { DropDownMenu } from '@components';
import logoSVG from '@/assets/logo.svg';

import { HeaderContainer, HeaderContent } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <img src={logoSVG} alt="" />
        </Link>

        <DropDownMenu />
      </HeaderContent>
    </HeaderContainer>
  );
}
