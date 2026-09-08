import { useState, type FormEvent } from "react";
import type { EditEventModalProps } from "../types/ui";
import { monthNamesGenitive } from "../hooks/useCalendar";
import close from "../assets/close.svg";

function EditEventModal({
  event,
  onClose,
  onUpdateEvent,
}: EditEventModalProps) {
  const [eventType, setEventType] = useState<
    "workout" | "diet" | "note"
  >(event.type);

  const [title, setTitle] = useState(event.title);
  const [content, setContent] = useState(event.content);

  const buttonFormat =
    "flex w-full cursor-pointer items-center justify-center rounded-xl px-4 py-3 transition";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const updatedEvent = {
      ...event,
      type: eventType,
      title,
      content,
    };

    onUpdateEvent(updatedEvent);
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
            Edytuj zdarzenie dla dnia {event.day}{" "}
            {monthNamesGenitive[event.month].toLowerCase()}{" "}
            {event.year}
          </span>

          <img
            src={close}
            alt="Zamknij"
            onClick={onClose}
            className="cursor-pointer items-center justify-center rounded-sm hover:bg-zinc-200"
          />
        </div>

        <form
          className="mb-4 flex w-full flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div className="mt-4 flex w-full items-center justify-between gap-4">
            <label
              className={`${buttonFormat} ${
                eventType === "workout"
                  ? "border border-sky-500 bg-sky-400 font-bold text-sky-700"
                  : "border border-sky-400 bg-sky-200 text-sky-700 hover:border-sky-500 hover:bg-sky-300"
              }`}
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
              className={`${buttonFormat} ${
                eventType === "diet"
                  ? "border border-emerald-400 bg-emerald-300 font-bold text-emerald-700"
                  : "border border-emerald-300 bg-emerald-100 text-emerald-700 hover:border-emerald-400 hover:bg-emerald-200"
              }`}
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
              className={`${buttonFormat} ${
                eventType === "note"
                  ? "border border-violet-400 bg-violet-300 font-bold text-violet-700"
                  : "border border-violet-300 bg-violet-100 text-violet-700 hover:border-violet-400 hover:bg-violet-200"
              }`}
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
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Tytuł zdarzenia"
            className="rounded border border-indigo-200 p-2 outline-none focus:border-indigo-400"
          />

          <textarea
            value={content}
                       onChange={(e) => setContent(e.target.value)}
            placeholder="Treść / notatka"
            className="min-h-48 resize-y rounded border border-indigo-200 p-2 outline-none focus:border-indigo-400"
          />

          <button
            className="cursor-pointer rounded-xl bg-gradient-to-r from-red-200 via-sky-100 to-violet-200 py-1 opacity-50 transition hover:opacity-100 hover:text-sky-700"
            type="submit"
          >
            <span className="font-bold">ZAPISZ ZMIANY</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditEventModal;