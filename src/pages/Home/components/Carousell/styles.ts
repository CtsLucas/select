import styled, { css } from 'styled-components';

interface CarousellProps {
  variant: 'banner' | 'journey' | 'course';
}

export const CarousellContainer = styled.div<CarousellProps>`
  padding-left: ${({ variant }) => (variant !== 'banner' ? '1.5rem' : '0')};
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
    max-width: 340px;
    min-width: 340px;
  `,
  course: css`
    max-width: 248px;
    min-width: 248px;
  `,
};

export const CarousellContent = styled.div<CarousellProps>`
  .navigation-wrapper {
    position: relative;
  }

  .keen-slider__slide {
    ${({ variant }) => slideVariant[variant] || slideVariant.banner}
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
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    cursor: pointer;

    color: ${({ theme }) => theme.colors.zinc[100]};
  }

  .arrow:focus {
    box-shadow: none;
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