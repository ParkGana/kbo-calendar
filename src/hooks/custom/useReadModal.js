import { useState } from 'react';
import useScheduleStore from '../../zustand/scheduleStore';

export function useReadModal() {
    const fetchSchedule = useScheduleStore((state) => state.fetchSchedule);

    const [isOpen, setIsOpen] = useState(false);

    /* modal 창 열기 */
    const openModal = async (scheduleId) => {
        await fetchSchedule(scheduleId);
        setIsOpen(true);
    };

    /* modal 창 닫기 */
    const closeModal = () => {
        setIsOpen(false);
    };

    return { isOpen, openModal, closeModal };
}
