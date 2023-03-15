import styled from 'styled-components';

export const EmptyContentContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  strong {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.zinc[200]};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25rem;
  }
`;
