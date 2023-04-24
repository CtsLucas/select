import { CourseTagsContainer } from './styles';

interface CourseTagsProps {
  tags: string[] | undefined;
}

export default function CourseTags({ tags }: CourseTagsProps) {
  return (
    <CourseTagsContainer>
      {tags?.map((tag, index) => (
        <span key={tag + index}>{tag}</span>
      ))}
    </CourseTagsContainer>
  );
}
