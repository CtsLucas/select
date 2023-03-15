import { useCourse } from './useCourse';

import { Banner } from '../../components/Banner';
import { CourseStatistics } from './components/CourseStatistics';
import { Modules } from './components/Modules';
import { EmptyContent } from './components/EmptyContent';

import {
  CourseContainer,
  CourseContent,
  CourseDescription,
  CourseWrapper,
} from './styles';

export function Course() {
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
              <Modules modules={modules} />

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
