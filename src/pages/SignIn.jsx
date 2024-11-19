import styled from 'styled-components';
import { color } from '../configurations/Color';
import { typography } from '../configurations/Typography';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import ContentLayout from '../components/layout/ContentLayout';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { useState } from 'react';
import { validateSignIn } from '../utils/validateData';
import { login } from '../services/supabase';
import { fireSuccessSwal } from '../utils/fireSwal';

const Title = styled.p`
    ${typography.headline1};
    color: ${color.black};
    text-align: center;
    margin-bottom: 30px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export default function SignIn() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: '', password: '' });

    /* 입력 값 변경 이벤트 */
    const handleChangeInput = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => {
            return { ...prev, [name]: value };
        });
    };

    /* 회원가입 */
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = formData;

        validateSignIn({
            data: formData,
            afterValidate: async () => {
                await login({ email, password });

                fireSuccessSwal({ text: '로그인을 성공하였습니다.', afterConfirm: () => navigate('/') });
            }
        });
    };

    return (
        <PageLayout category="auth">
            <ContentLayout category="auth">
                <Title>KBO Calendar</Title>
                <Form onSubmit={handleSubmit}>
                    <Input category="auth" type="text" name="email" placeholder="이메일을 입력해 주세요." value={formData.email} handleChange={handleChangeInput} />
                    <Input category="auth" type="password" name="password" placeholder="비밀번호를 입력해 주세요." value={formData.password} handleChange={handleChangeInput} />
                    <Button category="form" labelColor={color.white} backgroundColor={color.black} label="로그인" />
                </Form>
                <Button category="sub" labelColor={color.gray} label="회원가입" handleClick={() => navigate('/signup')} />
            </ContentLayout>
        </PageLayout>
    );
}
