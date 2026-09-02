import { useState } from "react";

function getDaysInCurrentMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function addDays(date: Date, days: number) {
  const newDate = new Date(date);

  newDate.setDate(newDate.getDate() + days);

  return newDate;
}

function addMonths(date: Date, months: number) {
  const newDate = new Date(date);
  const currentDay = newDate.getDate();

  newDate.setDate(1);

  newDate.setMonth(newDate.getMonth() + months);

  const daysInTargetMonth = getDaysInCurrentMonth(
    newDate.getFullYear(),
    newDate.getMonth(),
  );

  newDate.setDate(Math.min(currentDay, daysInTargetMonth));

  return newDate;
}

function getMonday(date: Date) {
  const monday = new Date(date);
  const weekDayIndex = (monday.getDay() + 6) % 7;
  monday.setDate(monday.getDate() - weekDayIndex);
  return monday;
}

export const monthNamesGenitive = [
  "Stycznia",
  "Lutego",
  "Marca",
  "Kwietnia",
  "Maja",
  "Czerwca",
  "Lipca",
  "Sierpnia",
  "Września",
  "Października",
  "Listopada",
  "Grudnia",
];

const monthNames = [
  "Styczeń",
  "Luty",
  "Marzec",
  "Kwiecień",
  "Maj",
  "Czerwiec",
  "Lipiec",
  "Sierpień",
  "Wrzesień",
  "Październik",
  "Listopad",
  "Grudzień",
];

const weekDays = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nd"];

function useCalendar() {
  const today = new Date();

  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  const [displayedDate, setDisplayedDate] = useState<Date>(() => new Date());

  const [viewMode, setViewMode] = useState<"month" | "week">("month");

  const displayedMonth = displayedDate.getMonth();
  const displayedYear = displayedDate.getFullYear();

  const daysInMonth = getDaysInCurrentMonth(displayedYear, displayedMonth);

  const daysOfMonth = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1,
  );

  const displayedMonthName = monthNames[displayedMonth];

  function previousMonth() {
    setDisplayedDate((previousDate) => {
      return addMonths(previousDate, -1);
    });
  }

  function nextMonth() {
    setDisplayedDate((previousDate) => {
      return addMonths(previousDate, 1);
    });
  }

  function previousWeek() {
    setDisplayedDate((previousDate) => {
      return addDays(previousDate, -7);
    });
  }

  function nextWeek() {
    setDisplayedDate((previousDate) => {
      return addDays(previousDate, 7);
    });
  }

  function goToToday() {
    setDisplayedDate(new Date());
  }

  const monday = getMonday(displayedDate);

  const weekDates = Array.from({ length: 7 }, (_, index) => {
    return addDays(monday, index);
  });

  return {
    currentYear,
    currentMonth,
    currentDay,

    daysInMonth,
    daysOfMonth,

    displayedMonthName,
    displayedMonth,
    displayedYear,

    previousMonth,
    nextMonth,

    previousWeek,
    nextWeek,

    goToToday,

    viewMode,
    setViewMode,

    weekDates,
    weekDays,
  };
}

export default useCalendar;
