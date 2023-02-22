import styled from 'styled-components';

export const CardCourseContainer = styled.div`
  background: ${({ theme }) => theme.colors.indigo[900]};
  border-radius: 8px;
  width: 100%;
  max-width: 36rem;

  position: relative;

  @media screen and (min-width: 768px) {
    display: flex;
    max-width: 90rem;
  }
`;

interface CardCourseImageProps {
  imageURL: string;
}

export const CardCourseImage = styled.div<CardCourseImageProps>`
  background-image: ${({ imageURL }) =>
    imageURL ? `url(${imageURL})` : 'url(/assets/images/thumb_default.jpeg)'};
  height: 9.25rem;

  display: block;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;

  @media screen and (min-width: 500px) {
    height: 12.5rem;
  }

  @media screen and (min-width: 600px) {
    height: 15.75rem;
  }

  @media screen and (min-width: 768px) {
    height: 24rem;
    flex: 2;

    border-radius: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

export const CardCourseContent = styled.div`
  padding: 2rem 1rem;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  & > h2 {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.5rem;
  }

  & > span {
    color: ${({ theme }) => theme.colors.zinc[300]};
    font-size: 1rem;
    font-weight: 500;
    line-height: 1rem;
  }

  & > p {
    color: ${({ theme }) => theme.colors.zinc[100]};
    font-weight: 500;
    font-size: 1rem;
    line-height: 1rem;

    margin-top: 0.75rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 4;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;

export const CardCourseFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;

  margin-top: 0.75rem;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
  }
`;

export const CardButton = styled.button`
  background: ${({ theme }) => theme.colors.indigo[600]};
  margin-top: 1.5rem;
  padding: 1rem 0;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.zinc[100]};
  font-size: 1rem;
  font-weight: 700;
`;
