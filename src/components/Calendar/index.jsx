import { color } from '../../configurations/Color';
import { v4 as uuid } from 'uuid';
import { useReadModal } from '../../hooks/custom/useReadModal';
import { useCreateModal } from '../../hooks/custom/useCreateModal';
import { useUpdateModal } from '../../hooks/custom/useUpdateModal';
import { Arrow, BodyContainer, Container, Date, DateContainer, Day, HeadContainer, Month, Opponent, Plus } from './style';
import ReadModal from '../ReadModal';
import CreateModal from '../CreateModal';
import UpdateModal from '../UpdateModal';
import useCalendarStore from '../../zustand/calendarStore';
import { useSchedules } from '../../hooks/tanstack/useSchedules';

export default function Calendar() {
    const calendar = useCalendarStore((state) => state.calendar);

    const { data: schedules, moveToPrevMutation, moveToNextMutation } = useSchedules();

    const { isOpen: isOpenReadModal, openModal: openReadModal, closeModal: closeReadModal } = useReadModal();
    const { isOpen: isOpenCreateModal, openModal: openCreateModal, closeModal: closeCreateModal } = useCreateModal();
    const { isOpen: isOpenUpdateModal, openModal: openUpdateModal, closeModal: closeUpdateModal } = useUpdateModal();

    /* update Modal 열기 */
    const handleOpenUpdateModal = () => {
        closeReadModal();
        openUpdateModal();
    };

    return (
        <Container>
            <HeadContainer>
                <Arrow onClick={moveToPrevMutation.mutate}>◀</Arrow>
                <Month>{calendar.month.toString().padStart(2, '0')}월</Month>
                <Arrow onClick={moveToNextMutation.mutate}>▶</Arrow>
            </HeadContainer>
            <BodyContainer>
                {['월', '화', '수', '목', '금', '토', '일'].map((day) => (
                    <Day key={uuid()} $isSaturday={day === '토'} $isSunday={day === '일'}>
                        {day}
                    </Day>
                ))}
                {schedules?.map(({ day, scheduleId, opponent }, index) => (
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

            <ReadModal isOpen={isOpenReadModal} handleClose={closeReadModal} handleUpdate={handleOpenUpdateModal} />
            <CreateModal isOpen={isOpenCreateModal} handleClose={closeCreateModal} />
            <UpdateModal isOpen={isOpenUpdateModal} handleClose={closeUpdateModal} />
        </Container>
    );
}
