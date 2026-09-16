export type WorkoutData = {
  userId: string;
  title: string;
  workoutType: string;
  isDone: boolean;
  notes: string;
  duration: number;
  eventDate: string;
  doneDate?: string;
}

export type WorkoutApi = {
  id: number;
  title: string;
  notes: string;
  isDone: boolean;
  eventDate: string;
}
