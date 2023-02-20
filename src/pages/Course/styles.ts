import styled from 'styled-components';

export const CourseContainer = styled.div`
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BannerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  position: relative;
  z-index: 10;
  margin: 0 auto;
  padding: 6rem 0 3rem;
  width: 100%;
  height: 20rem;

  @media (min-width: 768px) {
    height: 30rem;
    justify-content: center;
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    padding: 0 4rem;
  }

  & > h1 {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5rem;

    @media (min-width: 768px) {
      font-size: 2rem;
      line-height: 2.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 3rem;
      line-height: 3.5rem;
    }

    @media (min-width: 1440px) {
      font-size: 4rem;
      line-height: 4.5rem;
    }
  }

  & > p {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.25rem;

    margin-top: 1.25rem;

    display: block;
    max-width: 52rem;

    @media (min-width: 768px) {
      font-size: 1.25rem;
      line-height: 1.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.5rem;
      line-height: 1.75rem;
    }
  }
`;

export const CourseContent = styled.div`
  width: 100%;
  max-width: 90rem;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 1440px) {
    padding: 0;
  }
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
