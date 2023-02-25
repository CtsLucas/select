import { ArrowLeft } from 'phosphor-react';
import { Link } from 'react-router-dom';
import notFoundImage from '../../assets/not-found.svg';
import { NotFoundContainer } from './styles';

export function NotFound() {
  return (
    <NotFoundContainer>
      <img src={notFoundImage} alt="" />

      <h1>Página não encontrada!</h1>

      <Link to={'/'}>
        Volte a Home <ArrowLeft size={20} weight="bold" />
      </Link>
    </NotFoundContainer>
  );
}
