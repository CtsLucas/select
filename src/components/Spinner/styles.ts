import styled, { keyframes } from 'styled-components';

const load = keyframes`
 0% { width: 40px }
  100% { width: 200px}`;

interface SpinnerProps {
  size?: number;
}

export const SpinnerContainer = styled.div<SpinnerProps>`
  width: 40px;
  ${({ size }) => (size && `height: ${size}px;`) || 'height: 16px;'}
  display: block;
  margin: 20px auto;
  position: relative;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.indigo[500]};
  background: currentColor;
  box-sizing: border-box;
  animation: ${load} 0.5s 0.3s linear infinite alternate;

  &:before,
  &:after {
    content: "";
    box-sizing: border-box;
    width: 40px;
    ${({ size }) => (size && `height: ${size}px;`) || 'height: 16px;'}
    border-radius: 4px;
    background: currentColor;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 45px;
    ${({ size }) => (size && `top: calc(${size}px + 4px);`) || 'top: 20x;'}
    animation: ${load} 0.5s 0.45s linear infinite alternate;
  }

  &:after {
    ${({ size }) => (size && `top: calc(-${size}px - 4px);`) || 'top: 20px;'}
    animation-delay: 0s;
  }
`;
