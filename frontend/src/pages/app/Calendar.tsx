import { useState } from "react";

import CalendarDay from "../../components/CalendarDay";
import Sidebar from "../../components/DashboardSidebar";
import Topbar from "../../components/DashboardTopbar";
import AddEventModal from "../../components/AddEventModal";
import CalendarWeekDay from "../../components/CalendarWeekDay";

import useCalendar from "../../hooks/useCalendar";

import type { CalendarEventType } from "../../types/ui";

function Calendar() {
  const {
    currentYear,
    currentMonth,
    currentDay,
    daysOfMonth,
    displayedMonthName,
    previousMonth,
    nextMonth,
    previousWeek,
    nextWeek,
    goToToday,
    displayedMonth,
    displayedYear,
    viewMode,
    setViewMode,
    weekDates,
    weekDays,
  } = useCalendar();

  const firstDayOfMonth = new Date(displayedYear, displayedMonth, 1);

  const firstDayOfWeek = firstDayOfMonth.getDay();

  const startOffset = (firstDayOfWeek + 6) % 7;

  const [events, setEvents] = useState<CalendarEventType[]>([
    {
      id: "1",
      title: "klata",
      day: 28,
      month: 7,
      year: 2026,
      type: "workout",
      content: "teas dawdas dawdwad wadwaw addwa wad",
      isDone: false,
    },
    {
      id: "2",
      title: "klata",
      day: 29,
      month: 7,
      year: 2026,
      type: "diet",
      content: "",
      isDone: false,
    },
    {
      id: "3",
      title: "klata",
      day: 27,
      month: 7,
      year: 2026,
      type: "note",
      content: "",
      isDone: true,
    },
  ]);

  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  function handleClickDay(day: number) {
    const dayEvents = events.filter((event) => event.day === day);

    if (dayEvents.length >= 3) {
      return;
    }

    setSelectedDay(day);
  }

  return (
    <main className="flex h-screen overflow-hidden bg-linear-to-r from-lime-200 via-sky-100 to-indigo-200 p-2">
      <Sidebar />

      <div className="flex min-h-0 flex-1 flex-col px-2">
        {/* ### TOP BAR ### */}

        <Topbar title="Kalendarz" titleMessage="Zaplanuj swoje treningi">
          <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center">
            <div className="flex justify-start">
              <button
                onClick={viewMode === "week" ? previousWeek : previousMonth}
                className="cursor-pointer rounded-xl px-3 py-2 transition hover:bg-white/30 hover:backdrop-blur-md hover:shadow-sm"
              >
                ←
              </button>
            </div>

            <div>
              <button
                className="cursor-pointer rounded-xl px-3 py-2 font-medium transition hover:bg-zinc-200"
                /* onClick={} to implement month and year dropdown */
              >
                {displayedMonthName} {displayedYear}
              </button>
            </div>

            <div className="flex items-center justify-end gap-1 text-sm">
              <button
                onClick={goToToday}
                className="cursor-pointer rounded-lg px-2 py-1 transition hover:bg-white/30 hover:backdrop-blur-md hover:shadow-sm"
              >
                Dzisiaj
              </button>

              <button
                className={`cursor-pointer rounded-lg px-2 py-1 transition hover:bg-white/30 hover:text-black hover:backdrop-blur-md hover:shadow-sm ${
                  viewMode === "month"
                    ? "font-medium underline"
                    : "text-zinc-400"
                }`}
                onClick={() => setViewMode("month")}
              >
                Miesiąc
              </button>

              <span>|</span>

              <button
                className={`cursor-pointer rounded-lg px-2 py-1 transition hover:bg-white/30 hover:text-black hover:backdrop-blur-md hover:shadow-sm ${
                  viewMode === "week"
                    ? "font-medium underline"
                    : "text-zinc-400"
                }`}
                onClick={() => setViewMode("week")}
              >
                Tydzień
              </button>

              <button
                onClick={viewMode === "week" ? nextWeek : nextMonth}
                className="cursor-pointer rounded-xl px-3 py-2 transition hover:bg-white/30 hover:backdrop-blur-md hover:shadow-sm"
              >
                →
              </button>
            </div>
          </div>
        </Topbar>

        {/* Week day columns above the grid */}

        <section>
          {viewMode === "week" && (
            <div className="grid grid-cols-7 gap-2 px-3">
              {weekDates.map((date, index) => {
                const isToday =
                  date.getDate() === currentDay &&
                  date.getMonth() === currentMonth &&
                  date.getFullYear() === currentYear;

                return (
                  <div
                    key={date.getTime()}
                    className={`flex items-center justify-center rounded-2xl px-2 py-3 ${
                      isToday
                        ? "bg-white font-bold text-indigo-500"
                        : "rounded-2xl border border-white/20 bg-white/20 font-bold text-black shadow-sm backdrop-blur-md"
                    }`}
                  >
                    {weekDays[index].toLowerCase()} {date.getDate()}
                  </div>
                );
              })}
            </div>
          )}

          {viewMode === "month" && (
            <div className="grid grid-cols-7 gap-2 px-3">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className="flex items-center justify-center rounded-2xl border border-white/20 bg-white/20 px-2 py-3 font-bold text-black shadow-sm backdrop-blur-md"
                >
                  {day.toLowerCase()}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* main content */}

        {viewMode === "month" && (
          <section className="mt-2 flex min-h-0 flex-1 flex-col rounded-3xl bg-zinc-50 shadow-sm">
            <div className="grid min-h-0 flex-1 grid-cols-7 grid-rows-6 gap-2 p-3">
              {Array.from({
                length: startOffset,
              }).map((_, index) => (
                <div key={`empty-${index}`}></div>
              ))}

              {daysOfMonth.map((day) => {
                const dayEvents = events.filter(
                  (event) =>
                    event.day === day &&
                    event.month === displayedMonth &&
                    event.year === displayedYear,
                );

                const isToday =
                  day === currentDay &&
                  displayedMonth === currentMonth &&
                  displayedYear === currentYear;

                return (
                  <CalendarDay
                    key={day}
                    day={day}
                    events={dayEvents}
                    isToday={isToday}
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
                  setEvents((prev) => [...prev, event]);
                }}
              />
            )}
          </section>
        )}

        {viewMode === "week" && (
          <section className="mt-2 flex min-h-0 flex-1 flex-col rounded-3xl bg-white shadow-sm">
            <div className="grid min-h-0 flex-1 auto-rows-fr grid-cols-7 gap-3 p-3">
              {weekDates.map((date) => {
                const day = date.getDate();

                const isToday =
                  date.getDate() === currentDay &&
                  date.getMonth() === currentMonth &&
                  date.getFullYear() === currentYear;

                const dayEvents = events.filter(
                  (event) =>
                    event.day === date.getDate() &&
                    event.month === date.getMonth() &&
                    event.year === date.getFullYear(),
                );

                return (
                  <CalendarWeekDay
                    key={date.getTime()}
                    day={day}
                    dayName="monday"
                    events={dayEvents}
                    className=""
                    isToday={isToday}
                    onClick={() => handleClickDay(day)}
                  />
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default Calendar;
