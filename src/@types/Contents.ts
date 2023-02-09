export interface Journey {
  coursesID: string[];
  description: string;
  group: string;
  medias: Medias;
  pathID: string;
  slug: string;
  title: string;
  duration?: number;
  countCourses?: number;
}

export interface Course {
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

export interface Lesson {
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
