import styled from 'styled-components';

interface BannerProps {
  imageURL: string;
}

export const BannerWrapper = styled.div<BannerProps>`
  background-image: ${({ imageURL }) => `url(${imageURL})`};
  padding: 1.5rem;

  position: relative;
  --tw-bg-opacity: 1;
  background-color: rgba(4, 2, 32, var(--tw-bg-opacity));
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
`;

export const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(0deg, var(--tw-gradient-stops));
  --tw-gradient-from: #040220;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(4, 2, 32, 0));
  --tw-gradient-to: transparent;
`;
