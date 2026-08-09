import type { CalendarDayProps } from "../types/ui";

function CalendarDay({ className, day }: CalendarDayProps) {
    return (
        <div className={`flex p-10 bg-black text-white justify-center items-center ${className}`}>
            <h2>{day}</h2>
        </div>
    )
}
export default CalendarDay;