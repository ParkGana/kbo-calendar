import styled from 'styled-components';
import { color } from '../configurations/Color';
import { typography } from '../configurations/Typography';
import { useNavigate } from 'react-router-dom';
import { TeamData } from '../Data';

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 40px;
`;

const Container = styled.div`
    width: calc(100vw - 80px);
    max-width: 800px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: ${color.white};
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    padding: 40px;
`;

const Back = styled.p`
    position: absolute;
    top: 20px;
    left: 25px;
    ${typography.title1};
    color: ${color.gray};
    cursor: pointer;
`;

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const Profile = styled.div`
    width: 200px;
    height: 200px;
    background-color: ${color.gray};
    border-radius: 50%;
`;

const Description = styled.p`
    ${typography.body1};
    color: ${color.black}l;
    margin-top: 20px;
`;

const Name = styled.p`
    ${typography.title1};
    color: ${color.black};
`;

const TeamContainer = styled.div`
    width: calc(100vw - 80px);
    max-width: 800px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    gap: 20px 10px;
    background-color: ${color.white};
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    padding: 40px;
`;

const Team = styled.img`
    ${({ $isMy }) => `
        width: 60px;
        ${!$isMy && `opacity: 0.2;`};
        cursor: pointer;
    `}
`;

const SubButton = styled.p`
    ${typography.body2};
    color: ${color.red};
    text-decoration: underline;
    text-align: center;
    cursor: pointer;
`;

export default function User() {
    const navigate = useNavigate();

    return (
        <Wrap>
            <Container>
                <Back onClick={() => navigate('/')}>←</Back>
                <ProfileContainer>
                    <Profile />
                    <Description>롯데 자이언츠의 승리 요정</Description>
                    <Name>박가나</Name>
                </ProfileContainer>
            </Container>
            <TeamContainer>
                {TeamData.map((team) => {
                    return <Team key={team.english_name} src={`src/assets/${team.english_name}.png`} $isMy={team.english_name === 'lotte'} />;
                })}
            </TeamContainer>
            <SubButton type="button" onClick={() => navigate('/signin')}>
                로그아웃
            </SubButton>
        </Wrap>
    );
}
