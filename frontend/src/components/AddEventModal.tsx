import { useState, type FormEvent } from "react";

import close from "../assets/close.svg";

import { createWorkoutEvent } from "../api/calendar";

import { monthNamesGenitive } from "../hooks/useCalendar";
import useAuth from "../hooks/useAuth";

import type { WorkoutData } from "../types/workout";
import type { AddEventModalProps } from "../types/ui";

import type { CalendarEventType } from "../types/calendar";

const buttonFormat =
  "flex w-full cursor-pointer items-center justify-center rounded-xl px-4 py-3";

function AddEventModal({
  day,
  month,
  year,
  onClose,
  onAddEvent,
}: AddEventModalProps) {
  const { user } = useAuth();

  const [eventType, setEventType] = useState<
    "workout" | "diet" | "note"
  >("workout");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const eventDate =
    `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newEvent: CalendarEventType = {
      id: crypto.randomUUID(),
      type: eventType,
      title,
      content,
      day,
      month,
      year,
      isDone: false,
    };

    if (eventType === "workout") {
      if (!user?.id) {
        console.error(
          "Brak użytkownika - workout nie został zapisany w API.",
        );
      } else {
        const workoutData: WorkoutData = {
          userId: String(user.id),
          title,
          workoutType: eventType,
          isDone: false,
          notes: content,
          duration: 0,
          eventDate,
        };

        void createWorkoutEvent(workoutData).catch((error) => {
          console.error(
            "Nie udało się zapisać workoutu:",
            error,
          );
        });
      }
    }

    // Każdy typ eventu trafia do kalendarza.
    onAddEvent(newEvent);

    onClose();
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
      >
        <div className="mb-3 flex justify-between">
          <span>
            Utwórz nowe zdarzenie dla dnia {day}{" "}
            {monthNamesGenitive[month].toLowerCase()} {year}
          </span>

          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-sm hover:bg-zinc-200"
            aria-label="Zamknij"
          >
            <img
              src={close}
              alt=""
              className="flex items-center justify-center"
            />
          </button>
        </div>

        <form
          className="mb-4 flex w-full flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div className="mt-4 flex w-full items-center justify-between gap-4">
            <label
              className={`${buttonFormat} border border-sky-400 bg-sky-300 text-sky-700 hover:border-sky-500 hover:bg-sky-400`}
            >
              <input
                type="radio"
                name="eventType"
                value="workout"
                checked={eventType === "workout"}
                onChange={() => setEventType("workout")}
                className="appearance-none"
              />

              Trening
            </label>

            <label
              className={`${buttonFormat} border border-emerald-300 bg-emerald-200 text-emerald-700 hover:border-emerald-400 hover:bg-emerald-300`}
            >
              <input
                type="radio"
                name="eventType"
                value="diet"
                checked={eventType === "diet"}
                onChange={() => setEventType("diet")}
                className="appearance-none"
              />

              Dieta
            </label>

            <label
              className={`${buttonFormat} border border-violet-300 bg-violet-200 text-violet-700 hover:border-violet-400 hover:bg-violet-300`}
            >
              <input
                type="radio"
                name="eventType"
                value="note"
                checked={eventType === "note"}
                onChange={() => setEventType("note")}
                className="appearance-none"
              />

              Notatka
            </label>
          </div>

          <input
            className="rounded-sm border border-indigo-200 p-2 focus:border-indigo-500 focus:outline-none"
            type="text"
            placeholder="Tytuł zdarzenia"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="h-50 rounded-sm border border-indigo-200 p-2 focus:border-indigo-500 focus:outline-none"
            placeholder="Treść / notatka"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button
            className="cursor-pointer rounded-xl bg-gradient-to-r from-lime-200 via-sky-100 to-indigo-200 py-1 font-bold opacity-50 transition hover:text-sky-700 hover:opacity-100"
            type="submit"
          >
            ZATWIERDŹ
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEventModal;
