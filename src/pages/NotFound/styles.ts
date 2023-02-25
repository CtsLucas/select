import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & > img {
    width: 100%;
    max-width: 1000px;
  }

  & > h1 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.indigo[200]};
    text-align: center;
  }

  & > a {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.125rem;
    color: ${({ theme }) => theme.colors.indigo[500]};
    text-decoration: none;
    vertical-align: middle;

    border: 1px solid ${({ theme }) => theme.colors.indigo[500]};
    border-radius: 0.875rem;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    &:hover {
      color: ${({ theme }) => theme.colors.indigo[200]};
      border-color: ${({ theme }) => theme.colors.indigo[200]};
    }
  }
`;
