import styled from 'styled-components';

export const InputTextContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.75rem;

  position: relative;

  & > label {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  & > input {
    width: 100%;
    height: 3.5rem;
    padding: 0 1rem 0 3.25rem;

    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.zinc[800]};
    border: 1px solid transparent;

    font-size: 1rem;
    color: ${({ theme }) => theme.colors.zinc[100]};

    &:hover {
      background: ${({ theme }) => theme.colors.zinc[700]};
      border: 1px solid ${({ theme }) => theme.colors.indigo[300]};
    }
  }

  & > svg {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-size: 24px;

    position: absolute;
    left: 16px;
    top: 75%;
    transform: translateY(-75%);
  }
`;
