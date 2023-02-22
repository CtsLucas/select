import styled, { keyframes } from 'styled-components';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const slideDownAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(2px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const DropdownMenuRoot = styled(DropdownMenu.Root)``;

export const DropdownMenuTrigger = styled(DropdownMenu.Trigger)``;

export const DropdownMenuPortal = styled(DropdownMenu.Portal)``;

export const DropdownMenuContent = styled(DropdownMenu.Content)`
  min-width: 10rem;
  border-radius: 6px;
  margin-top: 5px;

  &[data-side="top"] {
    animation: ${slideDownAndFade} 400ms;
  }

  &[data-side="bottom"] {
    animation: ${slideUpAndFade} 400ms;
  }
`;

export const DropdownMenuItem = styled(DropdownMenu.Item)`
  background: ${({ theme }) => theme.colors.indigo[900]};
  padding: 0.5rem 1rem;
  border-radius: 6px;

  color: ${({ theme }) => theme.colors.zinc[300]};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;

  &:hover {
    background: ${({ theme }) => theme.colors.indigo[500]};
    color: ${({ theme }) => theme.colors.zinc[100]};
  }
`;

export const IconAvatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.zinc[100]};
  border: 2px solid ${({ theme }) => theme.colors.indigo[500]};

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.indigo[500]};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5rem;

  cursor: pointer;
`;
