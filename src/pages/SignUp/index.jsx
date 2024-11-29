import { useNavigate } from 'react-router-dom';
import { createAuthUserAPI, createUserAPI } from '../../api/Auth';
import { fireSuccessSwal } from '../../utils/fireSwal';
import { validateSignUp } from '../../utils/validateData';
import { Container, Title, Wrap } from './style';
import AuthForm from '../../components/AuthForm';
import { useForm } from '../../hooks/useForm';
import Button from '../../components/Button';

export default function SignUp() {
    const navigate = useNavigate();

    const { values, handleChange, handleSelect } = useForm({
        email: '',
        password: '',
        passwordConfirm: '',
        name: '',
        team: {}
    });

    /* 회원가입 */
    const handleSignUp = async (e) => {
        e.preventDefault();

        const { email, password, name, team } = values;

        validateSignUp({
            data: values,
            afterValidate: async () => {
                const authUser = await createAuthUserAPI({ email, password });
                await createUserAPI({ auth: authUser, name, team });
                fireSuccessSwal({ text: '회원가입을 성공하였습니다.', afterConfirm: () => navigate('/signin') });
            }
        });
    };

    return (
        <Wrap>
            <Container>
                <Title>KBO Calendar</Title>
                <AuthForm category="signup" label="회원가입" data={values} handleChange={handleChange} handleSelect={handleSelect} handleSubmit={handleSignUp} />
                <Button category="sub" label="로그인" handleClick={() => navigate('/signin')} />
            </Container>
        </Wrap>
    );
}
