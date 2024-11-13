import styled from 'styled-components';
import { color } from '../configurations/Color';
import Horizontal from './alignment/Horizontal';
import Button from './common/Button';
import ModalLayout from './layout/ModalLayout';
import { typography } from '../configurations/Typography';
import Filter from './common/Filter';
import { useState } from 'react';
import Bracket from './Bracket';
import OpponentTeam from './OpponentTeam';

const Description = styled.p`
    ${typography.title3};
    color: ${color.black};
    text-align: center;
    margin-top: 60px;
`;

export default function Modal({ category, isOpen, handleClose, handleUpdate }) {
    const [location, setLocation] = useState('');
    const [createStep, setCreateStep] = useState(1);

    return (
        <ModalLayout gap={category === 'read' ? 40 : 20} isOpen={isOpen}>
            <Button category="close" labelColor={color.gray} label="✖" handleClick={handleClose} />

            {category === 'read' && (
                <>
                    <Bracket type="read" />
                    <Horizontal gap={20}>
                        <Button category="basic" labelColor={color.white} backgroundColor={color.black} label="수정" handleClick={handleUpdate} />
                        <Button category="basic" labelColor={color.white} backgroundColor={color.red} label="삭제" handleClick={() => {}} />
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
                            <OpponentTeam />
                            <Button category="basic" labelColor={color.white} backgroundColor={color.black} label="다음" handleClick={() => setCreateStep(createStep + 1)} />
                        </>
                    )}

                    {createStep === 2 && (
                        <>
                            <Bracket type="write" />
                            <Button category="basic" labelColor={color.white} backgroundColor={color.black} label="등록 완료" handleClick={() => {}} />
                        </>
                    )}
                </>
            )}

            {category === 'update' && (
                <>
                    <Bracket type="write" />
                    <Button category="basic" labelColor={color.white} backgroundColor={color.black} label="수정 완료" handleClick={() => {}} />
                </>
            )}
        </ModalLayout>
    );
}
