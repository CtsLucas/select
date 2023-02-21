import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.background.indigo[20]};
  padding: 1.5rem 1.5rem 0.875rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.zinc[500]};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 90rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    &:focus {
      box-shadow: none;
    }
  }
`;
