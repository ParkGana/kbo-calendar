import styled from 'styled-components';
import { typography } from '../configurations/Typography';
import { color } from '../configurations/Color';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

const Name = styled.p`
    ${typography.title3};
    color: ${color.black};
`;

const Image = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${color.gray};
    border-radius: 50%;
`;

export default function User() {
    const navigate = useNavigate();

    return (
        <Container onClick={() => navigate('/user')}>
            <Name>박가나</Name>
            <Image />
        </Container>
    );
}
