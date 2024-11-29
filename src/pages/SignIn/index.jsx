import { useNavigate } from 'react-router-dom';
import { validateSignIn } from '../../utils/validateData';
import { fireSuccessSwal } from '../../utils/fireSwal';
import { useAuth } from '../../contexts/AuthContext';
import { Container, Title, Wrap } from './style';
import { useForm } from '../../hooks/useForm';
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
                login({ email, password });
                fireSuccessSwal({ text: '로그인을 성공하였습니다.', afterConfirm: () => navigate('/') });
            }
        });
    };

    return (
        <Wrap>
            <Container>
                <Title>KBO Calendar</Title>
                <AuthForm category="signin" label="로그인" data={values} handleChange={handleChange} handleSubmit={handleSignIn} />
                <Button category="sub" label="회원가입" handleClick={() => navigate('/signup')} />
            </Container>
        </Wrap>
    );
}