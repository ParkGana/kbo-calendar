import {
    HiddenInput,
    Info,
    InfoContainer,
    Input,
    Label,
    Option,
    Radio,
    Result,
    ResultContainer,
    Team,
    TeamContainer
} from './style';

export default function ResultForm({ values, handleChange, handleSelect }) {
    return (
        <>
            <TeamContainer>
                <Team src={`/${values?.team_away?.name_english}.png`} alt="image" />
                <InfoContainer>
                    {values?.stadiums?.length > 1 ? (
                        <Radio>
                            {values?.stadiums?.map((stadium) => (
                                <Label key={stadium.id} htmlFor={stadium.id}>
                                    <Option $isSelected={values?.stadium?.id === stadium.id}>{stadium.name}</Option>
                                    <HiddenInput
                                        type="radio"
                                        name="stadium"
                                        id={stadium.id}
                                        checked={values?.stadium?.id === stadium.id}
                                        value="stadium"
                                        onChange={() => handleSelect({ name: 'stadium', selected: stadium })}
                                    />
                                </Label>
                            ))}
                        </Radio>
                    ) : (
                        <Info>{values?.stadium?.name}</Info>
                    )}

                    <Input
                        $category="time"
                        type="text"
                        name="time"
                        autoComplete="off"
                        value={values?.time}
                        onChange={handleChange}
                    />
                </InfoContainer>
                <Team src={`/${values?.team_home?.name_english}.png`} alt="image" />
            </TeamContainer>
            <ResultContainer>
                <Input
                    $category="score"
                    type="number"
                    name="score_away"
                    autoComplete="off"
                    value={values?.score_away}
                    onChange={handleChange}
                />
                <Result>:</Result>
                <Input
                    $category="score"
                    type="number"
                    name="score_home"
                    autoComplete="off"
                    value={values?.score_home}
                    onChange={handleChange}
                />
            </ResultContainer>
        </>
    );
}
