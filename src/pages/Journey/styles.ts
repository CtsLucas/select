import styled from 'styled-components';

export const JourneyContainer = styled.div`
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
    height: 45rem;
    padding: 0 4rem;
  }

  & > h1 {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.75rem;

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
    margin-top: 1.25rem;
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.25rem;

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

export const DetailsContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.indigo[900]};
  padding: 1rem 0;
  margin-bottom: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const Separator = styled.div`
  border: 1px solid white;
  height: 2.5rem;
`;

export const Detail = styled.div`
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

  & > .content {
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

export const JourneyContent = styled.div`
  padding: 0 1.5rem;
  margin-top: 1.25rem;
  width: 100%;
  max-width: 90rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 2rem;
  }

  @media (min-width: 1440px) {
    padding: 0;
  }
`;
