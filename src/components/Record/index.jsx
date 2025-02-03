import { v4 as uuid } from 'uuid';
import {
    Arrow,
    BodyContainer,
    Container,
    HeadContainer,
    Percent,
    PercentContainer,
    Result,
    Team,
    TeamContainer,
    Total,
    Year,
    YearContainer
} from './style';
import { useRecords } from '../../hooks/tanstack/useRecords';
import useCalendarStore from '../../zustand/calendarStore';

export default function Record() {
    const calendar = useCalendarStore((state) => state.calendar);

    const { data: records, moveToPrevMutation, moveToNextMutation } = useRecords();

    return (
        <Container>
            <HeadContainer>
                <YearContainer>
                    <Arrow onClick={moveToPrevMutation.mutate}>◀</Arrow>
                    <Year>{calendar.year}년</Year>
                    <Arrow onClick={moveToNextMutation.mutate}>▶</Arrow>
                </YearContainer>
                <Total>
                    {records?.win + records?.draw + records?.lose}전 {records?.win}승 {records?.draw}무 {records?.lose}
                    패
                </Total>
            </HeadContainer>
            <BodyContainer>
                {records?.details.map((record) => (
                    <TeamContainer key={uuid()}>
                        <Team src={`/${record.team.name_english}.png`} alt="image" />
                        <PercentContainer>
                            <Percent $total={record.win + record.draw + record.lose} $count={record.win}>
                                {record.win > 0 && <Result>{record.win}승</Result>}
                            </Percent>
                            <Percent $total={record.win + record.draw + record.lose} $count={record.draw}>
                            </Percent>
                            <Percent $total={record.win + record.draw + record.lose} $count={record.lose}>
                                {record.lose > 0 && <Result>{record.lose}패</Result>}
                            </Percent>
                        </PercentContainer>
                    </TeamContainer>
                ))}
            </BodyContainer>
        </Container>
    );
}
