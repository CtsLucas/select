import styled from 'styled-components';

interface SeparatorProps {
  size?: number;
  orientation?: 'vertical' | 'horizontal';
}

const Separator = styled.div<SeparatorProps>`
  border: 1px solid white;
  height: ${({ size }) => (size ? `${size}px` : '32px')};
  transform: ${({ orientation }) =>
    orientation === 'vertical' ? 'rotate(90deg)' : 'rotate(0deg)'};
`;

export default Separator;
