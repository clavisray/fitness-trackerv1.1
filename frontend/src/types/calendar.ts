export type CalendarEventType = {
    id: string;
    title: string;
    type: "workout" | "diet" | "note";
    day: number;
    month: number;
    year: number;
    content: string;
    isDone: boolean;
}
