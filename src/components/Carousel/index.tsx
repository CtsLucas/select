import { Courses } from './Slides/Courses';

import { CauroselContainer, Title, SlidesContainer } from './styles';

interface CauroselProps {
  title: string;
  titleAlign?: 'left' | 'right' | 'center';
}

export function Caurosel({ title, titleAlign = 'left' }: CauroselProps) {
  return (
    <CauroselContainer>
      <Title titleAlign={titleAlign}>
        <strong>{title}</strong>
      </Title>

      <SlidesContainer>
        <Courses />
      </SlidesContainer>
    </CauroselContainer>
  );
}
