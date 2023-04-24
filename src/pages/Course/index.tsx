import { Banner, Spinner } from '@components';
import {
  CourseModules,
  CourseStatistics,
  CourseTags,
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
  const { course, modules, loading } = useCourse();

  const modulesIsEmpty = modules.length === 0;
  const tagsIsEmpty = course?.tags && course?.tags.length === 0;

  return (
    <CourseContainer>
      <Banner
        backgroundImage={course?.medias.thumb ? course?.medias.thumb : ''}
        title={course?.title}
        description={course?.description}
      />

      {loading ? (
        <Spinner />
      ) : (
        <CourseContent>
          <CourseStatistics course={course} />

          <CourseWrapper>
            {!modulesIsEmpty ? (
              <>
                <CourseModules modules={modules} />

                <CourseDescription>
                  {!tagsIsEmpty && (
                    <div className="course-description__content">
                      <strong>Tags</strong>
                      <CourseTags tags={course?.tags} />
                    </div>
                  )}
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
      )}
    </CourseContainer>
  );
}
