import { supabase } from '../../supabase.config';
import { fireErrorSwal } from '../utils/fireSwal';

/* teams 데이터 가져오기 */
export const fetchTeamsAPI = async () => {
    const { data, error } = await supabase.from('teams').select('*, stadium:stadiums(*)').order('name_english');

    if (error) {
        fireErrorSwal('구단 정보를 가져오지 못했습니다.');
        throw error;
    }

    return data;
};

/* schedule 데이터 가져오기 */
export const fetchSchedulesAPI = async ({ user, year, month }) => {
    const { data, error } = await supabase.from('schedules').select('*, team_home:team_home_id(*), team_away:team_away_id(*)').eq('year', year).eq('month', month).eq('user_id', user.id);

    if (error) {
        fireErrorSwal('경기 일정을 가져오지 못했습니다.');
        throw error;
    }

    return data;
};

/* schedule 상세 데이터 가져오기 */
export const fetchScheduleAPI = async (scheduleId) => {
    const { data, error } = await supabase.from('schedules').select('*, team_home:team_home_id(*), team_away:team_away_id(*), stadium:stadium_id(*)').eq('id', scheduleId);

    if (error) {
        fireErrorSwal('경기 일정을 가져오지 못했습니다.');
        throw error;
    }

    return data;
};

/* schedule 추가 */
export const createScheduleAPI = async (data) => {
    const { user, year, month, day, time, score_home, score_away, team_home, team_away, stadium } = data;

    const { error } = await supabase.from('schedules').insert({
        year,
        month,
        day,
        time,
        score_home,
        score_away,
        team_home_id: team_home.id,
        team_away_id: team_away.id,
        stadium_id: stadium.id,
        user_id: user.id
    });

    if (error) {
        fireErrorSwal('경기 일정 생성을 실패하였습니다.');
        throw error;
    }
};
