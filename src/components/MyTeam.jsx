import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { useAuth } from '../contexts/AuthContext';
import { useLoaderData } from 'react-router-dom';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    gap: 20px 10px;
`;

const Image = styled.img`
    ${({ $isMy }) => `
        width: 60px;
        ${!$isMy && `opacity: 0.2;`};
        cursor: pointer;
    `}
`;

export default function MyTeam() {
    const { user } = useAuth();
    const { teams } = useLoaderData();

    return <Container>{user && teams.map((team) => <Image key={uuid()} src={`src/assets/${team.name_english}.png`} alt="image" $isMy={team.id === user.teams.id} />)}</Container>;
}
