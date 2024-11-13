import styled from 'styled-components';
import { typography } from '../configurations/Typography';
import { color } from '../configurations/Color';
import { RecordData } from '../Data';
import { v4 as uuid } from 'uuid';

const Container = styled.div`
    outline: 1px solid ${color.gray};
    padding: 10px;
`;

const TeamContainer = styled.div`
    width: calc(100vw - 180px);
    max-width: 1100px;
    height: calc((100vh - 250px) / 9);
    min-height: 40px;
    max-height: 60px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-right: 10px;
`;

const Team = styled.img`
    height: calc((100vh - 250px) / 9);
    min-height: 40px;
    max-height: 60px;
`;

const PercentContainer = styled.div`
    width: 100%;
    height: calc(100% - 20px);
    display: flex;
`;

const Percent = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;

    ${({ $count }) => `
        &:first-child {
            width: ${($count / 16) * 100}%;
            background-color: ${color.win};
            text-align: left;
            padding-left: 10px;
        }

        &:nth-child(2) {
            width: ${($count / 16) * 100}%;
            background-color: ${color.draw};
            text-align: center;
        }
                    
        &:last-child {
            width: ${($count / 16) * 100}%;
            background-color: ${color.lose};
            text-align: right;
            padding-right: 10px;
        }
    `}
`;

const Result = styled.p`
    width: 100%;
    ${typography.body2};
    color: ${color.black};
`;

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
