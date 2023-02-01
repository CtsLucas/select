import styled from 'styled-components';

export const CauroselContainer = styled.div`
  padding-left: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;

interface TitleProps {
  titleAlign?: 'left' | 'right' | 'center';
}

export const Title = styled.div<TitleProps>`
  width: 100%;
  padding-right: 1.5rem;
  text-align: ${({ titleAlign }) => titleAlign};

  & > strong {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.75rem;
  }
`;

export const SlidesContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;

  overflow: hidden;
`;
