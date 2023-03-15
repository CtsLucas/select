import styled from 'styled-components';

export const JourneyStatisticsContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.indigo[900]};
  padding: 1rem 0;
  margin-bottom: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const StatisticsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  & > strong {
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1rem;

    @media (min-width: 768px) {
      font-size: 1rem;
      line-height: 1.25rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.25rem;
      line-height: 1.5rem;
    }
  }

  & > .statisticsItem__content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    & > span {
      font-size: 0.75rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.zinc[300]};

      @media (min-width: 768px) {
        font-size: 0.875rem;
        line-height: 1rem;
      }

      @media (min-width: 1024px) {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }
  }
`;
