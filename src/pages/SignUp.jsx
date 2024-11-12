import styled from 'styled-components';
import { color } from '../configurations/Color';
import { typography } from '../configurations/Typography';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Wrap = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 80vw;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: ${color.white};
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    padding: 50px;
`;

const Title = styled.p`
    ${typography.headline1};
    color: ${color.black};
    text-align: center;
    margin-bottom: 30px;
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Input = styled.input`
    width: 100%;
    border: 1px solid ${color.black};
    ${typography.body1};
    color: ${color.black};
    padding: 10px;

    &::placeholder {
        color: ${color.gray};
    }

    &:focus {
        outline: none;
    }
`;

export const SelectBox = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    border: 1px solid ${color.black};
    ${typography.body1};
    color: ${color.black};
    padding: 10px;
    cursor: pointer;
`;

export const Selected = styled.p`
    ${typography.body1};
    color: ${color.gray};
`;

export const Arrow = styled.p`
    ${typography.body2};
    color: ${color.black};
`;

export const Options = styled.div`
    ${({ $isOpen }) => `
        height: 120px;
        position: absolute;
        top: 40px;
        left: -1px;
        right: -1px;
        display: ${$isOpen ? 'block' : 'none'};
        border: 1px solid ${color.black};
        z-index: 1;
        overflow: scroll;
    `}
`;

export const Option = styled.div`
    background-color: ${color.white};
    ${typography.body1};
    color: ${color.black};
    padding: 10px;

    &:hover {
        background-color: ${color.lightgray};
    }
`;

const Button = styled.button`
    width: 100%;
    background-color: ${color.black};
    border-radius: 4px;
    ${typography.title3};
    color: ${color.white};
    padding: 10px;
    cursor: pointer;
`;

const SubButton = styled.p`
    ${typography.body2};
    color: ${color.gray};
    text-decoration: underline;
    text-align: center;
    cursor: pointer;
`;

export default function SignUp() {
    const navigate = useNavigate();

    const [isOpenSelectBox, setIsOpenSelectBox] = useState(false);

    return (
        <Wrap>
            <Container>
                <Title>KBO Calendar</Title>
                <FormContainer>
                    <Input type="text" placeholder="아이디를 입력해 주세요." />
                    <Input type="password" placeholder="비밀번호를 입력해 주세요." />
                    <Input type="password" placeholder="비밀번호를 한 번 더 입력해 주세요." />
                    <Input type="text" placeholder="이름을 입력해 주세요." />
                    <SelectBox onClick={() => setIsOpenSelectBox(!isOpenSelectBox)}>
                        <Selected>응원하는 구단을 선택해 주세요.</Selected>
                        <Arrow>{isOpenSelectBox ? '▲' : '▼'}</Arrow>
                        <Options $isOpen={isOpenSelectBox}>
                            <Option>기아 타이거즈</Option>
                            <Option>두산 베어스</Option>
                            <Option>롯데 자이언츠</Option>
                            <Option>삼성 라이온즈</Option>
                            <Option>키움 히어로즈</Option>
                            <Option>한화 이글스</Option>
                            <Option>KT 위즈</Option>
                            <Option>LG 트윈스</Option>
                            <Option>NC 다이노스</Option>
                            <Option>SSG 랜더스</Option>
                        </Options>
                    </SelectBox>
                    <Button type="button">회원가입</Button>
                </FormContainer>
                <SubButton type="button" onClick={() => navigate('/signin')}>
                    로그인
                </SubButton>
            </Container>
        </Wrap>
    );
}
