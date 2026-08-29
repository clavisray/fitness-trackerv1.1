import type { CalendarWeekDayType } from '../types/ui'
import CalendarEvent from './CalendarEvent'

function CalendarWeekDay({ className, day, dayName, events = [], onClick, onEventClick, isToday = false }: CalendarWeekDayType) {
    return (
        <div 
            onClick={onClick}
            className={`flex justify-center h-full rounded-xl p-2 cursor-pointer
                ${isToday ? "bg-lime-100 backdrop-blur-md border border-lime-300 hover:bg-lime-200" : 'bg-sky-100 border border-sky-200 hover:bg-sky-200'}
                ${className}`}
        >

            <div className='mt-2 w-full'>
                {events.map((event) => (
                    <CalendarEvent
                        key={event.id}
                        event={event}
                        viewMode='week'
                        onClick={() => onEventClick?.(event)}
                    />
                ))}
            </div>
        </div>
    )
}

export default CalendarWeekDay;