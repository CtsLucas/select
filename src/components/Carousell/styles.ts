import styled from 'styled-components';

interface CarousellContainerProps {
  variant?: 'banner' | 'journey' | 'course';
}

export const CarousellContainer = styled.div<CarousellContainerProps>`
  padding-left: ${({ variant }) => (variant !== 'banner' ? '1.5rem' : '0')};

  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  overflow: hidden;
`;

export const Title = styled.div`
  width: 100%;

  & > strong {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.75rem;
  }
`;

export const SlidesContainer = styled.div`
  .navigation-wrapper {
    position: relative;
  }

  .dots {
    display: flex;
    padding: 0.5rem 0;
    justify-content: center;
  }

  .dot {
    border: 1px solid transparent;
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.colors.zinc[500]};
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: ${({ theme }) => theme.colors.zinc[100]};
    border: 1px solid ${({ theme }) => theme.colors.indigo[500]};
  }
`;
