import styled from 'styled-components';
import { color } from '../../configurations/Color';
import { typography } from '../../configurations/Typography';
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
    ${({ $selected }) => `
        ${typography.body1};
        color: ${$selected ? color.black : color.gray};
    `}
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

export default function SelectBox({ placeholder, selected, options, isOpen, handleToggle, handleSelect }) {
    return (
        <Container onClick={handleToggle}>
            <Selected $selected={!!selected}>{selected ?? placeholder}</Selected>
            <Arrow>{isOpen ? '▲' : '▼'}</Arrow>
            <OptionContainer $isOpen={isOpen}>
                {options.map((option) => (
                    <Option key={uuid()} onClick={() => handleSelect(option)}>
                        {option.value}
                    </Option>
                ))}
            </OptionContainer>
        </Container>
    );
}
