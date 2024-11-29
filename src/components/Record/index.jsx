import { RecordData } from '../../Data';
import { v4 as uuid } from 'uuid';
import { Container, Percent, PercentContainer, Result, Team, TeamContainer } from './style';

export default function Record() {
    return (
        <Container>
            {RecordData.sort((a, b) => b.draw - a.draw)
                .sort((a, b) => b.win - a.win)
                .map((record) => (
                    <TeamContainer key={uuid()}>
                        <Team src={`src/assets/${record.english_name}.png`} alt="image" />
                        <PercentContainer>
                            <Percent $count={record.win}>
                                <Result>{record.win}승</Result>
                            </Percent>
                            <Percent $count={record.draw}></Percent>
                            <Percent $count={record.lose}>
                                <Result>{record.lose}패</Result>
                            </Percent>
                        </PercentContainer>
                    </TeamContainer>
                ))}
        </Container>
    );
}
