import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.indigo[900]};
  padding: 1rem 1.25rem;

  & > div {
    border-top: 1px solid ${({ theme }) => theme.colors.zinc[100]};
    padding: 0.75rem 0;

    & > span {
      font-size: 0.75rem;
      font-weight: 500;
    }
  }
`;
