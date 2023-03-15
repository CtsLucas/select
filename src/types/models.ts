export interface JourneyType {
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
  level: 'beginner' | 'intermediate' | 'advanced';
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

export interface ModuleType {
  duration: number;
  lessons: LessonType[];
  title: string;
}

export interface SlideBannerType {
  instructor: string;
  id: string;
  thumb: string;
  title: string;
  duration: number;
  coursesCount: number;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface SlideCourseType {
  id: string;
  thumb: string;
  title: string;
  instructor: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
}

export interface SlideJourneyType {
  id: string;
  thumb: string;
  title: string;
  description: string;
  countCourses?: number;
  duration?: number;
}
