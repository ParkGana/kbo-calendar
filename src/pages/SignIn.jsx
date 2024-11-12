import styled from 'styled-components';
import { color } from '../configurations/Color';
import { typography } from '../configurations/Typography';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import ContentLayout from '../components/layout/ContentLayout';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import Vertical from '../components/alignment/Vertical';

const Title = styled.p`
    ${typography.headline1};
    color: ${color.black};
    text-align: center;
    margin-bottom: 30px;
`;

export default function SignIn() {
    const navigate = useNavigate();

    return (
        <PageLayout category="auth">
            <ContentLayout category="auth">
                <Title>KBO Calendar</Title>
                <Vertical gap={20}>
                    <Input placeholder="아이디를 입력해 주세요." value={null} handleChange={() => {}} />
                    <Input type="password" placeholder="비밀번호를 입력해 주세요." value={null} handleChange={() => {}} />
                    <Button label="로그인" handleClick={() => navigate('/')} />
                </Vertical>
                <Button category="sub" labelColor={color.gray} label="회원가입" handleClick={() => navigate('/signup')} />
            </ContentLayout>
        </PageLayout>
    );
}
