function getDaysInCurrentMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
}

function useCalendar() {
    const today = new Date();

    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    const daysInMonth = getDaysInCurrentMonth(currentYear, currentMonth);
    const daysOfMonth: number[] = [];
    
    for(let i = 0; i <= daysInMonth; i++) {
        daysOfMonth.push(i);
    }
    

    return {
        currentYear,
        currentMonth,
        currentDay,
        daysInMonth,
        daysOfMonth,
    };
}

export default useCalendar;