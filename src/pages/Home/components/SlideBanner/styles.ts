import styled from 'styled-components';

interface SlideBannerProps {
  imageURL: string;
}

export const SlideBannerContainer = styled.div<SlideBannerProps>`
  background-image: url(${({ imageURL }) => imageURL});

  display: block;
  width: 100%;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  height: 15rem;

  position: relative;
`;

export const SlideBanerMask = styled.div`
  background: ${({ theme }) => theme.colors.background.opacity[50]};
  max-width: 50%;
  height: 100%;
  padding: 0.75rem 1.5rem;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const SlideBannerHeader = styled.header`
  & > span {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25rem;
  }
`;

export const SlideBannerContent = styled.div`
  & > h1 {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.75rem;
  }
`;

export const SlideBannerFooter = styled.footer`
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
  }
`;
