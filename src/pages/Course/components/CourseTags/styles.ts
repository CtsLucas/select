import styled from 'styled-components';

export const CourseTagsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  & > span {
    background: ${({ theme }) => theme.colors.indigo[500]};
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;

    color: ${({ theme }) => theme.colors.zinc[100]};
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.125rem;
    text-transform: lowercase;

    &::first-letter {
      text-transform: uppercase;
    }
  }
`;
