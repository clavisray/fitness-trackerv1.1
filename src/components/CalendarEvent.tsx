import type { CalendarEventProps } from "../types/ui";

function CalendarEvent({ event, viewMode, onClick, }: CalendarEventProps) {
    if (viewMode === "month") {
       return (
            <button 
            onClick={(e) => {
                e.stopPropagation
                onClick?.();
            }}
            className='flex bg-indigo-300 text-white justify-center items-center rounded-xl cursor-pointer hover:bg-indigo-500 transition'
            >
                TRENING: {event.title}
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