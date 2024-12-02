import { useState } from 'react';
import { fetchScheduleAPI } from '../api/Schedule';

export function useReadModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState();

    /* modal 창 열기 */
    const openModal = async (scheduleId) => {
        const schedule = await fetchScheduleAPI(scheduleId);

        setData(schedule[0]);
        setIsOpen(true);
    };

    /* modal 창 닫기 */
    const closeModal = () => {
        setIsOpen(false);
    };

    return { isOpen, data, openModal, closeModal };
}
