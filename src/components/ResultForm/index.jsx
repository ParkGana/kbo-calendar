import Button from '../Button';
import { Form, Info, InfoContainer, Input, Result, ResultContainer, Team, TeamContainer } from './style';

export default function ResultForm({ label, handleChange, handleSubmit }) {
    return (
        <Form onSubmit={handleSubmit}>
            <TeamContainer>
                <Team src="src/assets/hanwha.png" alt="image" />
                <InfoContainer>
                    <Info>사직</Info>
                    <Input $category="time" type="text" name="time" autoComplete="off" value="18:30" onChange={handleChange} />
                </InfoContainer>
                <Team src="src/assets/lotte.png" alt="image" />
            </TeamContainer>
            <ResultContainer>
                <Input $category="score" type="number" name="score_away" autoComplete="off" value="5" onChange={handleChange} />
                <Result>:</Result>
                <Input $category="score" type="number" name="score_home" autoComplete="off" value="7" onChange={handleChange} />
            </ResultContainer>
            <Button category="form" label={label} />
        </Form>
    );
}
