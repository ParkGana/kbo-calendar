import useScheduleStore from '../../zustand/scheduleStore';
import { Info, InfoContainer, ScoreContainer, Score, Team, TeamContainer, Container } from './style';

export default function Result() {
    const schedule = useScheduleStore((state) => state.schedule);

    return (
        <Container>
            <TeamContainer>
                <Team src={`src/assets/${schedule.team_away?.name_english}.png`} alt="image" />
                <InfoContainer>
                    <Info>{schedule.stadium?.name}</Info>
                    <Info>{schedule.time}</Info>
                </InfoContainer>
                <Team src={`src/assets/${schedule.team_home?.name_english}.png`} alt="image" />
            </TeamContainer>
            <ScoreContainer>
                <Score>{schedule.score_away}</Score>
                <Score>:</Score>
                <Score>{schedule.score_home}</Score>
            </ScoreContainer>
        </Container>
    );
}
