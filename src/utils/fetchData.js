/* 캘린더 데이터 가져오기 */
export const fetchCalendar = async ({ user, year, month, schedules }) => {
    const firstDay = (new Date(year, month - 1).getDay() + 6) % 7;
    const lastDate = new Date(year, month, 0).getDate();

    const dates = Array.from({ length: 42 }, () => {
        return { day: null, details: [] };
    });

    for (let i = firstDay; i < firstDay + lastDate; i++) {
        dates[i].day = i - firstDay + 1;
    }

    for (let schedule of schedules) {
        const index = dates.findIndex((date) => date.day === schedule.day);
        const isHome = user.team.id === schedule.team_home_id;

        dates[index].details.push({
            id: schedule.id,
            opponent: isHome ? schedule.team_away : schedule.team_home,
            isWin: isHome ? schedule.score_home > schedule.score_away : schedule.score_away > schedule.score_home
        });
    }

    return dates;
};

/* 시즌 전적 데이터 가져오기 */
export const fetchRecords = async ({ user, schedules, teams }) => {
    let win = 0;
    let draw = 0;
    let lose = 0;

    const records = teams
        .filter((team) => team.id !== user.team.id)
        .map((team) => {
            return { team, win: 0, draw: 0, lose: 0 };
        });

    for (let schedule of schedules) {
        const isHome = schedule.team_home.id === user.team.id;
        const myScore = isHome ? schedule.score_home : schedule.score_away;
        const opponentScore = isHome ? schedule.score_away : schedule.score_home;
        const opponent = isHome ? schedule.team_away : schedule.team_home;
        const record = records.find((record) => record.team.id === opponent.id);

        if (myScore > opponentScore) {
            record['win']++;
            win++;
        } else if (myScore < opponentScore) {
            record['lose']++;
            lose++;
        } else {
            record['draw']++;
            draw++;
        }
    }

    return { win, draw, lose, details: records.sort((a, b) => b.draw - a.draw).sort((a, b) => b.win - a.win) };
};
