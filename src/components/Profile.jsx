import styled from 'styled-components';
import { color } from '../configurations/Color';
import { typography } from '../configurations/Typography';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const Image = styled.div`
    width: 200px;
    height: 200px;
    background-color: ${color.gray};
    border-radius: 50%;
`;

const Description = styled.p`
    ${typography.body1};
    color: ${color.black}l;
    margin-top: 20px;
`;

const Name = styled.p`
    ${typography.title1};
    color: ${color.black};
`;

export default function Profile() {
    return (
        <Container>
            <Image />
            <Description>롯데 자이언츠의 승리 요정</Description>
            <Name>박가나</Name>
        </Container>
    );
}
