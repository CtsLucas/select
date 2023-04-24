import styled from 'styled-components';

interface BannerProps {
  imageURL: string;
}

export const BannerWrapper = styled.div<BannerProps>`
  background-image: ${({ imageURL }) =>
    imageURL ? `url(${imageURL})` : 'url(/assets/images/thumb_default.jpeg)'};
  padding: 1.5rem;

  position: relative;
  --tw-bg-opacity: 1;
  background-color: rgba(4, 2, 32, var(--tw-bg-opacity));
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(0deg, var(--tw-gradient-stops));
  --tw-gradient-from: ${({ theme }) => theme.colors.zinc[900]};
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(4, 2, 32, 0));
  --tw-gradient-to: transparent;
`;
export const BannerContent = styled.div`
  width: 100%;
  max-width: 75rem;
  height: 20rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  position: relative;
  z-index: 10;
  margin: 0 auto;

  @media (min-width: 768px) {
    height: 30rem;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    height: 45rem;
  }
`;

export const BannerTitle = styled.h1`
  color: ${({ theme }) => theme.colors.zinc[100]};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
    line-height: 3.5rem;
  }
`;

export const BannerDescription = styled.p`
  margin-top: 1.25rem;
  max-width: 52rem;

  color: ${({ theme }) => theme.colors.zinc[100]};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 7;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
  }
`;
