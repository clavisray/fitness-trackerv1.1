import { useState } from 'react'

function getDaysInCurrentMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
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
        "Grudnia"
    ];


function useCalendar() {
    const today = new Date();

    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();
    const [displayedMonth, setDisplayedMonth] = useState(currentMonth)
    const [displayedYear, setDisplayedYear] = useState(currentYear)
    const daysInMonth = getDaysInCurrentMonth(currentYear, displayedMonth);
    const daysOfMonth: number[] = [];
    const [viewMode, setViewMode] = useState<"month" | "week">("month");
    const weekDays = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nd",];
    
    for(let i = 1; i <= daysInMonth; i++) {
        daysOfMonth.push(i);
    }

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
    
    function previousMonth() {
        if (displayedMonth === 0) {
            setDisplayedMonth(11);
            setDisplayedYear((prev) => prev - 1);
            return
        }
        setDisplayedMonth((prev) => prev - 1)
    }

    function nextMonth() {
        if (displayedMonth === 11) {
            setDisplayedMonth(0);
            setDisplayedYear((prev) => prev + 1);
            return
        }

        setDisplayedMonth((prev) => prev + 1)
    }
    const displayedMonthName = monthNames[displayedMonth];

    const todayWeekDayIndex = (new Date().getDay() + 6) % 7;

    const currentDate = new Date();

    const monday = new Date(currentDate);

    monday.setDate(currentDate.getDate() - todayWeekDayIndex);

    const weekDates = Array.from({ length: 7 }, (_, index) => {
        const date = new Date(monday);
        date.setDate(monday.getDate() + index);
        return date;
    });

    console.log(weekDates)


    return {
        currentYear,
        currentMonth,
        currentDay,
        daysInMonth,
        daysOfMonth,
        displayedMonthName,
        nextMonth,
        previousMonth,
        displayedMonth,
        displayedYear,
        viewMode,
        setViewMode,
        todayWeekDayIndex,
        weekDates,
        weekDays,
    };
}

export default useCalendar;