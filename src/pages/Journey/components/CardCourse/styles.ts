import styled from 'styled-components';

export const CardCourseContainer = styled.div`
  background: ${({ theme }) => theme.colors.indigo[900]};
  border-radius: 8px;

  & > img {
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .content {
    padding: 1rem 2rem;

    display: flex;
    flex-direction: column;

    & > strong {
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

    .details {
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
    }

    & > button {
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
    }
  }
`;
