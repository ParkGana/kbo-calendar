import styled from 'styled-components';
import { typography } from '../configurations/Typography';
import { color } from '../configurations/Color';
import Input from './common/Input';

const Container = styled.div``;

const TeamContainer = styled.div`
    display: grid;
    grid-template-columns: 140px 80px 140px;
    align-items: center;
    margin-top: 50px;
`;

const Team = styled.img`
    width: 140px;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Info = styled.p`
    ${typography.title3};
    color: ${color.black};
    text-align: center;
`;

const ResultContainer = styled.div`
    display: grid;
    grid-template-columns: 140px 80px 140px;
`;

const Result = styled.p`
    ${typography.headline1};
    color: ${color.black};
    text-align: center;
`;

export default function Bracket({ type }) {
    return (
        <>
            {type === 'read' && (
                <Container>
                    <TeamContainer>
                        <Team src="src/assets/hanwha.png" alt="image" />
                        <InfoContainer>
                            <Info>사직</Info>
                            <Info>18:30</Info>
                        </InfoContainer>
                        <Team src="src/assets/lotte.png" alt="image" />
                    </TeamContainer>
                    <ResultContainer>
                        <Result>5</Result>
                        <Result>:</Result>
                        <Result>7</Result>
                    </ResultContainer>
                </Container>
            )}

            {type === 'write' && (
                <Container>
                    <TeamContainer>
                        <Team src="src/assets/hanwha.png" alt="image" />
                        <InfoContainer>
                            <Input category="info" type="text" value="사직" handleChange={() => {}} />
                            <Input category="info" type="text" value="18:30" handleChange={() => {}} />
                        </InfoContainer>
                        <Team src="src/assets/lotte.png" alt="image" />
                    </TeamContainer>
                    <ResultContainer>
                        <Input category="score" type="number" placeholder="0" value={undefined} handleChange={() => {}} />
                        <Result>:</Result>
                        <Input category="score" type="number" placeholder="0" value={undefined} handleChange={() => {}} />
                    </ResultContainer>
                </Container>
            )}
        </>
    );
}
