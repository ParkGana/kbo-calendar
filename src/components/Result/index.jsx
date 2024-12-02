import { Info, InfoContainer, ScoreContainer, Score, Team, TeamContainer, Container } from './style';

export default function Result({ data }) {
    return (
        <Container>
            <TeamContainer>
                <Team src={`src/assets/${data.team_away.name_english}.png`} alt="image" />
                <InfoContainer>
                    <Info>{data.stadium.name}</Info>
                    <Info>{data.time}</Info>
                </InfoContainer>
                <Team src={`src/assets/${data.team_home.name_english}.png`} alt="image" />
            </TeamContainer>
            <ScoreContainer>
                <Score>{data.score_away}</Score>
                <Score>:</Score>
                <Score>{data.score_home}</Score>
            </ScoreContainer>
        </Container>
    );
}
