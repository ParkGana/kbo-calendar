import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useCalendarStore from '../../zustand/calendarStore';
import { createScheduleAPI, deleteScheduleAPI, fetchYearMonthSchedulesAPI, updateScheduleAPI } from '../../api/Schedule';
import { useAuth } from '../../contexts/AuthContext';
import { fetchCalendar } from '../../utils/fetchData';
import { fireErrorSwal } from '../../utils/fireSwal';

export function useSchedules() {
    const queryClient = useQueryClient();

    const { user } = useAuth();
    const calendar = useCalendarStore((state) => state.calendar);
    const moveToPrevMonth = useCalendarStore((state) => state.moveToPrevMonth);
    const moveToNextMonth = useCalendarStore((state) => state.moveToNextMonth);

    /* schedule 목록 가져오기 */
    const { data } = useQuery({
        queryKey: ['schedules'],
        queryFn: async () => {
            const schedules = await fetchYearMonthSchedulesAPI({ user, year: calendar.year, month: calendar.month });
            const dates = await fetchCalendar({ user, year: calendar.year, month: calendar.month, schedules });
            return dates;
        }
    });

    /* 이전 달로 이동 */
    const moveToPrevMutation = useMutation({
        mutationFn: moveToPrevMonth,
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ['schedules']
            })
    });

    /* 다음 달로 이동 */
    const moveToNextMutation = useMutation({
        mutationFn: moveToNextMonth,
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ['schedules']
            })
    });

    /* schedule 생성 */
    const createMutation = useMutation({
        mutationFn: createScheduleAPI,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['schedules']
            });
        },
        onError: () => {
            fireErrorSwal('경기 일정 생성에 실패하였습니다.');
        }
    });

    /* schedule 수정 */
    const updateMutation = useMutation({
        mutationFn: updateScheduleAPI,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['schedules']
            });
        },
        onError: () => {
            fireErrorSwal('경기 일정 수정에 실패하였습니다.');
        }
    });

    /* schedule 삭제 */
    const deleteMutation = useMutation({
        mutationFn: deleteScheduleAPI,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['schedules']
            });
        },
        onError: () => {
            fireErrorSwal('경기 일정 삭제에 실패하였습니다.');
        }
    });

    return { data, moveToPrevMutation, moveToNextMutation, createMutation, updateMutation, deleteMutation };
}
