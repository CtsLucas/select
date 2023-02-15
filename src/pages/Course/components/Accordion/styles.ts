import styled from 'styled-components';

import * as Accordion from '@radix-ui/react-accordion';

export const AccordionRoot = styled(Accordion.Root)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AccordionItem = styled(Accordion.Item)``;

export const AccordionHeader = styled(Accordion.Header)``;

export const AccordionTrigger = styled(Accordion.Trigger)`
  background: ${({ theme }) => theme.colors.indigo[900]};
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > svg {
    color: ${({ theme }) => theme.colors.zinc[100]};
    transition: transform 300ms;
  }

  & > .informations {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > strong {
      color: ${({ theme }) => theme.colors.zinc[100]};
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.25rem;
    }

    & > span {
      color: ${({ theme }) => theme.colors.zinc[100]};
      font-weight: 500;
      font-size: 1rem;
      line-height: 1rem;
    }
  }

  &:focus {
    box-shadow: none;
  }

  &[data-state="open"] > svg {
    transform: rotate(180deg);
  }
`;

export const AccordionContent = styled(Accordion.Content)`
  background: ${({ theme }) => theme.colors.indigo[900]};
  width: 100%;
  padding: 1rem 2rem;
  border-radius: 8px;
  margin-top: -10px;
`;

export const Lesson = styled.div`
  padding-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
