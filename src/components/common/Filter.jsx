import styled from 'styled-components';
import { typography } from '../../configurations/Typography';
import { color } from '../../configurations/Color';
import { v4 as uuid } from 'uuid';

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Option = styled.p`
    ${({ $isSelected }) => `
        ${typography.title3};
        color: ${$isSelected ? color.black : color.gray};
        cursor: pointer;
    `}
`;

export default function Filter({ options }) {
    return (
        <Container>
            {options.map((option) => {
                return (
                    <Option key={uuid()} $isSelected={option.isSelected} onClick={option.handleClick}>
                        {option.label}
                    </Option>
                );
            })}
        </Container>
    );
}
