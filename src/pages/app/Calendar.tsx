import CalendarDay from "../../components/CalendarDay";
import Sidebar from "../../components/DashboardSidebar";
import Topbar from "../../components/DashboardTopbar";
import useCalendar from '../../hooks/useCalendar'

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
    const weekDays: string[] = [];


    console.log(daysInMonth);

    return (
        <main className="flex h-screen bg-zinc-50 p-2">
            <Sidebar />

            <div className="flex flex-1 flex-col px-2">
                <Topbar title="Kalendarz" titleMessage="Zaplanuj swoje treningi"/>

                <main className="mt-2 flex-1 rounded-3xl bg-white shadow-sm">
                    <div className="">

                    </div>
                    <div className="grid grid-cols-7">
                        {daysOfMonth.map((day) => (
                            <CalendarDay key={day} day={day} className={ 
                                day === currentDay ? "bg-sky-200 text-sky-700" : ""} />
                        ))}
                    </div>
                </main>
            </div>

        </main>
    )
}

export default Calendar;