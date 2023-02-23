import styled, { css } from 'styled-components';

interface CarouselProps {
  variant: 'banner' | 'journey' | 'course';
}

export const CarouselContainer = styled.div<CarouselProps>`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  overflow: hidden;

  & > strong {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.75rem;
  }
`;

const slideVariant = {
  banner: css`
    max-width: initial;
    min-width: initial;
  `,
  journey: css`
    max-width: 420px;
    min-width: 420px;
    padding: 0.25rem 0;

    @media (max-width: 768px) {
      max-width: 320px;
      min-width: 320px;
    }
  `,
  course: css`
    max-width: 248px;
    min-width: 248px;
    padding: 0.25rem 0;
  `,
};

export const CarouselContent = styled.div<CarouselProps>`
  .navigation-wrapper {
    position: relative;
  }

  .keen-slider__slide {
    ${({ variant }) => slideVariant[variant] || slideVariant.banner};
  }

  .dots {
    display: flex;
    padding: 0.5rem 0;
    justify-content: center;
    height: 1.75rem;
  }

  .dot {
    border: 1px solid transparent;
    width: 1.25rem;
    height: 1rem;
    background: ${({ theme }) => theme.colors.zinc[500]};
    border-radius: 12px;
    margin: 0 0.25rem;
    padding: 0.25rem;
    cursor: pointer;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: ${({ theme }) => theme.colors.indigo[500]};
    border: 2px solid ${({ theme }) => theme.colors.zinc[100]};
  }

  .dot:hover {
    background: ${({ theme }) => theme.colors.zinc[100]};
    border: 2px solid ${({ theme }) => theme.colors.indigo[500]};
  }

  .arrow {
    width: 30px;
    height: 100%;
    color: ${({ theme }) => theme.colors.zinc[500]};

    position: absolute;
    top: 50%;

    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.zinc[100]};
    }

    &:focus {
      box-shadow: none;
    }
  }

  .arrow--left {
    background: linear-gradient(90deg, #18181b 0%, rgba(24, 24, 27, 0) 100%);
    left: -5px;
  }

  .arrow--right {
    background: linear-gradient(90deg, rgba(24, 24, 27, 0) 0%, #18181b 100%);

    left: auto;
    right: 0px;
  }

  .arrow--disabled {
    fill: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    .arrow {
      display: none;
    }
  }
`;
