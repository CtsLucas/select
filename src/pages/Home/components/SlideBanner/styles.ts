import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SlideBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  width: 100%;
  max-width: 75rem;
  height: 20rem;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  padding-bottom: 3rem;

  position: relative;

  @media (min-width: 768px) {
    height: 30rem;
    padding-bottom: 0;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    height: 45rem;
  }
`;

export const SlideBannerHeader = styled.header`
  & > span {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25rem;

    @media (min-width: 768px) {
      font-size: 1.25rem;
      line-height: 1.5rem;
    }
  }
`;

export const SlideBannerContent = styled.div`
  margin-top: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & > h1 {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.75rem;

    @media (min-width: 768px) {
      font-size: 2rem;
      line-height: 2.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 3rem;
      line-height: 3.5rem;
    }

    @media (min-width: 1440px) {
      font-size: 4rem;
      line-height: 4.5rem;
    }
  }

  & > .details {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    & > span {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.125rem;

      @media (min-width: 768px) {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }
  }
`;

export const SlideBannerFooter = styled.footer`
  margin-top: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  & > svg {
    color: ${({ theme }) => theme.colors.zinc[100]};
  }

  & > a {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25rem;
    text-decoration: none;

    @media (min-width: 768px) {
      font-size: 1.25rem;
      line-height: 1.5rem;
    }
  }
`;

export const LinkButton = styled(Link)`
  background: ${({ theme }) => theme.colors.indigo[500]};
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  & > span {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-size: 1rem;
    font-weight: 700;
  }

  & > svg {
    color: ${({ theme }) => theme.colors.zinc[100]};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.indigo[900]};
  }
`;
