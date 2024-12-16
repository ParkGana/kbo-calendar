import { Form, HiddenInput, Image, Input, Label, Radio } from './style';
import Button from '../Button';
import { useTeams } from '../../hooks/tanstack/useTeams';

export default function AuthForm({ category, label, data, handleChange, handleSelect, handleSubmit }) {
    const { data: teams } = useTeams();

    return (
        <Form onSubmit={handleSubmit}>
            <Input type="text" name="email" placeholder="이메일을 입력해 주세요." autoComplete="off" value={data.email} onChange={handleChange} />
            <Input type="password" name="password" placeholder="비밀번호를 입력해 주세요." autoComplete="off" value={data.password} onChange={handleChange} />
            {category === 'signup' && (
                <>
                    <Input type="password" name="passwordConfirm" placeholder="비밀번호를 한 번 더 입력해 주세요." autoComplete="off" value={data.passwordConfirm} onChange={handleChange} />
                    <Input type="text" name="name" placeholder="이름을 입력해 주세요." autoComplete="off" value={data.name} onChange={handleChange} />
                    <Radio>
                        {teams?.map((team) => (
                            <Label key={team.id} htmlFor={team.id}>
                                <Image $isSelected={data.team?.id === team.id} src={`/${team.name_english}.png`} alt="image" />
                                <HiddenInput
                                    type="radio"
                                    name="team"
                                    id={team.id}
                                    checked={data.team?.id === team.id}
                                    value={team.id}
                                    onChange={() => handleSelect({ name: 'team', selected: team })}
                                />
                            </Label>
                        ))}
                    </Radio>
                </>
            )}
            <Button category="form" label={label} />
        </Form>
    );
}
