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

  background: ${({ theme }) => theme.colors.indigo[900]};
  padding: 0.5rem 0.5rem;

  &[data-side="top"] {
    animation: ${slideDownAndFade} 400ms;
  }

  &[data-side="bottom"] {
    animation: ${slideUpAndFade} 400ms;
  }
`;

export const DropdownMenuItem = styled(DropdownMenu.Item)`
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;

  color: ${({ theme }) => theme.colors.zinc[300]};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;

  &:first-child {
    color: ${({ theme }) => theme.colors.zinc[200]};
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
  }

  &:hover:not(:first-child) {
    background: ${({ theme }) => theme.colors.indigo[500]};
    color: ${({ theme }) => theme.colors.zinc[100]};

    cursor: pointer;
  }

  &:focus {
    box-shadow: none;
  }
`;

export const DropdownMenuSeparator = styled(DropdownMenu.Separator)`
  height: 1px;
  background: ${({ theme }) => theme.colors.indigo[500]};
  margin: 0.5rem 0;
`;

export const IconAvatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.zinc[100]};
  border: 2px solid ${({ theme }) => theme.colors.indigo[500]};
  transition: all 0.2s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.indigo[500]};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5rem;

  cursor: pointer;

  &:hover,
  &[aria-expanded="true"] {
    background: ${({ theme }) => theme.colors.indigo[500]};
    color: ${({ theme }) => theme.colors.zinc[100]};
    border-color: ${({ theme }) => theme.colors.zinc[100]};
  }
`;
