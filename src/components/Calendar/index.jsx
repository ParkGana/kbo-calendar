import { color } from '../../configurations/Color';
import { v4 as uuid } from 'uuid';
import { useEffect, useState } from 'react';
import { fetchCalendar } from '../../utils/fetchData';
import { useAuth } from '../../contexts/AuthContext';
import { fetchSchedulesAPI } from '../../api/Schedule';
import { useReadModal } from '../../hooks/useReadModal';
import { useCreateModal } from '../../hooks/useCreateModal';
import { useUpdateModal } from '../../hooks/useUpdateModal';
import { Arrow, BodyContainer, Container, Date, DateContainer, Day, HeadContainer, Month, Opponent, Plus } from './style';
import ReadModal from '../ReadModal';
import CreateModal from '../CreateModal';
import UpdateModal from '../UpdateModal';

const today = new window.Date();

export default function Calendar() {
    const { isOpen: isOpenReadModal, data: readData, openModal: openReadModal, closeModal: closeReadModal } = useReadModal();
    const { isOpen: isOpenCreateModal, openModal: openCreateModal, closeModal: closeCreateModal } = useCreateModal();
    const { isOpen: isOpenUpdateModal, openModal: openUpdateModal, closeModal: closeUpdateModal } = useUpdateModal();

    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth() + 1);
    const [calendarData, setCalendarData] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        const fetchCalendarData = async () => {
            const schedules = await fetchSchedulesAPI({ user, year, month });
            const dates = await fetchCalendar({ user, year, month, schedules });

            setCalendarData(dates);
        };

        fetchCalendarData();
    }, [user, year, month]);

    /* 이전 달로 이동 */
    const handleMovePrev = () => {
        setYear(month === 1 ? year - 1 : year);
        setMonth(month === 1 ? 12 : month - 1);
    };

    /* 다음 달로 이동 */
    const handleMoveNext = () => {
        setYear(month === 12 ? year + 1 : year);
        setMonth(month === 12 ? 1 : month + 1);
    };

    return (
        <Container>
            <HeadContainer>
                <Arrow onClick={handleMovePrev}>◀</Arrow>
                <Month>{month.toString().padStart(2, '0')}월</Month>
                <Arrow onClick={handleMoveNext}>▶</Arrow>
            </HeadContainer>
            <BodyContainer>
                {['월', '화', '수', '목', '금', '토', '일'].map((day) => (
                    <Day key={uuid()} $isSaturday={day === '토'} $isSunday={day === '일'}>
                        {day}
                    </Day>
                ))}
                {calendarData.map(({ day, scheduleId, opponent }, index) => (
                    <DateContainer key={uuid()}>
                        <Date $isSaturday={index % 7 === 5} $isSunday={index % 7 === 6}>
                            {day}
                        </Date>
                        {day && <Plus onClick={openCreateModal}>+</Plus>}
                        {opponent && (
                            <Opponent $backgroundColor={color[opponent.name_english]} onClick={() => openReadModal(scheduleId)}>
                                {opponent.name_korean.split(' ')[0]}
                            </Opponent>
                        )}
                    </DateContainer>
                ))}
            </BodyContainer>

            {readData && (
                <ReadModal
                    isOpen={isOpenReadModal}
                    data={readData}
                    handleClose={closeReadModal}
                    handleUpdate={() => {
                        closeReadModal();
                        openUpdateModal();
                    }}
                />
            )}
            <CreateModal isOpen={isOpenCreateModal} handleClose={closeCreateModal} />
            <UpdateModal isOpen={isOpenUpdateModal} handleClose={closeUpdateModal} />
        </Container>
    );
}
