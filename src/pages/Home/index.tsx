import { useContext, useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import { Carousell } from '../../components/Carousell';
import { Footer } from '../../components/Footer';
import { BannerType } from '../../components/Banner';
import { JourneyType } from '../../components/Journey';
import { CourseType } from '../../components/Course';

import { ContentsContext } from '../../contexts/ContentsContext';
import { HomeContainer } from './styles';
import { getRandomItens } from '../../utils/getRandomItens';

export function Home() {
  const { contents } = useContext(ContentsContext);
  const [banners, setBanners] = useState<BannerType[]>([]);
  const [journeys, setJourneys] = useState<JourneyType[]>([]);
  const [courses, setCourses] = useState<CourseType[]>([]);

  useEffect(() => {
    const coursesIdSelected = [
      '3b5792a0-d9e4-487c-ba13-275026be5efa',
      '2ba9f95a-e17a-4ede-b754-0f73d36c3b42',
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
          };
        }) || [];

    const journeys =
      contents.journeys?.map((journey) => {
        return {
          id: journey.pathID,
          title: journey.title,
          thumb: journey.medias.thumb,
          description: journey.description,
        };
      }) || [];

    const courses = contents.courses
      ? getRandomItens(
        contents.courses.filter((course) => course.duration > 0),
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
  }, [contents]);

  return (
    <HomeContainer>
      <Carousell slides={banners} variant="banner" />
      <Carousell
        slides={journeys}
        variant="journey"
        title="Jornadas a serem trilhadas"
      />
      <Carousell slides={courses} variant="course" title="Cursos disponíveis" />
    </HomeContainer>
  );
}
