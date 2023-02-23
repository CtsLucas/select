import styled from 'styled-components';

export const JourneyContainer = styled.div`
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  max-width: 75rem;

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
