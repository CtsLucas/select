import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { JourneysTitle } from '../../../../@types/Contents';

interface SlideJourneyProps {
  journeyTitle: JourneysTitle ;
}

const slideJourneyBackground = {
  'Desenvolvimento Back End': css`
    background: ${({ theme }) => theme.colors.background.journeys.backEnd};
  `,
  'Desenvolvimento Front End': css`
    background: ${({ theme }) => theme.colors.background.journeys.frontEnd};
  `,
  'Habilidades Digitais': css`
    background: ${({ theme }) =>
    theme.colors.background.journeys.digitalSkills};
  `,
  Dados: css`
    background: ${({ theme }) => theme.colors.background.journeys.data};
  `,
} as const;

export const SlideJourneyContainer = styled(Link)<SlideJourneyProps>`
  background: ${({ theme }) => theme.colors.indigo[900]};
  width: 100%;
  height: 20.25rem;
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.2s ease-in-out;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  text-decoration: none;

  &:focus {
    box-shadow: none;
  }

  &:hover {
    transform: translateY(-0.25rem);
    ${({ journeyTitle, theme }) =>
    slideJourneyBackground[journeyTitle] || theme.colors.indigo[500]}
  }
`;

export const SlideJourneyHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > img {
    width: 5rem;
  }

  & > strong {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.5rem;
  }
`;

export const SlideJourneyContent = styled.div`
  & > p {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1rem;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 3;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export const SlideJourneyFooter = styled.footer`
  display: flex;
  gap: 1rem;

  & > span {
    color: ${({ theme }) => theme.colors.zinc[100]};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25rem;
  }
`;
