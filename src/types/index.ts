export interface Lesson {
  id: string;
  title: string;
  videoUrl: string;
  duration?: string;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  lessons: Lesson[];
}

export interface User {
  name: string;
  email: string;
  phone: string;
  profileImage?: string;
}
