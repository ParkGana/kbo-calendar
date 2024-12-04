import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useCalendarStore from '../../zustand/calendarStore';
import { createScheduleAPI, fetchSchedulesAPI } from '../../api/Schedule';
import { useAuth } from '../../contexts/AuthContext';
import { fetchCalendar } from '../../utils/fetchData';

export function useSchedules() {
    const queryClient = useQueryClient();

    const { user } = useAuth();
    const calendar = useCalendarStore((state) => state.calendar);
    const moveToPrev = useCalendarStore((state) => state.moveToPrev);
    const moveToNext = useCalendarStore((state) => state.moveToNext);

    /* schedule 목록 가져오기 */
    const { data } = useQuery({
        queryKey: ['schedules'],
        queryFn: async () => {
            const schedules = await fetchSchedulesAPI({ user, year: calendar.year, month: calendar.month });
            const dates = await fetchCalendar({ user, year: calendar.year, month: calendar.month, schedules });
            return dates;
        }
    });

    /* 이전 달로 이동 */
    const moveToPrevMutation = useMutation({
        mutationFn: moveToPrev,
        onSuccess: () => queryClient.invalidateQueries(['schedules'])
    });

    /* 다음 달로 이동 */
    const moveToNextMutation = useMutation({
        mutationFn: moveToNext,
        onSuccess: () => queryClient.invalidateQueries(['schedules'])
    });

    /* schedule 생성 */
    const createMutation = useMutation({
        mutationFn: createScheduleAPI,
        onSuccess: () => queryClient.invalidateQueries(['schedules'])
    });

    return { data, moveToPrevMutation, moveToNextMutation, createMutation };
}
