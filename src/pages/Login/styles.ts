import styled from 'styled-components';

export const LoginContainer = styled.div`
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
`;

export const LoginHeader = styled.header`
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

  & > h1 {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.5rem;
  }
`;

export const LoginForm = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  & > .forgot-password {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;

    & > a {
      color: ${({ theme }) => theme.colors.zinc[100]};
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.25rem;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  & > .sign-up {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    & > span {
      color: ${({ theme }) => theme.colors.zinc[100]};
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.25rem;
    }

    & > a {
      color: ${({ theme }) => theme.colors.indigo[300]};
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.5rem;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
