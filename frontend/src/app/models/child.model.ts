export interface Child {
  id: number;
  name: string;
  age: number;
  avatar?: string;
  allowStudy: boolean;
  allowFun: boolean;
  studyTimeToday: string;
  funTimeToday: string;
}

export interface ChildProfile {
  id: number;
  name: string;
  avatar: string;
}
