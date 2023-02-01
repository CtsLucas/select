import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.indigo[900]};
  padding: 1.5rem 1.5rem 0.875rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.zinc[500]};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconAvatar = styled.div`
  background: ${({ theme }) => theme.colors.indigo[600]};
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.zinc[100]};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1rem;
  }
`;
