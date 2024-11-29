import { useState } from 'react';
import { Background, Container, Description } from './style';
import ResultForm from '../ResultForm';
import Button from '../Button';
import TeamForm from '../TeamForm';

export default function CreateModal({ isOpen, handleClose }) {
    const [createStep, setCreateStep] = useState(1);

    return (
        <Background $isOpen={isOpen}>
            <Container>
                <Button category="close" label="✖" handleClick={handleClose} />
                {createStep === 1 && (
                    <>
                        <Description>경기 장소와 상대 팀을 선택해 주세요.</Description>
                        <TeamForm />
                        <Button category="basic" label="다음" handleClick={() => setCreateStep(createStep + 1)} />
                    </>
                )}
                {createStep === 2 && <ResultForm label="등록 완료" handleChange={() => {}} handleSubmit={() => {}} />}
            </Container>
        </Background>
    );
}
