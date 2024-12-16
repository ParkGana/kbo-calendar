import { HiddenInput, Image, Label, LocationRadio, OpponentRadio, Option } from './style';
import { useAuth } from '../../contexts/AuthContext';
import { useTeams } from '../../hooks/tanstack/useTeams';
import { fireWarningSwal } from '../../utils/fireSwal';

export default function TeamForm({ values, handleSelectMultiple }) {
    const { user } = useAuth();
    const { data: teams } = useTeams();

    /* 경기 장소 선택 */
    const handleSelectLocation = (location) => {
        handleSelectMultiple([
            { name: 'location', selected: location },
            { name: 'opponent', selected: null },
            { name: 'team_home', selected: null },
            { name: 'team_away', selected: null },
            { name: 'stadiums', selected: [] },
            { name: 'stadium', selected: null }
        ]);
    };

    /* 상대 팀 선택 */
    const handleSelectOpponent = (team) => {
        if (!values.location) {
            fireWarningSwal('경기 장소를 선택해 주세요.');
        } else {
            handleSelectMultiple([
                { name: 'opponent', selected: team },
                { name: 'team_home', selected: values.location === 'home' ? user.team : team },
                { name: 'team_away', selected: values.location === 'home' ? team : user.team },
                { name: 'stadiums', selected: values.location === 'home' ? user.team.stadium : team.stadium },
                { name: 'stadium', selected: values.location === 'home' ? user.team.stadium[0] : team.stadium[0] }
            ]);
        }
    };

    return (
        <>
            <LocationRadio>
                <Label htmlFor="home">
                    <Option $isSelected={values.location === 'home'}>홈</Option>
                    <HiddenInput type="radio" name="location" id="home" checked={values.location === 'home'} value="home" onChange={() => handleSelectLocation('home')} />
                </Label>
                <Label htmlFor="away">
                    <Option $isSelected={values.location === 'away'}>원정</Option>
                    <HiddenInput type="radio" name="location" id="away" checked={values.location === 'away'} value="away" onChange={() => handleSelectLocation('away')} />
                </Label>
            </LocationRadio>

            <OpponentRadio>
                {teams?.map(
                    (team) =>
                        team.id !== user?.team.id && (
                            <Label key={team.id} htmlFor={team.id}>
                                <Image $isSelected={values.opponent?.id === team.id} src={`/${team.name_english}.png`} alt="image" />
                                <HiddenInput type="radio" name="team" id={team.id} checked={values.opponent?.id === team.id} value={team.id} onChange={() => handleSelectOpponent(team)} />
                            </Label>
                        )
                )}
            </OpponentRadio>
        </>
    );
}
