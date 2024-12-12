import { Background, Container, Description } from './style';
import ResultForm from '../ResultForm';
import Button from '../Button';
import TeamForm from '../TeamForm';
import { useForm } from '../../hooks/custom/useForm';
import useCalendarStore from '../../zustand/calendarStore';
import { useAuth } from '../../contexts/AuthContext';
import { useSchedules } from '../../hooks/tanstack/useSchedules';
import { fireToast } from '../../utils/fireSwal';

export default function CreateModal({ isOpen, handleClose }) {
    const calendar = useCalendarStore((state) => state.calendar);

    const { user } = useAuth();

    const { createMutation } = useSchedules();

    const { values, handleChange, handleSelect, handleSelectMultiple, handleReset } = useForm({
        step: 1,
        location: '',
        opponent: null,
        team_home: null,
        team_away: null,
        stadiums: [],
        stadium: null,
        time: '18:30',
        score_home: 0,
        score_away: 0
    });

    /* create 데이터 초기화 및 modal 창 닫기 */
    const handleResetAndClose = () => {
        handleReset();
        handleClose();
    };

    /* schedule 생성 */
    const handleSubmit = async (e) => {
        e.preventDefault();

        createMutation.mutate({ user, year: calendar.year, month: calendar.month, day: calendar.day, ...values });
        handleResetAndClose();
        fireToast('성공적으로 등록되었습니다.');
    };

    return (
        <Background $isOpen={isOpen}>
            <Container onSubmit={handleSubmit}>
                <Button category="close" label="✖" handleClick={handleResetAndClose} />

                {values && (
                    <>
                        {values.step === 1 && (
                            <>
                                <Description>경기 장소와 상대 팀을 선택해 주세요.</Description>
                                <TeamForm values={values} handleSelect={handleSelect} handleSelectMultiple={handleSelectMultiple} />
                                <Button category="basic" label="다음" handleClick={() => handleSelect({ name: 'step', selected: 2 })} />
                            </>
                        )}

                        {values.step === 2 && (
                            <>
                                <ResultForm values={values} handleChange={handleChange} handleSelect={handleSelect} />
                                <Button category="form" label="등록 완료" />
                            </>
                        )}
                    </>
                )}
            </Container>
        </Background>
    );
}
