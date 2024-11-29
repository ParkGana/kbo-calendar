import { useState } from 'react';
import { Filter, Image, Opponent, Option } from './style';
import { useLoaderData } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function TeamForm() {
    const { user } = useAuth();
    const { teams } = useLoaderData();

    const [location, setLocation] = useState('');
    const [opponent, setOpponent] = useState();

    return (
        <>
            <Filter>
                <Option $isSelected={location === '홈'} onClick={() => setLocation('홈')}>
                    홈
                </Option>
                <Option $isSelected={location === '원정'} onClick={() => setLocation('원정')}>
                    원정
                </Option>
            </Filter>
            <Opponent>
                {teams.map(
                    (team) =>
                        team.id !== user?.team.id && (
                            <Image key={team.id} src={`src/assets/${team.name_english}.png`} alt="image" $isSelected={opponent === team.id} onClick={() => setOpponent(team.id)} />
                        )
                )}
            </Opponent>
        </>
    );
}
