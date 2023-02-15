import styled from 'styled-components';

export const CourseContainer = styled.div`
  padding-bottom: 1rem;
`;

export const BannerWrapper = styled.div`
  background: ${({ theme }) => theme.colors.indigo[400]};
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: end;
  gap: 1rem;

  & > strong {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.5rem;
  }

  & > p {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.25rem;
  }
`;

export const CourseContent = styled.div`
  padding: 1rem 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 0.75rem;

  & > strong {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.25rem;
  }

  & > .details-wrapper {
    background: ${({ theme }) => theme.colors.indigo[900]};
    width: 100%;
    padding: 1rem 1.5rem;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;

    & > .details-item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
  }
`;

export const Modules = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;

  & > strong {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.25rem;
  }

  & > .modules-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
