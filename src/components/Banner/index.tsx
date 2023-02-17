import { ReactNode } from 'react';

import { BannerOverlay, BannerWrapper } from './styles';

interface BannerProps {
  backgroundImage: string;
  children: ReactNode;
}

export function Banner({ backgroundImage, children }: BannerProps) {
  return (
    <BannerWrapper imageURL={backgroundImage}>
      <BannerOverlay />
      {children}
    </BannerWrapper>
  );
}
