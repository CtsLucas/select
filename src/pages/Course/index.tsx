import { Banner } from '@components';
import {
  CourseModules,
  CourseStatistics,
  EmptyContent,
} from '@pages/Course/components/';

import { useCourse } from './useCourse';

import {
  CourseContainer,
  CourseContent,
  CourseDescription,
  CourseWrapper,
} from './styles';

export default function Course() {
  const { course, modules } = useCourse();

  return (
    <CourseContainer>
      <Banner
        backgroundImage={course?.medias.thumb ? course?.medias.thumb : ''}
        title={course?.title}
        description={course?.description}
      />

      <CourseContent>
        <CourseStatistics course={course} />

        <CourseWrapper>
          {modules.length > 0 ? (
            <>
              <CourseModules modules={modules} />

              <CourseDescription>
                <div className="course-description__content">
                  <strong>Sobre o curso</strong>
                  <p>{course?.description}</p>
                </div>

                <div className="course-description__content">
                  <strong>Autor</strong>
                  <p>{course?.instructor}</p>
                </div>
              </CourseDescription>
            </>
          ) : (
            <EmptyContent />
          )}
        </CourseWrapper>
      </CourseContent>
    </CourseContainer>
  );
}
