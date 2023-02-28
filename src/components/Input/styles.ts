import styled from 'styled-components';

interface InputTextProps {
  isError: boolean;
}

export const InputTextContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.25rem;
`;

export const InputTextContent = styled.div<InputTextProps>`
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
    border: ${({ theme, isError }) =>
    isError
      ? `2px solid ${theme.colors.danger[500]}`
      : '2px solid transparent'};

    font-size: 1rem;
    color: ${({ theme }) => theme.colors.zinc[100]};

    &:hover {
      background: ${({ theme }) => theme.colors.zinc[700]};
      border-color: ${({ theme, isError }) =>
    !isError && theme.colors.indigo[300]};
    }

    &:focus {
      box-shadow: 0 0 0 2px
        ${({ theme, isError }) =>
    (isError && theme.colors.danger[700]) || theme.colors.indigo[500]};
    }

    &:-webkit-autofill {
      box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.zinc[800]} inset;
      -webkit-text-fill-color: ${({ theme }) =>
    theme.colors.zinc[300]}!important;
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

export const InputError = styled.span`
  color: ${({ theme }) => theme.colors.danger[500]};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
`;
