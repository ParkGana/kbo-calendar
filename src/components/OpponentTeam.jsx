import styled from 'styled-components';
import { color } from '../configurations/Color';
import { v4 as uuid } from 'uuid';
import { TeamData } from '../Data';
import { useState } from 'react';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
`;

const Team = styled.img`
    ${({ $isSelected }) => `
        width: 100px;
        cursor: pointer;

        ${
            $isSelected &&
            `
                background-color: ${color.gray};
                border-radius: 4px;
            `
        };
    `}
`;

export default function OpponentTeam() {
    const [opponent, setOpponent] = useState();

    return (
        <Container>
            {TeamData.map(
                (team) =>
                    team.english_name !== 'lotte' && (
                        <Team key={uuid()} src={`src/assets/${team.english_name}.png`} alt="image" $isSelected={opponent === team.english_name} onClick={() => setOpponent(team.english_name)} />
                    )
            )}
        </Container>
    );
}
