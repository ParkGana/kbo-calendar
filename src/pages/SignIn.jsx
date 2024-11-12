import styled from 'styled-components';
import { color } from '../configurations/Color';
import { typography } from '../configurations/Typography';
import { useNavigate } from 'react-router-dom';

const Wrap = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 80vw;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: ${color.white};
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    padding: 50px;
`;

const Title = styled.p`
    ${typography.headline1};
    color: ${color.black};
    text-align: center;
    margin-bottom: 30px;
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Input = styled.input`
    width: 100%;
    border: 1px solid ${color.black};
    ${typography.body1};
    color: ${color.black};
    padding: 10px;

    &::placeholder {
        color: ${color.gray};
    }

    &:focus {
        outline: none;
    }
`;

const Button = styled.button`
    width: 100%;
    background-color: ${color.black};
    border-radius: 4px;
    ${typography.title3};
    color: ${color.white};
    padding: 10px;
    cursor: pointer;
`;

const SubButton = styled.p`
    ${typography.body2};
    color: ${color.gray};
    text-decoration: underline;
    text-align: center;
    cursor: pointer;
`;

export default function SignIn() {
    const navigate = useNavigate();

    return (
        <Wrap>
            <Container>
                <Title>KBO Calendar</Title>
                <FormContainer>
                    <Input type="text" placeholder="아이디를 입력해 주세요." />
                    <Input type="password" placeholder="비밀번호를 입력해 주세요." />
                    <Button type="button" onClick={() => navigate('/')}>
                        로그인
                    </Button>
                </FormContainer>
                <SubButton type="button" onClick={() => navigate('/signup')}>
                    회원가입
                </SubButton>
            </Container>
        </Wrap>
    );
}
