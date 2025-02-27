import { useNavigate } from 'react-router-dom';
import { validateSignIn } from '../../utils/validateData';
import { fireSuccessSwal } from '../../utils/fireSwal';
import { useAuth } from '../../contexts/AuthContext';
import { Container, Title, Wrap } from './style';
import { useForm } from '../../hooks/custom/useForm';
import AuthForm from '../../components/AuthForm';
import Button from '../../components/Button';

export default function SignIn() {
    const navigate = useNavigate();

    const { login } = useAuth();

    const { values, handleChange } = useForm({
        email: '',
        password: ''
    });

    /* 로그인 */
    const handleSignIn = async (e) => {
        e.preventDefault();

        const { email, password } = values;

        validateSignIn({
            data: values,
            afterValidate: async () => {
                const { error } = await login({ email, password });

                if (!error) {
                    fireSuccessSwal({ text: '로그인에 성공하였습니다.', afterConfirm: () => navigate('/') });
                }
            }
        });
    };

    /* 게스트 계정으로 로그인 */
    const handleSignInGuest = async () => {
        const { error } = await login({
            email: import.meta.env.VITE_GUEST_EMAIL,
            password: import.meta.env.VITE_GUEST_PASSWORD
        });

        if (!error) {
            fireSuccessSwal({ text: '로그인에 성공하였습니다.', afterConfirm: () => navigate('/') });
        }
    };

    return (
        <Wrap>
            <Container>
                <Title>KBO Calendar</Title>
                <AuthForm
                    category="signin"
                    label="로그인"
                    data={values}
                    handleChange={handleChange}
                    handleSubmit={handleSignIn}
                />
                <div>
                    <Button category="sub" label="회원가입" handleClick={() => navigate('/signup')} />
                    <Button category="sub" label="게스트 계정으로 서비스 둘러보기" handleClick={handleSignInGuest} />
                </div>
            </Container>
        </Wrap>
    );
}
