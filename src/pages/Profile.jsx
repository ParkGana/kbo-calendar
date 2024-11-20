import { color } from '../configurations/Color';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import ContentLayout from '../components/layout/ContentLayout';
import Button from '../components/common/Button';
import MyTeam from '../components/MyTeam';
import User from '../components/User';
import { useAuth } from '../contexts/AuthContext';

export default function Profile() {
    const navigate = useNavigate();

    const { logout } = useAuth();

    /* 로그아웃 */
    const handleLogout = () => {
        logout();
        navigate('/signin');
    };

    return (
        <PageLayout category="basic">
            <ContentLayout category="user">
                <Button category="back" labelColor={color.gray} label="←" handleClick={() => navigate('/')} />
                <User category="detail" />
            </ContentLayout>
            <ContentLayout category="user">
                <MyTeam />
            </ContentLayout>
            <Button category="sub" labelColor={color.red} label="로그아웃" handleClick={handleLogout} />
        </PageLayout>
    );
}
