import styled from 'styled-components';
import { color } from '../configurations/Color';
import { typography } from '../configurations/Typography';
import { useNavigate } from 'react-router-dom';
import { RecordData } from '../Data';

const Wrap = styled.div`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: ${color.white};
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    margin: 40px;
    padding: 40px;
`;

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Filter = styled.p`
    ${({ $isSelected }) => `
        ${typography.title3};
        color: ${$isSelected ? color.black : color.gray};
        cursor: pointer;
    `}
`;

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Name = styled.p`
    ${typography.title3};
    color: ${color.black};
`;

const Profile = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${color.gray};
    border-radius: 50%;
`;

const RecordContainer = styled.div`
    outline: 1px solid ${color.gray};
    padding: 10px;
`;

const Team = styled.div`
    width: calc(100vw - 180px);
    max-width: 1100px;
    height: calc((100vh - 260px) / 9);
    min-height: 40px;
    max-height: 60px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-right: 10px;
`;

const Logo = styled.img`
    height: calc((100vh - 260px) / 9);
    min-height: 40px;
    max-height: 60px;
`;

const PercentContainer = styled.div`
    width: 100%;
    height: calc(100% - 20px);
    display: flex;
`;

const Percent = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;

    ${({ $count }) => `
        &:first-child {
            width: ${($count / 16) * 100}%;
            background-color: ${color.win};
            text-align: left;
            padding-left: 10px;
        }

        &:nth-child(2) {
            width: ${($count / 16) * 100}%;
            background-color: ${color.draw};
            text-align: center;
        }
                    
        &:last-child {
            width: ${($count / 16) * 100}%;
            background-color: ${color.lose};
            text-align: right;
            padding-right: 10px;
        }
    `}
`;

const PercentText = styled.p`
    width: 100%;
    ${typography.body2};
    color: ${color.black};
`;

export default function Record() {
    const navigate = useNavigate();

    return (
        <Wrap>
            <Container>
                <TopContainer>
                    <FilterContainer>
                        <Filter onClick={() => navigate('/')}>일정</Filter>
                        <Filter $isSelected>시즌 전적</Filter>
                    </FilterContainer>
                    <UserContainer onClick={() => navigate('/user')}>
                        <Name>박가나</Name>
                        <Profile />
                    </UserContainer>
                </TopContainer>
                <RecordContainer>
                    {RecordData.sort((a, b) => b.draw - a.draw)
                        .sort((a, b) => b.win - a.win)
                        .map((record) => {
                            return (
                                <Team key={record.english_name}>
                                    <Logo src={`src/assets/${record.english_name}.png`} />
                                    <PercentContainer>
                                        <Percent $count={record.win}>
                                            <PercentText>{record.win}승</PercentText>
                                        </Percent>
                                        <Percent $count={record.draw}></Percent>
                                        <Percent $count={record.lose}>
                                            <PercentText>{record.lose}패</PercentText>
                                        </Percent>
                                    </PercentContainer>
                                </Team>
                            );
                        })}
                </RecordContainer>
            </Container>
        </Wrap>
    );
}
