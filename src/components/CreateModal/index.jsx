import { Background, Container, Description } from './style';
import ResultForm from '../ResultForm';
import Button from '../Button';
import TeamForm from '../TeamForm';
import { useForm } from '../../hooks/useForm';
import { createScheduleAPI } from '../../api/Schedule';

export default function CreateModal({ isOpen, year, month, day, handleClose }) {
    const { values, handleChange, handleSelect, handleSelectMultiple, handleReset } = useForm({
        step: 1,
        location: '',
        opponent: null,
        team_home: null,
        team_away: null,
        stadium: null,
        time: '18:30',
        score_home: 0,
        score_away: 0
    });

    const handleResetAndClose = () => {
        handleReset();
        handleClose();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await createScheduleAPI({ year, month, day, ...values });

        handleResetAndClose();
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
                                <ResultForm values={values} handleChange={handleChange} />
                                <Button category="form" label="등록 완료" />
                            </>
                        )}
                    </>
                )}
            </Container>
        </Background>
    );
}
