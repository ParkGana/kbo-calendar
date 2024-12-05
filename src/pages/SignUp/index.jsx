import { useNavigate } from 'react-router-dom';
import { createAuthUserAPI, createUserAPI } from '../../api/Auth';
import { fireErrorSwal, fireSuccessSwal } from '../../utils/fireSwal';
import { validateSignUp } from '../../utils/validateData';
import { Container, Title, Wrap } from './style';
import AuthForm from '../../components/AuthForm';
import { useForm } from '../../hooks/custom/useForm';
import Button from '../../components/Button';
import { manageSignUpError } from '../../utils/manageError';

export default function SignUp() {
    const navigate = useNavigate();

    const { values, handleChange, handleSelect } = useForm({
        email: '',
        password: '',
        passwordConfirm: '',
        name: '',
        team: null
    });

    /* 회원가입 */
    const handleSignUp = async (e) => {
        e.preventDefault();

        const { email, password, name, team } = values;

        validateSignUp({
            data: values,
            afterValidate: async () => {
                const { user: authUser, error: authError } = await createAuthUserAPI({ email, password });

                // auth user 데이터 생성 오류
                if (authError) {
                    fireErrorSwal(manageSignUpError(authError.message));
                } else {
                    const { error: signupError } = await createUserAPI({ auth: authUser, name, team });

                    // user 데이터 생성 오류
                    if (signupError) {
                        fireErrorSwal('회원가입에 실패하였습니다.');
                    } else {
                        fireSuccessSwal({ text: '회원가입에 성공하였습니다.', afterConfirm: () => navigate('/signin') });
                    }
                }
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
