import styled from 'styled-components';

export const CourseStatisticsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;

  & > .course-statistics__header {
    & > strong {
      color: ${({ theme }) => theme.colors.zinc[100]};
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.25rem;

      @media (min-width: 800px) {
        font-size: 1.25rem;
        line-height: 1.5rem;
      }
    }
  }

  & > .course-statistics__content {
    background: ${({ theme }) => theme.colors.indigo[900]};
    width: 100%;
    padding: 1rem 1.5rem;
    border-radius: 8px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;

    @media (max-width: 820px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const StatisticsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  & > strong {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;
