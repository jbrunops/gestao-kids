export interface Activity {
  id: number;
  name: string;
  type: 'study' | 'fun';
  duration: string;
  startTime: string;
  endTime: string;
  childId: number;
  date: string;
}

export interface ActivityType {
  id: string;
  name: string;
  icon: string;
  duration: string;
}

export interface ActivityHistory {
  activities: Activity[];
  totalStudyTime: string;
  totalFunTime: string;
  totalTime: string;
  dailyChange: string;
}
