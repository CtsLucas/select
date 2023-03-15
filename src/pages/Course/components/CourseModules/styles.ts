import styled from 'styled-components';

export const ModulesContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
  flex: 1;

  & > .modules__header {
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
  }

  & > .modules__content {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
