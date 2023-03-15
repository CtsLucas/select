import styled from 'styled-components';

export const JourneyContainer = styled.div`
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
