import styled from 'styled-components';

export const CourseContainer = styled.div`
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CourseContent = styled.div`
  width: 100%;
  max-width: 90rem;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1440px) {
    padding: 0;
  }
`;

export const CourseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CourseDescription = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;

  & > .course-description__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5rem;

    & > strong {
      color: ${({ theme }) => theme.colors.zinc[100]};
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.25rem;

      @media (min-width: 768px) {
        font-size: 1.25rem;
        line-height: 1.5rem;
      }
    }

    & > p {
      color: ${({ theme }) => theme.colors.zinc[100]};
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.125rem;

      @media (min-width: 768px) {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }
  }
`;
