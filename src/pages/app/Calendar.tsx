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
        displayedMonthName,
        previousMonth,
        nextMonth,
        displayedMonth,
        displayedYear,
        viewMode,
        setViewMode,
    } = useCalendar();
    // console.log(currentDay);
    // console.log(currentMonth);
    // console.log(currentYear);

    const [events, setEvents] = useState<CalendarEventType[]>([
        { id: "1", title: "klata", day: 14, month: 7, year: 2026, type: "workout", content: "" },
        { id: "2", title: "klata", day: 13, month: 6, year: 2026, type: "diet", content: "" },
        { id: "3", title: "klata", day: 12, month: 8, year: 2026, type: "note", content: "" },
        
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
        <main className="flex h-screen bg-zinc-100 p-2">
            <Sidebar />

            <div className="flex min-h-0 flex-1 flex-col px-2">
                <Topbar title="Kalendarz" titleMessage="Zaplanuj swoje treningi">
                <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center">
                    <div className="flex justify-start">
                        <button
                            onClick={previousMonth}
                            className="cursor-pointer rounded-xl p-2 hover:bg-zinc-200 transition"
                        >
                            ←
                        </button>
                    </div>

                    <div className="font-medium">
                        {displayedMonthName} {displayedYear}
                    </div>

                    <div className="flex items-center justify-end gap-1 text-sm">
                        <button 
                            className={`rounded-lg px-2 py-1 hover:bg-zinc-200 cursor-pointer transition
                                ${viewMode === "month" ? "underline font-medium" : "text-zinc-400"
                                }`}
                            onClick={() => setViewMode("month")}>
                            Miesiąc
                        </button>
                        <span>
                         |
                        </span>
                        <button 
                            className={`rounded-lg px-2 py-1 hover:bg-zinc-200 cursor-pointer transition
                                ${viewMode === "week" ? "underline font-medium" : "text-zinc-400"
                                }`}
                            onClick={() => setViewMode("week")}>
                            Tydzień
                        </button>

                        <button
                            onClick={nextMonth}
                            className="cursor-pointer rounded-xl p-2 hover:bg-zinc-200 transition"
                        >
                            →
                        </button>
                    </div>
                </div>
                </Topbar>

                {/* main content */}
                {viewMode === "month" &&
                    <section className="mt-2 flex min-h-0 flex-1 flex-col rounded-3xl bg-white shadow-sm">
                        
                        <div className="grid min-h-0 flex-1 grid-cols-7 auto-rows-fr gap-2 p-3">

                            {daysOfMonth.map((day) => {
                                const dayEvents = events.filter(
                                    (event) => event.day === day && event.month === displayedMonth && event.year === displayedYear
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
                                month={displayedMonth} 
                                onClose={() => setSelectedDay(null)}
                                onAddEvent={(event) => {
                                    setEvents((prev) => [...prev, event])
                                }}
                                />
                        )}
                        
                    </section>
                }       
                {viewMode === "week" &&
                <section className="mt-2 flex min-h-0 flex-1 flex-col rounded-3xl bg-white shadow-sm">
                    <div className="grid min-h-0 flex-1 grid-cols-7 auto-rows-fr gap-2 p-3">

                    </div>
                </section>
                }
            </div>

        </main>
    )
}

export default Calendar;