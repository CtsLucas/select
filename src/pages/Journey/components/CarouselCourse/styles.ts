import styled from 'styled-components';

export const CarouselCourseContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 1.25rem;

  & > .keen-slider.slider > .keen-slider__slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > .keen-slider.thumbnail > .keen-slider__slide {
    flex: 1;

    background: ${({ theme }) => theme.colors.indigo[900]};
    border: 2px solid transparent;
    border-radius: 8px;
    padding: 0.75rem 1rem;
    transition: background 0.2s ease-in-out;
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      background: ${({ theme }) => theme.colors.indigo[700]};
      border: 2px solid ${({ theme }) => theme.colors.indigo[600]};
    }

    @media (max-width: 768px) {
      max-width: 240px;
      min-width: 240px;
    }

    &.active {
      background: ${({ theme }) => theme.colors.indigo[600]};
      border: 2px solid ${({ theme }) => theme.colors.indigo[400]};

      & > strong {
        color: ${({ theme }) => theme.colors.zinc[100]};
      }
    }

    & > strong {
      color: ${({ theme }) => theme.colors.zinc[300]};
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.25rem;
    }

    & > span {
      width: 2rem;
      height: 2rem;
      padding: 0.5rem;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.indigo[400]};

      color: ${({ theme }) => theme.colors.zinc[300]};
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.25rem;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
