import styled from 'styled-components';
import { color } from '../../configurations/Color';
import { typography } from '../../configurations/Typography';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const Container = styled.div`
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

const Selected = styled.p`
    ${typography.body1};
    color: ${color.gray};
`;

const Arrow = styled.p`
    ${typography.body2};
    color: ${color.black};
`;

const OptionContainer = styled.div`
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

const Option = styled.div`
    background-color: ${color.white};
    ${typography.body1};
    color: ${color.black};
    padding: 10px;

    &:hover {
        background-color: ${color.lightgray};
    }
`;

export default function SelectBox({ placeholder, value, options }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container onClick={() => setIsOpen(!isOpen)}>
            <Selected>{value ?? placeholder}</Selected>
            <Arrow>{isOpen ? '▲' : '▼'}</Arrow>
            <OptionContainer $isOpen={isOpen}>
                {options.map((option) => {
                    return <Option key={uuid()}>{option}</Option>;
                })}
            </OptionContainer>
        </Container>
    );
}
