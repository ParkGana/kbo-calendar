import styled from 'styled-components';
import { typography } from '../configurations/Typography';
import { color } from '../configurations/Color';
import { ScheduleData } from '../Data';
import { v4 as uuid } from 'uuid';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const HeadContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Arrow = styled.p`
    ${typography.title3};
    color: ${color.black};
    cursor: pointer;
`;

const Month = styled.p`
    ${typography.headline1};
    color: ${color.black};
`;

const BodyContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, minmax(calc(100% / 7), 160px));
`;

const Day = styled.div`
    ${({ $isSaturday, $isSunday }) => `
        background-color: ${color.white};
        outline: 1px solid ${color.gray};
        ${typography.title3};
        color: ${$isSaturday ? color.saturday : $isSunday ? color.sunday : color.weekdays};
        text-align: center;
        padding: 10px;
    `}
`;

const Plus = styled.p`
    position: absolute;
    top: 0;
    right: 5px;
    display: none;
    ${typography.body1};
    color: ${color.gray};
    cursor: pointer;

    &:hover {
        ${typography.title3};
    }
`;

const DateContainer = styled.div`
    height: calc((100vh - 330px) / 6);
    min-height: 60px;
    max-height: 120px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: ${color.white};
    outline: 1px solid ${color.gray};
    padding: 5px 10px;

    &:hover ${Plus} {
        display: block;
    }
`;

const Date = styled.p`
    ${({ $isSaturday, $isSunday }) => `
        width: 20px;
        ${typography.body2};
        color: ${$isSaturday ? color.saturday : $isSunday ? color.sunday : color.weekdays};
    `}
`;

const Opponent = styled.p`
    ${({ $backgroundColor }) => `
        width: 100%;
        background-color: ${$backgroundColor};
        ${typography.body3};
        color: ${color.white};
        text-align: center;
        padding: 4px 0;
        cursor: pointer;
    `}
`;

export default function Calendar({ handleOpenRead, handleOpenCreate }) {
    return (
        <Container>
            <HeadContainer>
                <Arrow>◀</Arrow>
                <Month>9월</Month>
                <Arrow>▶</Arrow>
            </HeadContainer>
            <BodyContainer>
                {['월', '화', '수', '목', '금', '토', '일'].map((day) => (
                    <Day key={uuid()} $isSaturday={day === '토'} $isSunday={day === '일'}>
                        {day}
                    </Day>
                ))}
                {ScheduleData.map((schedule, index) => (
                    <DateContainer key={uuid()}>
                        <Date $isSaturday={index % 7 === 5} $isSunday={index % 7 === 6}>
                            {schedule.date}
                        </Date>
                        {schedule.date && <Plus onClick={handleOpenCreate}>+</Plus>}
                        {schedule.korean_name && (
                            <Opponent $backgroundColor={color[schedule.english_name]} onClick={handleOpenRead}>
                                {schedule.korean_name.split(' ')[0]}
                            </Opponent>
                        )}
                    </DateContainer>
                ))}
            </BodyContainer>
        </Container>
    );
}
