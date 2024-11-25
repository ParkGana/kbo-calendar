/* 캘린더 데이터 가져오기 */
export const fetchCalendar = async ({ year, month }) => {
    const firstDay = (new Date(year, month - 1).getDay() + 6) % 7;
    const lastDate = new Date(year, month, 0).getDate();

    const dates = Array.from({ length: 42 }, () => null);

    for (let i = firstDay; i < firstDay + lastDate; i++) {
        dates[i] = i - firstDay + 1;
    }

    return dates;
};
