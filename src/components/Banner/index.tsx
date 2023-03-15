import { ReactNode } from 'react';

import {
  BannerContent,
  BannerDescription,
  BannerOverlay,
  BannerTitle,
  BannerWrapper,
} from './styles';

interface BannerProps {
  backgroundImage: string;
  children?: ReactNode;
  title?: string;
  description?: string;
}

export default function Banner({
  backgroundImage,
  children,
  title,
  description,
}: BannerProps) {
  return (
    <BannerWrapper imageURL={backgroundImage}>
      <BannerOverlay />
      {children ? (
        children
      ) : (
        <BannerContent>
          <BannerTitle>{title}</BannerTitle>
          <BannerDescription>{description}</BannerDescription>
        </BannerContent>
      )}
    </BannerWrapper>
  );
}
