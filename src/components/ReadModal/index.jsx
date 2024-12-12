import { useSchedules } from '../../hooks/tanstack/useSchedules';
import { fireConfirmSwal, fireToast } from '../../utils/fireSwal';
import useScheduleStore from '../../zustand/scheduleStore';
import Button from '../Button';
import Result from '../Result';
import { Background, ButtonContainer, Container } from './style';

export default function ReadModal({ isOpen, handleClose, handleUpdate }) {
    const schedule = useScheduleStore((state) => state.schedule);

    const { deleteMutation } = useSchedules();

    /* schedule 삭제 */
    const handleDelete = () => {
        fireConfirmSwal({
            text: '경기 일정을 삭제하시겠습니까?',
            afterConfirm: () => {
                deleteMutation.mutate(schedule.id);
                handleClose();
                fireToast('성공적으로 삭제되었습니다.');
            }
        });
    };

    return (
        <Background $isOpen={isOpen}>
            <Container>
                <Button category="close" label="✖" handleClick={handleClose} />
                <Result />
                <ButtonContainer>
                    <Button category="basic" label="수정" handleClick={handleUpdate} />
                    <Button category="basic" label="삭제" handleClick={handleDelete} />
                </ButtonContainer>
            </Container>
        </Background>
    );
}
