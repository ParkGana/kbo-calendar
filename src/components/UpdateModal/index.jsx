import { useEffect } from 'react';
import { useForm } from '../../hooks/custom/useForm';
import { useSchedules } from '../../hooks/tanstack/useSchedules';
import useScheduleStore from '../../zustand/scheduleStore';
import Button from '../Button';
import ResultForm from '../ResultForm';
import { Background, Container } from './style';

export default function UpdateModal({ isOpen, handleClose }) {
    const schedule = useScheduleStore((state) => state.schedule);

    const { updateMutation } = useSchedules();

    const { values, setValues, handleChange, handleReset } = useForm({
        team_home: null,
        team_away: null,
        stadium: null,
        time: '18:30',
        score_home: 0,
        score_away: 0
    });

    useEffect(() => {
        setValues({ ...values, ...schedule });
    }, [schedule]);

    /* update 데이터 초기화 및 modal 창 닫기 */
    const handleResetAndClose = () => {
        handleReset();
        handleClose();
    };

    /* schedule 수정 */
    const handleSubmit = async (e) => {
        e.preventDefault();

        updateMutation.mutate({ scheduleId: schedule.id, ...values });
        handleResetAndClose();
    };

    return (
        <Background $isOpen={isOpen}>
            <Container onSubmit={handleSubmit}>
                <Button category="close" label="✖" handleClick={handleClose} />
                <ResultForm values={values} handleChange={handleChange} />
                <Button category="form" label="수정 완료" />
            </Container>
        </Background>
    );
}
