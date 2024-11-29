import { useState } from 'react';
import { Container, Filter, Name, Option, Thumbnail, TopContainer, User, Wrap } from './style';
import Record from '../../components/Record';
import Calendar from '../../components/Calendar';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const { user } = useAuth();

    const [pageContent, setPageContent] = useState('일정');

    return (
        <Wrap>
            <Container>
                <TopContainer>
                    <Filter>
                        <Option $isSelected={pageContent === '일정'} onClick={() => setPageContent('일정')}>
                            일정
                        </Option>
                        <Option $isSelected={pageContent === '시즌 전적'} onClick={() => setPageContent('시즌 전적')}>
                            시즌 전적
                        </Option>
                    </Filter>
                    <User onClick={() => navigate('/profile')}>
                        <Name>{user?.name}</Name>
                        <Thumbnail />
                    </User>
                </TopContainer>

                {pageContent === '일정' && <Calendar />}

                {pageContent === '시즌 전적' && <Record />}
            </Container>
        </Wrap>
    );
}
