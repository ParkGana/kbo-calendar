import styled from 'styled-components';
import { typography } from '../configurations/Typography';
import { color } from '../configurations/Color';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDates, moveMonth } from '../redux-toolkit/slices/scheduleSlice';

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
    const dispatch = useDispatch();

    const { dates } = useSelector((state) => state.schedule);

    useEffect(() => {
        dispatch(fetchDates({ year: dates.year, month: dates.month }));
    }, [dispatch, dates.year, dates.month]);

    /* 이전 달로 이동 */
    const handleMovePrev = () => {
        const year = dates.month === 1 ? dates.year - 1 : dates.year;
        const month = dates.month === 1 ? 12 : dates.month - 1;

        dispatch(moveMonth({ year, month }));
    };

    /* 다음 달로 이동 */
    const handleMoveNext = () => {
        const year = dates.month === 12 ? dates.year + 1 : dates.year;
        const month = dates.month === 12 ? 1 : dates.month + 1;

        dispatch(moveMonth({ year, month }));
    };

    return (
        <Container>
            <HeadContainer>
                <Arrow onClick={handleMovePrev}>◀</Arrow>
                <Month>{dates.month.toString().padStart(2, '0')}월</Month>
                <Arrow onClick={handleMoveNext}>▶</Arrow>
            </HeadContainer>
            <BodyContainer>
                {['월', '화', '수', '목', '금', '토', '일'].map((day) => (
                    <Day key={uuid()} $isSaturday={day === '토'} $isSunday={day === '일'}>
                        {day}
                    </Day>
                ))}
                {dates.days.map((day, index) => (
                    <DateContainer key={uuid()}>
                        <Date $isSaturday={index % 7 === 5} $isSunday={index % 7 === 6}>
                            {day}
                        </Date>
                        {day && <Plus onClick={handleOpenCreate}>+</Plus>}
                        {/* {schedule.korean_name && (
                            <Opponent $backgroundColor={color[schedule.english_name]} onClick={handleOpenRead}>
                                {schedule.korean_name.split(' ')[0]}
                            </Opponent>
                        )} */}
                    </DateContainer>
                ))}
            </BodyContainer>
        </Container>
    );
}
