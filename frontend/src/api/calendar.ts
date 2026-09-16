import type { CalendarEventType } from "../types/calendar";
import type { WorkoutApi, WorkoutData } from "../types/workout";
import { apiFetch, apiPost } from "./client";

function workoutToCalendarEvent(
  workout: WorkoutApi,
): CalendarEventType {
  const [year, month, day] = workout.eventDate
    .split("-")
    .map(Number);

  return {
    id: String(workout.id),
    title: workout.title,
    content: workout.notes,
    isDone: workout.isDone,
    type: "workout",
    day,
    month: month - 1,
    year,
  };
}

export async function getWorkoutEvents(): Promise<CalendarEventType[]> {
  const workouts = await apiFetch<WorkoutApi[]>("/workout");

  return workouts.map(workoutToCalendarEvent);
}

export async function createWorkoutEvent(
  workoutData: WorkoutData,
): Promise<CalendarEventType> {
  const workout = await apiPost<WorkoutApi, WorkoutData>(
    "/workout",
    workoutData,
  )

  return workoutToCalendarEvent(workout);
}
