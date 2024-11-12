import styled from 'styled-components';
import { color } from '../configurations/Color';
import { typography } from '../configurations/Typography';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import ContentLayout from '../components/layout/ContentLayout';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import SelectBox from '../components/common/SelectBox';
import Vertical from '../components/alignment/Vertical';

const Title = styled.p`
    ${typography.headline1};
    color: ${color.black};
    text-align: center;
    margin-bottom: 30px;
`;

export default function SignUp() {
    const navigate = useNavigate();

    return (
        <PageLayout category="auth">
            <ContentLayout category="auth">
                <Title>KBO Calendar</Title>
                <Vertical gap={20}>
                    <Input placeholder="아이디를 입력해 주세요." value={null} handleChange={() => {}} />
                    <Input type="password" placeholder="비밀번호를 입력해 주세요." value={null} handleChange={() => {}} />
                    <Input type="password" placeholder="비밀번호를 한 번 더 입력해 주세요." value={null} handleChange={() => {}} />
                    <Input placeholder="이름를 입력해 주세요." value={null} handleChange={() => {}} />
                    <SelectBox
                        placeholder={'응원하는 구단을 선택해 주세요.'}
                        value={null}
                        options={['기아 타이거즈', '두산 베어스', '롯데 자이언츠', '삼성 라이온즈', '키움 히어로즈', '한화 이글스', 'KT 위즈', 'LG 트윈스', 'NC 다이노스', 'SSG 랜더스']}
                    />
                    <Button label="회원가입" handleClick={() => {}} />
                </Vertical>
                <Button category="sub" labelColor={color.gray} label="로그인" handleClick={() => navigate('/signin')} />
            </ContentLayout>
        </PageLayout>
    );
}
