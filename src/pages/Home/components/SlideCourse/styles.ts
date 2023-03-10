import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SlideCourseContainer = styled(Link)`
  background: ${({ theme }) => theme.colors.indigo[900]};
  width: 100%;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  display: flex;
  flex-direction: column;
  text-decoration: none;

  &:hover {
    transform: translateY(-0.25rem);
    background: ${({ theme }) => theme.colors.indigo[600]};
  }

  &:focus {
    box-shadow: none;
  }
`;

interface SlideIconProps {
  imageURL: string;
}

export const SlideIcon = styled.div<SlideIconProps>`
  background-image: ${({ imageURL }) =>
    imageURL ? `url(${imageURL})` : 'url(/assets/images/thumb_default.jpeg)'};
  height: 9.25rem;
  display: block;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
`;

export const SlideCourseWrapper = styled.div`
  width: 100%;
  min-height: 9.25rem;
  padding: 1rem 0.75rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SlideCourseHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > strong {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.25rem;
    text-decoration: none;
  }

  & > span {
    color: ${({ theme }) => theme.colors.zinc[400]};
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1rem;
    text-decoration: none;

    @media (min-width: 768px) {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`;

export const SlideCourseFooter = styled.footer`
  display: flex;
  justify-content: space-between;

  & > span {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
  }
`;
