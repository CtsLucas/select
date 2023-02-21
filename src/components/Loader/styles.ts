import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.background.indigo[20]};
  display: flex;
  justify-content: center;
  align-items: center;
  animation: all 0.3s;
`;
