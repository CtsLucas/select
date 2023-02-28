import styled from 'styled-components';

export const ForgotPasswordContainer = styled.div`
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;

  height: 100vh;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  .sign-in,
  .sign-up {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    & > span {
      color: ${({ theme }) => theme.colors.zinc[100]};
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.5rem;
    }

    & > a {
      color: ${({ theme }) => theme.colors.indigo[300]};
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.5rem;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const ForgotPasswordHeader = styled.header`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  & > img {
    width: 100%;
    max-width: 15rem;
  }

  & > h2 {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.75rem;
  }
`;
