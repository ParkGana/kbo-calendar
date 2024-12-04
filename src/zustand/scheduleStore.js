import { create } from 'zustand';
import { fetchScheduleAPI } from '../api/Schedule';

const useScheduleStore = create((set) => ({
    schedule: {},
    /* schedule 상세 정보 가져오기 */
    fetchSchedule: async (scheduleId) => {
        const data = await fetchScheduleAPI(scheduleId);

        return set(() => ({
            schedule: data[0]
        }));
    }
}));

export default useScheduleStore;
