import { Info, InfoContainer, ScoreContainer, Score, Team, TeamContainer, Container } from './style';

export default function Result() {
    return (
        <Container>
            <TeamContainer>
                <Team src="src/assets/hanwha.png" alt="image" />
                <InfoContainer>
                    <Info>사직</Info>
                    <Info>18:30</Info>
                </InfoContainer>
                <Team src="src/assets/lotte.png" alt="image" />
            </TeamContainer>
            <ScoreContainer>
                <Score>5</Score>
                <Score>:</Score>
                <Score>7</Score>
            </ScoreContainer>
        </Container>
    );
}
