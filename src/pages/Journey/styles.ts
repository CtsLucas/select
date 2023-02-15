import styled from 'styled-components';

export const JourneyContainer = styled.div`
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

export const DetailsContainer = styled.div`
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
    }
  }
`;

export const JourneyContent = styled.div`
  padding: 0 1.5rem;
  margin-top: 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
