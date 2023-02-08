import styled from 'styled-components';

export const CoursesContainer = styled.div`
  background: ${({ theme }) => theme.colors.indigo[900]};
  width: 100%;
  height: 18.125rem;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  & > img {
    width: 100%;
    min-height: 8rem;
  }

  .info {
    width: 100%;
    height: 100%;
    padding: 1rem 0.75rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > strong {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.25rem;
    }

    & > span {
      color: ${({ theme }) => theme.colors.zinc[400]};
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1rem;
    }

    .details {
      display: flex;
      justify-content: space-between;

      & > span {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
      }
    }
  }
`;
