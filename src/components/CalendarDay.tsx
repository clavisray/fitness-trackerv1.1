import type { CalendarDayProps } from "../types/ui";
import CalendarEvent from '../components/CalendarEvent'


function CalendarDay({ className, day, events = [], onClick, onEventClick, isToday = false }: CalendarDayProps) {
    
    return (
        <div onClick={onClick}
        className={`flex flex-col h-full px-3 pt-2 pb-3 cursor-pointer transition text-zinc-600 max-h-40 rounded-xl 
        ${isToday ? "bg-lime-100 backdrop-blur-md border border-lime-300 hover:bg-lime-200" : 'bg-sky-100 border border-sky-200 hover:bg-sky-200'}
        ${className} 
        `}>
            <div className="flex justify-center">
                <h2>{day}</h2>
            </div>

            <div className="mt-2 grid min-h-0 gap-1 overflow-hidden">
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