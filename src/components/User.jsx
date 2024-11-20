import styled from 'styled-components';
import { typography } from '../configurations/Typography';
import { color } from '../configurations/Color';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Container = styled.div`
    ${({ $category }) => `
        display: flex;
        align-items: center;
        gap: 10px;

        ${$category === 'simple' && `cursor: pointer;`};

        ${$category === 'detail' && `flex-direction: column;`};
    `}
`;

const Name = styled.p`
    ${({ $category }) => `
        color: ${color.black};

        ${$category === 'simple' && `${typography.title3};`};

        ${$category === 'detail' && `${typography.title1}`};
    `}
`;

const Description = styled.p`
    ${typography.body1};
    color: ${color.black}l;
    margin-top: 20px;
`;

const Image = styled.div`
    ${({ $category }) => `
        background-color: ${color.gray};
        border-radius: 50%;

        ${
            $category === 'simple' &&
            `
                width: 50px;
                height: 50px;
            `
        };

        ${
            $category === 'detail' &&
            `
                width: 200px;
                height: 200px;
            `
        };
    `}
`;

export default function User({ category }) {
    const navigate = useNavigate();

    const { user } = useAuth();

    return (
        <>
            {user && (
                <>
                    {category === 'simple' && (
                        <Container $category={category} onClick={() => navigate('/profile')}>
                            <Name $category={category}>{user.name}</Name>
                            <Image $category={category} />
                        </Container>
                    )}

                    {category === 'detail' && (
                        <Container $category={category}>
                            <Image $category={category} />
                            <Description>{user.teams.name_korean}의 승리 요정</Description>
                            <Name $category={category}>{user.name}</Name>
                        </Container>
                    )}
                </>
            )}
        </>
    );
}
