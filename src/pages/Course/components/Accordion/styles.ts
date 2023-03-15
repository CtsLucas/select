import styled from 'styled-components';

import * as Accordion from '@radix-ui/react-accordion';

export const AccordionRoot = styled(Accordion.Root)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AccordionHeader = styled(Accordion.Header)``;

export const AccordionTrigger = styled(Accordion.Trigger)`
  background: ${({ theme }) => theme.colors.indigo[900]};
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  & > svg {
    color: ${({ theme }) => theme.colors.zinc[100]};
    transition: transform 300ms;
  }

  & > strong {
    display: block;
    width: 100%;
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: start;

    @media (min-width: 768px) {
      font-size: 1rem;
      line-height: 1.25rem;
    }
  }

  & > span {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1rem;
    white-space: nowrap;

    @media (min-width: 768px) {
      font-size: 1rem;
      line-height: 1.25rem;
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
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  margin-top: -10px;
`;

export const AccordionItem = styled(Accordion.Item)`
  &:hover ${AccordionTrigger}, &:hover ${AccordionContent} {
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.colors.indigo[700]};
  }
`;

export const Lesson = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  &:not(:last-child) {
    margin-bottom: 0.5rem;

    @media (min-width: 768px) {
      margin-bottom: 1rem;
    }
  }

  & > svg {
    color: ${({ theme }) => theme.colors.zinc[100]};
  }

  & > strong {
    display: block;
    width: 100%;
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: start;
  }

  & > span {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1rem;
  }
`;
