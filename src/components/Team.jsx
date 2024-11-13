import styled from 'styled-components';
import { TeamData } from '../Data';
import { v4 as uuid } from 'uuid';

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

export default function Team() {
    return (
        <Container>
            {TeamData.map((team) => {
                return <Image key={uuid()} src={`src/assets/${team.english_name}.png`} alt="image" $isMy={team.english_name === 'lotte'} />;
            })}
        </Container>
    );
}
