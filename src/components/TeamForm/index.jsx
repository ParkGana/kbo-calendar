import { HiddenInput, Image, Label, LocationRadio, OpponentRadio, Option } from './style';
import { useAuth } from '../../contexts/AuthContext';
import { useTeams } from '../../hooks/tanstack/useTeams';

export default function TeamForm({ values, handleSelect, handleSelectMultiple }) {
    const { user } = useAuth();
    const { data: teams } = useTeams();

    return (
        <>
            <LocationRadio>
                <Label htmlFor="home">
                    <Option $isSelected={values.location === 'home'}>홈</Option>
                    <HiddenInput type="radio" name="location" id="home" checked={values.location === 'home'} value="home" onChange={() => handleSelect({ name: 'location', selected: 'home' })} />
                </Label>
                <Label htmlFor="away">
                    <Option $isSelected={values.location === 'away'}>원정</Option>
                    <HiddenInput type="radio" name="location" id="away" checked={values.location === 'away'} value="away" onChange={() => handleSelect({ name: 'location', selected: 'away' })} />
                </Label>
            </LocationRadio>

            <OpponentRadio>
                {teams?.map(
                    (team) =>
                        team.id !== user?.team.id && (
                            <Label key={team.id} htmlFor={team.id}>
                                <Image $isSelected={values.opponent?.id === team.id} src={`src/assets/${team.name_english}.png`} alt="image" />
                                <HiddenInput
                                    type="radio"
                                    name="team"
                                    id={team.id}
                                    checked={values.opponent?.id === team.id}
                                    value={team.id}
                                    onChange={() =>
                                        handleSelectMultiple([
                                            { name: 'opponent', selected: team },
                                            { name: 'team_home', selected: values.location === 'home' ? user.team : team },
                                            { name: 'team_away', selected: values.location === 'home' ? team : user.team },
                                            { name: 'stadiums', selected: values.location === 'home' ? user.team.stadium : team.stadium },
                                            { name: 'stadium', selected: values.location === 'home' ? user.team.stadium[0] : team.stadium[0] },
                                        ])
                                    }
                                />
                            </Label>
                        )
                )}
            </OpponentRadio>
        </>
    );
}
