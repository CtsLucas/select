import styled, { keyframes } from 'styled-components';

const load = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
}`;

export interface SpinnerProps {
  size?: number;
}

export const SpinnerContainer = styled.div<SpinnerProps>`
  background: ${({ theme }) => theme.colors.indigo[500]};
  -webkit-animation: ${load} 1s infinite ease-in-out;
  animation: ${load} 1s infinite ease-in-out;
  width: 1em;
  height: 4em;

  color: ${({ theme }) => theme.colors.indigo[500]};
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: ${({ size }) => `${size}px`};
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0) rotate(90deg);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;

  &:before,
  &:after {
    background: ${({ theme }) => theme.colors.indigo[500]};
    -webkit-animation: ${load} 1s infinite ease-in-out;
    animation: ${load} 1s infinite ease-in-out;
    width: 1em;
    height: 4em;

    position: absolute;
    top: 0;
    content: "";
  }

  &:before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  &:after {
    left: 1.5em;
  }
`;
