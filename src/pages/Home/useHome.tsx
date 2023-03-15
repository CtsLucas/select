import { useEffect, useState } from 'react';

import { useContent } from '../../contexts/ContentsContext';
import { getRandomItens } from '../../utils/getRandomItens';

import { SlideBannerType } from './components/SlideBanner';
import { SlideCourseType } from './components/SlideCourse';
import { SlideJourneyType } from './components/SlideJourney';

export function useHome() {
  const { contents, handleLoading } = useContent();

  const [banners, setBanners] = useState<SlideBannerType[]>([]);
  const [journeys, setJourneys] = useState<SlideJourneyType[]>([]);
  const [courses, setCourses] = useState<SlideCourseType[]>([]);

  useEffect(() => {
    handleLoading(true);

    const coursesIdSelected = [
      '3b5792a0-d9e4-487c-ba13-275026be5efa',
      '7cfc5e1c-49c4-4812-8c7a-6826141d3ee0',
      '17d05a10-8193-44db-b091-51ead3e6d3d5',
      '74924a45-f351-456c-8667-80cdfd29249d',
    ];

    const banners =
      contents.courses
        ?.filter((courses) => coursesIdSelected.includes(courses.id))
        .map((courses) => {
          return {
            instructor: courses.instructor,
            thumb: courses.medias.thumb,
            title: courses.title,
            id: courses.id,
            duration: courses.duration,
            coursesCount: courses.modules.length,
            level: courses.level,
          };
        }) || [];

    const journeys =
      contents.journeys?.map((journey) => {
        return {
          id: journey.pathID,
          title: journey.title,
          thumb: journey.medias.thumb,
          description: journey.description,
          countCourses: journey.countCourses,
          duration: journey.duration,
        };
      }) || [];

    const courses = contents.courses
      ? getRandomItens(
        contents.courses.filter(
          (course) => course.duration > 0 && course.medias.thumb
        ),
        20
      ).map((course) => {
        return {
          id: course.id,
          title: course.title,
          thumb: course.medias.thumb,
          instructor: course.instructor,
          duration: course.duration,
          level: course.level,
        };
      })
      : [];

    setJourneys(journeys);
    setBanners(banners);
    setCourses(courses);

    handleLoading(false);
  }, [contents]);

  return { banners, journeys, courses };
}
