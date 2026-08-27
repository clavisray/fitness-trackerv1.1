import type { CalendarEventProps } from "../types/ui";

const baseClasses = "rounded-xl px-2 py-1 text-xs flex justify-center items-center cursor-pointer transition"

const typeClasses = {
    workout: "bg-sky-300 border border-sky-400 text-sky-700 hover:bg-sky-400 hover:border-sky-500",
    diet: "bg-emerald-200 border border-emerald-300 text-emerald-700 hover:bg-emerald-300 hover:border-emerald-400",
    note: "bg-violet-200 border border-violet-300 text-violet-700 hover:bg-violet-300 hover:border-violet-400",
};

function CalendarEvent({ event, viewMode, onClick, }: CalendarEventProps) {

    const doneClasses = event.isDone
    ? "opacity-50 line-through"
    : "opacity-100";
    if (viewMode === "month") {
       return (
            <button 
            onClick={(e) => {
                e.stopPropagation
                onClick?.();
            }}
            className={`${baseClasses} ${typeClasses[event.type]} ${doneClasses}
            `}
            >
                {event.type}: {event.title}
            </button>

        ) 
    }

    if (viewMode === "week")
    return (
        <button className='flex bg-indigo-300 text-white justify-center items-center cursor-pointer hover:bg-indigo-500 transition '>
            <h3>{event.title}</h3>
            <h3>{event.title}</h3>
            <h3>{event.title}</h3>
        </button>

    )
}
export default CalendarEvent;