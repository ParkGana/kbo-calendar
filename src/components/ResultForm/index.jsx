import { Info, InfoContainer, Input, Result, ResultContainer, Team, TeamContainer } from './style';

export default function ResultForm({ values, handleChange }) {
    return (
        <>
            <TeamContainer>
                <Team src={`src/assets/${values?.team_away?.name_english}.png`} alt="image" />
                <InfoContainer>
                    <Info>{values?.stadium?.name}</Info>
                    <Input $category="time" type="text" name="time" autoComplete="off" value={values?.time} onChange={handleChange} />
                </InfoContainer>
                <Team src={`src/assets/${values?.team_home?.name_english}.png`} alt="image" />
            </TeamContainer>
            <ResultContainer>
                <Input $category="score" type="number" name="score_away" autoComplete="off" value={values?.score_away} onChange={handleChange} />
                <Result>:</Result>
                <Input $category="score" type="number" name="score_home" autoComplete="off" value={values?.score_home} onChange={handleChange} />
            </ResultContainer>
        </>
    );
}
