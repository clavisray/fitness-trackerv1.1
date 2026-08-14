import CalendarDay from "../../components/CalendarDay";
import Sidebar from "../../components/DashboardSidebar";
import Topbar from "../../components/DashboardTopbar";
import useCalendar from '../../hooks/useCalendar'
import type { CalendarEventType } from "../../types/ui";
import { useState } from 'react'
import AddEventModal from "../../components/AddEventModal";

function Calendar() {
    const {
        currentYear,
        currentMonth,
        currentDay,
        daysInMonth,
        daysOfMonth,
    } = useCalendar();
    // console.log(currentDay);
    // console.log(currentMonth);
    // console.log(currentYear);

    const [events, setEvents] = useState<CalendarEventType[]>([
        { id: "1", title: "klata", day: 14, type: "workout", content: "" },
        { id: "2", title: "klata", day: 14, type: "diet", content: "" },
        { id: "3", title: "klata", day: 14, type: "note", content: "" },
        
    ])

    const [selectedDay, setSelectedDay] = useState<number | null>(null);
    const [selectedEvent, setSelectedEvent] = useState<CalendarEventType | null>(null);

    function handleClickDay(day: number) {
        const dayEvents = events.filter(
            (event) => event.day === day);

            if(dayEvents.length >= 3) {
                return;
            } 
            setSelectedDay(day); 
    }



    console.log(daysInMonth);

    return (
        <main className="flex h-screen bg-beige-300 p-2">
            <Sidebar />

            <div className="flex flex-1 flex-col px-2">
                <Topbar title="Kalendarz" titleMessage="Zaplanuj swoje treningi"/>

                <main className="mt-2 flex-1 rounded-3xl bg-white shadow-sm">
                    <div className="">
                        {currentMonth}
                    </div>
                    <div className="grid w-full grid-cols-7 p-3 gap-2">

                        {daysOfMonth.map((day) => {
                            const dayEvents = events.filter(
                                (event) => event.day === day
                            );

                            return(
                                <CalendarDay
                                    key={day}
                                    day={day}
                                    events={dayEvents}
                                    onClick={() => handleClickDay(day)}
                                />
                            );
                        })}

                    </div>

                    {selectedDay !== null && (
                        <AddEventModal 
                            day={selectedDay} 
                            month={currentMonth} 
                            onClose={() => setSelectedDay(null)}
                            onAddEvent={(event) => {
                                setEvents((prev) => [...prev, event])
                            }}
                            />
                    )}

                </main>
            </div>

        </main>
    )
}

export default Calendar;