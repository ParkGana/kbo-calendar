import styled from 'styled-components';
import { color } from '../configurations/Color';
import { typography } from '../configurations/Typography';
import { useLoaderData, useNavigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import ContentLayout from '../components/layout/ContentLayout';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import SelectBox from '../components/common/SelectBox';
import { useState } from 'react';
import { createAuthUser, createUser } from '../api/Auth';
import { fireSuccessSwal } from '../utils/fireSwal';
import { validateSignUp } from '../utils/validateData';

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

export default function SignUp() {
    const navigate = useNavigate();

    const { teams } = useLoaderData();

    const [isOpenSelectBox, setIsOpenSelectBox] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '', passwordConfirm: '', name: '', team: null });

    /* 입력 값 변경 이벤트 */
    const handleChangeInput = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => {
            return { ...prev, [name]: value };
        });
    };

    /* select box 선택 값 변경 이벤트 */
    const handleChangeSelect = (value) => {
        setFormData((prev) => {
            return { ...prev, ['team']: value };
        });
    };

    /* 회원가입 */
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password, name, team } = formData;

        validateSignUp({
            data: formData,
            afterValidate: async () => {
                const authUser = await createAuthUser({ email, password });

                await createUser({ auth: authUser, name, teamId: team.id });

                fireSuccessSwal({ text: '회원가입을 성공하였습니다.', afterConfirm: () => navigate('/signin') });
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
                    <Input category="auth" type="password" name="passwordConfirm" placeholder="비밀번호를 한 번 더 입력해 주세요." value={formData.passwordConfirm} handleChange={handleChangeInput} />
                    <Input category="auth" type="text" name="name" placeholder="이름를 입력해 주세요." value={formData.name} handleChange={handleChangeInput} />
                    <SelectBox
                        placeholder={'응원하는 구단을 선택해 주세요.'}
                        selected={formData.team?.value}
                        options={teams}
                        isOpen={isOpenSelectBox}
                        handleToggle={() => setIsOpenSelectBox(!isOpenSelectBox)}
                        handleSelect={handleChangeSelect}
                    />
                    <Button category="form" labelColor={color.white} backgroundColor={color.black} label="회원가입" />
                </Form>
                <Button category="sub" labelColor={color.gray} label="로그인" handleClick={() => navigate('/signin')} />
            </ContentLayout>
        </PageLayout>
    );
}
