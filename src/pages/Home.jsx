import styled from 'styled-components';
import { color } from '../configurations/Color';
import { typography } from '../configurations/Typography';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { CalendarData } from '../Data';

const Wrap = styled.div`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: ${color.white};
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    margin: 40px;
    padding: 40px;
`;

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Filter = styled.p`
    ${({ $isSelected }) => `
        ${typography.title3};
        color: ${$isSelected ? color.black : color.gray};
        cursor: pointer;
    `}
`;

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

const Name = styled.p`
    ${typography.title3};
    color: ${color.black};
`;

const Profile = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${color.gray};
    border-radius: 50%;
`;

const CalendarContainer = styled.div`
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

const DateContainer = styled.div`
    height: calc((100vh - 340px) / 6);
    min-height: 60px;
    max-height: 120px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: ${color.white};
    outline: 1px solid ${color.gray};
    padding: 5px 10px;
`;

const Date = styled.p`
    ${({ $isSaturday, $isSunday }) => `
        width: 20px;
        ${typography.body2};
        color: ${$isSaturday ? color.saturday : $isSunday ? color.sunday : color.weekdays};
    `}
`;

const TeamContainer = styled.div`
    width: '100%';
    height: calc(100% - 20px);
    display: flex;
    flex-direction: column;
`;

const Team = styled.p`
    ${({ $bgColor }) => `
        width: 100%;
        background-color: ${$bgColor};
        ${typography.body3};
        color: ${color.white};
        text-align: center;
        padding: 4px 0;
    `}
`;

export default function Home() {
    const navigate = useNavigate();

    return (
        <Wrap>
            <Container>
                <TopContainer>
                    <FilterContainer>
                        <Filter $isSelected>일정</Filter>
                        <Filter onClick={() => navigate('/record')}>시즌 전적</Filter>
                    </FilterContainer>
                    <UserContainer onClick={() => navigate('/user')}>
                        <Name>박가나</Name>
                        <Profile />
                    </UserContainer>
                </TopContainer>
                <CalendarContainer>
                    <HeadContainer>
                        <Arrow>◀</Arrow>
                        <Month>9월</Month>
                        <Arrow>▶</Arrow>
                    </HeadContainer>
                    <BodyContainer>
                        {['월', '화', '수', '목', '금', '토', '일'].map((day) => {
                            return (
                                <Day key={uuid()} $isSaturday={day === '토'} $isSunday={day === '일'}>
                                    {day}
                                </Day>
                            );
                        })}
                        {CalendarData.map((data, index) => {
                            return (
                                <DateContainer key={uuid()}>
                                    <Date $isSaturday={index % 7 === 5} $isSunday={index % 7 === 6}>
                                        {data.date}
                                    </Date>
                                    <TeamContainer>
                                        <Team $bgColor={color[data.english_name]}>{data.korean_name && data.korean_name.split(' ')[0]}</Team>
                                    </TeamContainer>
                                </DateContainer>
                            );
                        })}
                    </BodyContainer>
                </CalendarContainer>
            </Container>
        </Wrap>
    );
}
