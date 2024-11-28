/* 캘린더 데이터 가져오기 */
export const fetchCalendar = async ({ user, year, month, schedules }) => {
    const firstDay = (new Date(year, month - 1).getDay() + 6) % 7;
    const lastDate = new Date(year, month, 0).getDate();

    const dates = Array.from({ length: 42 }, () => {
        return { day: null, scheduleId: null, opponent: null };
    });

    for (let i = firstDay; i < firstDay + lastDate; i++) {
        dates[i].day = i - firstDay + 1;
    }

    for (let schedule of schedules) {
        const index = dates.findIndex((date) => date.day === schedule.day);
        const opponent = user.team.id === schedule.team_home_id ? schedule.team_away : schedule.team_home;

        dates[index].scheduleId = schedule.id;
        dates[index].opponent = opponent;
    }

    return dates;
};
