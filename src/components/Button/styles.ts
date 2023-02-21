import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.indigo[500]};
  padding: 1rem 1.25rem;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.zinc[100]};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;

  &:hover {
    background: ${({ theme }) => theme.colors.indigo[700]};
    border-color: ${({ theme }) => theme.colors.indigo[300]};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.indigo[900]};
    cursor: not-allowed;
  }
`;
