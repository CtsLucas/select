export interface JourneyType {
  coursesID: string[];
  description: string;
  group: string;
  medias: Medias;
  pathID: string;
  slug: string;
  title: JourneysTitle;
  duration?: number;
  countCourses?: number;
}

export interface CourseType {
  courseCategory: string;
  courseCreatedAt: Date;
  courseGroup: string;
  courseSlug: string;
  courseUpdatedAt: Date;
  description: string;
  duration: number;
  extras: object[];
  id: string;
  instructor: string;
  level: string;
  medias: Medias;
  modules: Module[];
  status: string;
  tags: string[];
  title: string;
}

export interface LessonType {
  description: string;
  duration: number;
  extras?: object;
  id: string;
  status: string;
  title: string;
}

export interface Module {
  description: string;
  lessonsID: string[];
  order: LessonID[];
  title: string;
}

export interface Medias {
  banner?: string;
  poster?: string;
  thumb: string;
}

export interface Date {
  $date: string;
}

export interface LessonID {
  lessonID: string;
}

export enum JourneysTitle {
  BackEnd = 'Desenvolvimento Back End',
  FrontEnd = 'Desenvolvimento Front End',
  DigitalSkills = 'Habilidades Digitais',
  Data = 'Dados',
}
