import styled from 'styled-components';

export const BannerContainer = styled.div`
  position: relative;

  & > img {
    display: block;
    width: 100%;
    max-height: 45rem;
    object-fit: cover;
  }
`;

export const MaskBanner = styled.div`
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

  .author {
    & > span {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.25rem;
    }
  }

  .title {
    & > h1 {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.75rem;
    }
  }

  .details {
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
  }
`;
