import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SlideJourneyContainer = styled(Link)`
  background: ${({ theme }) => theme.colors.indigo[900]};
  width: 100%;
  height: 20.25rem;
  border-radius: 8px;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  text-decoration: none;

  &:focus{
    box-shadow: none;
  }

  .swiper-slide {
    width: 70%;
  }

  .header {
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
  }

  .content {
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
  }

  .footer {
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
  }
`;
