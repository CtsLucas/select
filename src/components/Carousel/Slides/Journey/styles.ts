import styled from 'styled-components';

export const JourneyContainer = styled.div`
  background: ${({ theme }) => theme.colors.indigo[900]};
  min-width: 21.25rem;
  height: 21.25rem;
  border-radius: 8px;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  .header {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > img {
      width: 5rem;
    }

    & > strong {
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.5rem;
    }
  }

  .content {
    & > p {
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
