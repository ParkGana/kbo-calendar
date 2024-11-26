import styled from 'styled-components';
import { typography } from '../configurations/Typography';
import { color } from '../configurations/Color';
import { v4 as uuid } from 'uuid';
import { useEffect, useState } from 'react';
import { fetchCalendar } from '../utils/fetchData';
import { useAuth } from '../contexts/AuthContext';
import { fetchSchedulesAPI } from '../api/Schedule';

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

const today = new window.Date();

export default function Calendar({ handleOpenRead, handleOpenCreate }) {
    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth() + 1);
    const [calendarData, setCalendarData] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        const fetchCalendarData = async () => {
            const schedules = await fetchSchedulesAPI({ user, year, month });
            const dates = await fetchCalendar({ user, year, month, schedules });

            setCalendarData(dates);
        };

        fetchCalendarData();
    }, [user, year, month]);

    /* 이전 달로 이동 */
    const handleMovePrev = () => {
        setYear(month === 1 ? year - 1 : year);
        setMonth(month === 1 ? 12 : month - 1);
    };

    /* 다음 달로 이동 */
    const handleMoveNext = () => {
        setYear(month === 12 ? year + 1 : year);
        setMonth(month === 12 ? 1 : month + 1);
    };

    return (
        <Container>
            <HeadContainer>
                <Arrow onClick={handleMovePrev}>◀</Arrow>
                <Month>{month.toString().padStart(2, '0')}월</Month>
                <Arrow onClick={handleMoveNext}>▶</Arrow>
            </HeadContainer>
            <BodyContainer>
                {['월', '화', '수', '목', '금', '토', '일'].map((day) => (
                    <Day key={uuid()} $isSaturday={day === '토'} $isSunday={day === '일'}>
                        {day}
                    </Day>
                ))}
                {calendarData.map(({ day, opponent }, index) => (
                    <DateContainer key={uuid()}>
                        <Date $isSaturday={index % 7 === 5} $isSunday={index % 7 === 6}>
                            {day}
                        </Date>
                        {day && <Plus onClick={handleOpenCreate}>+</Plus>}
                        {opponent && (
                            <Opponent $backgroundColor={color[opponent.name_english]} onClick={handleOpenRead}>
                                {opponent.name_korean.split(' ')[0]}
                            </Opponent>
                        )}
                    </DateContainer>
                ))}
            </BodyContainer>
        </Container>
    );
}
