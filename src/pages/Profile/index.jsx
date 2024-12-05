import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Container, Description, Image, Name, Radio, Thumbnail, User, Wrap } from './style';
import Button from '../../components/Button';
import { useTeams } from '../../hooks/tanstack/useTeams';
import { fireSuccessSwal } from '../../utils/fireSwal';

export default function Profile() {
    const navigate = useNavigate();

    const { user, logout } = useAuth();
    const { data: teams } = useTeams();

    /* 로그아웃 */
    const handleSignOut = async () => {
        const { error } = await logout();

        if (!error) {
            fireSuccessSwal({ text: '로그아웃에 성공하였습니다.', afterConfirm: () => navigate('/signin') });
        }
    };

    return (
        <Wrap>
            <Container>
                <Button category="back" label="←" handleClick={() => navigate('/')} />
                <User>
                    <Thumbnail />
                    <Description>{user?.team.name_korean}의 승리 요정</Description>
                    <Name>{user?.name}</Name>
                </User>
            </Container>
            <Container>
                <Radio>
                    {teams?.map((team) => (
                        <Image key={team.id} $isMy={team.id === user?.team.id} src={`src/assets/${team.name_english}.png`} alt="image" />
                    ))}
                </Radio>
            </Container>
            <Button category="sub" label="로그아웃" handleClick={handleSignOut} />
        </Wrap>
    );
}
