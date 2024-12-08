import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useCalendarStore from '../../zustand/calendarStore';
import { fetchYearSchedulesAPI } from '../../api/Schedule';
import { useAuth } from '../../contexts/AuthContext';
import { useTeams } from './useTeams';
import { fetchRecords } from '../../utils/fetchData';

export function useRecords() {
    const queryClient = useQueryClient();

    const calendar = useCalendarStore((state) => state.calendar);
    const moveToPrevYear = useCalendarStore((state) => state.moveToPrevYear);
    const moveToNextYear = useCalendarStore((state) => state.moveToNextYear);

    const { user } = useAuth();
    const { data: teams } = useTeams();

    /* record 목록 가져오기 */
    const { data } = useQuery({
        queryKey: ['records'],
        queryFn: async () => {
            const schedules = await fetchYearSchedulesAPI({ user, year: calendar.year });
            const records = await fetchRecords({ user, schedules, teams });
            return records;
        }
    });

    /* 이전 년도로 이동 */
    const moveToPrevMutation = useMutation({
        mutationFn: moveToPrevYear,
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ['records']
            })
    });

    /* 다음 년도로 이동 */
    const moveToNextMutation = useMutation({
        mutationFn: moveToNextYear,
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ['records']
            })
    });

    return { data, moveToPrevMutation, moveToNextMutation };
}
