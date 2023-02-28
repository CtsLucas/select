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

export const CourseDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const CourseDetailsHeader = styled.div`
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
`;

export const CourseDetailsContent = styled.div`
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
`;

export const CourseDetailsItem = styled.div`
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

export const CourseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  & > .contentEmpty {
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
  }
`;

export const CourseModules = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;

  flex: 1;
`;

export const CourseModulesHeader = styled.div`
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
`;

export const CourseModulesContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CourseDescription = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const CourseDescriptionHeader = styled.div`
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
`;

export const CourseDescriptionContent = styled.div``;
