import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.background.indigo[20]};
  padding: 1rem 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 90rem;

  & > span {
    display: block;

    border-top: 1px solid ${({ theme }) => theme.colors.zinc[100]};
    padding: 0.75rem 0;
    font-size: 0.75rem;
    font-weight: 500;
  }
`;
