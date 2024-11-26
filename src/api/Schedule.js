import { supabase } from '../../supabase.config';
import { fireErrorSwal } from '../utils/fireSwal';

/* schedule 데이터 가져오기 */
export const fetchSchedulesAPI = async ({ user, year, month }) => {
    const { data, error } = await supabase.from('schedules').select('*, team_home:team_home_id(*), team_away:team_away_id(*)').eq('year', year).eq('month', month).eq('user_id', user.id);

    if (error) {
        fireErrorSwal('경기 일정을 가져오지 못했습니다.');
        throw error;
    }

    return data;
};
