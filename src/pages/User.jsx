import { color } from '../configurations/Color';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import ContentLayout from '../components/layout/ContentLayout';
import Button from '../components/common/Button';
import Profile from '../components/Profile';
import Team from '../components/Team';

export default function User() {
    const navigate = useNavigate();

    return (
        <PageLayout>
            <ContentLayout category="user">
                <Button category="back" labelColor={color.gray} label="←" handleClick={() => navigate('/')} />
                <Profile />
            </ContentLayout>
            <ContentLayout category="user">
                <Team />
            </ContentLayout>
            <Button category="sub" labelColor={color.red} label="로그아웃" handleClick={() => navigate('/signin')} />
        </PageLayout>
    );
}
