import styled from 'styled-components';
import { color } from '../configurations/Color';
import Horizontal from './alignment/Horizontal';
import Button from './common/Button';
import ModalLayout from './layout/ModalLayout';
import { typography } from '../configurations/Typography';
import Filter from './common/Filter';
import { useState } from 'react';
import { TeamData } from '../Data';
import { v4 as uuid } from 'uuid';
import Input from './common/Input';

const ScoreContainer = styled.div``;

const BracketContainer = styled.div`
    display: grid;
    grid-template-columns: 140px 80px 140px;
    align-items: center;
    margin-top: 50px;
`;

const Bracket = styled.img`
    width: 140px;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Info = styled.p`
    ${typography.title3};
    color: ${color.black};
    text-align: center;
`;

const ResultContainer = styled.div`
    display: grid;
    grid-template-columns: 140px 80px 140px;
`;

const Result = styled.p`
    ${typography.headline1};
    color: ${color.black};
    text-align: center;
`;

const Description = styled.p`
    ${typography.title3};
    color: ${color.black};
    text-align: center;
    margin-top: 60px;
`;

const ChoiceContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
`;

const Choice = styled.img`
    ${({ $isSelected }) => `
        width: 100px;
        cursor: pointer;

        ${
            $isSelected &&
            `
                background-color: ${color.gray};
                border-radius: 4px;
            `
        };
    `}
`;

export default function Modal({ category, isOpen, handleClose, handleUpdate }) {
    const [location, setLocation] = useState('');
    const [bracket, setBracket] = useState('');
    const [createStep, setCreateStep] = useState(1);

    return (
        <ModalLayout gap={category === 'read' ? 40 : 20} isOpen={isOpen}>
            <Button category="close" labelColor={color.gray} label="✖" handleClick={handleClose} />
            {category === 'read' && (
                <>
                    <ScoreContainer>
                        <BracketContainer>
                            <Bracket src="src/assets/hanwha.png" alt="image" />
                            <InfoContainer>
                                <Info>사직</Info>
                                <Info>18:30</Info>
                            </InfoContainer>
                            <Bracket src="src/assets/lotte.png" alt="image" />
                        </BracketContainer>
                        <ResultContainer>
                            <Result>5</Result>
                            <Result>:</Result>
                            <Result>7</Result>
                        </ResultContainer>
                    </ScoreContainer>
                    <Horizontal gap={20}>
                        <Button label="수정" handleClick={handleUpdate} />
                        <Button backgroundColor={color.red} label="삭제" handleClick={() => {}} />
                    </Horizontal>
                </>
            )}

            {category === 'create' && (
                <>
                    {createStep === 1 && (
                        <>
                            <Description>경기 장소와 상대 팀을 선택해 주세요.</Description>
                            <Filter
                                category="modal"
                                options={[
                                    { label: '홈', handleClick: () => setLocation('홈'), isSelected: location === '홈' },
                                    { label: '원정', handleClick: () => setLocation('원정'), isSelected: location === '원정' }
                                ]}
                            />
                            <ChoiceContainer>
                                {TeamData.map((team) => {
                                    return (
                                        team.english_name !== 'lotte' && (
                                            <Choice
                                                key={uuid()}
                                                src={`src/assets/${team.english_name}.png`}
                                                alt="image"
                                                $isSelected={bracket === team.english_name}
                                                onClick={() => setBracket(team.english_name)}
                                            />
                                        )
                                    );
                                })}
                            </ChoiceContainer>
                            <Button label="다음" handleClick={() => setCreateStep(createStep + 1)} />
                        </>
                    )}

                    {createStep === 2 && (
                        <>
                            <ScoreContainer>
                                <BracketContainer>
                                    <Bracket src="src/assets/hanwha.png" alt="image" onClick={() => setCreateStep(createStep - 1)} />
                                    <InfoContainer>
                                        <Input category="modal_text" value="사직" handleChange={() => {}} />
                                        <Input category="modal_text" value="18:30" handleChange={() => {}} />
                                    </InfoContainer>
                                    <Bracket src="src/assets/lotte.png" alt="image" />
                                </BracketContainer>
                                <ResultContainer>
                                    <Input type="number" category="modal_score" placeholder="0" value={null} handleChange={() => {}} />
                                    <Result>:</Result>
                                    <Input type="number" category="modal_score" placeholder="0" value={null} handleChange={() => {}} />
                                </ResultContainer>
                            </ScoreContainer>
                            <Button label="등록 완료" handleClick={() => {}} />
                        </>
                    )}
                </>
            )}

            {category === 'update' && (
                <>
                    <ScoreContainer>
                        <BracketContainer>
                            <Bracket src="src/assets/hanwha.png" alt="image" />
                            <InfoContainer>
                                <Input category="modal_text" value="사직" handleChange={() => {}} />
                                <Input category="modal_text" value="18:30" handleChange={() => {}} />
                            </InfoContainer>
                            <Bracket src="src/assets/lotte.png" alt="image" />
                        </BracketContainer>
                        <ResultContainer>
                            <Input type="number" category="modal_score" placeholder="0" value={5} handleChange={() => {}} />
                            <Result>:</Result>
                            <Input type="number" category="modal_score" placeholder="0" value={7} handleChange={() => {}} />
                        </ResultContainer>
                    </ScoreContainer>
                    <Button label="수정 완료" handleClick={() => {}} />
                </>
            )}
        </ModalLayout>
    );
}
