import type { CalendarDayProps } from "../types/ui";
import CalendarEvent from '../components/CalendarEvent'


function CalendarDay({ className, day, events = [], onClick, onEventClick }: CalendarDayProps) {
    return (
        <div onClick={onClick}
        className={`flex flex-col px-3 pt-2 pb-3 bg-sky-50 hover:bg-sky-100 cursor-pointer transition text-zinc-600 min-h-32 max-h-40 rounded-xl ${className}`}>
            <div className="flex justify-center">
                <h2>{day}</h2>
            </div>

            <div className="mt-3 grid gap-2">
                {events.map((event) => (

                    <CalendarEvent 
                    key={event.id}
                    event={event}
                    viewMode="month"
                    onClick={() => onEventClick?.(event)}
                    />
                ))}
            </div>
        </div>
    )
}
export default CalendarDay;