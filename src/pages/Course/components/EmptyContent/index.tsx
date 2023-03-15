import { WarningOctagon } from 'phosphor-react';

import { EmptyContentContainer } from './styles';

export default function EmptyContent() {
  return (
    <EmptyContentContainer>
      <strong>
        <WarningOctagon size={40} weight="duotone" />
        Conteúdo em construção...
      </strong>
      <p>
        Esse conteúdo ainda está sendo desenvolvido, mas não se preocupe, quando
        estiver disponível você será notificado!
      </p>
    </EmptyContentContainer>
  );
}
