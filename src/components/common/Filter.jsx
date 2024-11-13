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
    ${({ $category, $isSelected }) => `
        ${typography.title3};
        cursor: pointer;

        ${
            $category === 'page' &&
            `
                color: ${$isSelected ? color.black : color.gray};
            `
        };

        ${
            $category === 'modal' &&
            `
                width: 50%;
                background-color: ${$isSelected ? color.black : color.white};
                border: 1px solid ${$isSelected ? color.white : color.black};
                border-radius: 4px;
                ${typography.title3};
                color: ${$isSelected ? color.white : color.black};
                text-align: center;
                padding: 10px;
            `
        };
    `}
`;

export default function Filter({ category = 'page', options }) {
    return (
        <Container>
            {options.map((option) => {
                return (
                    <Option key={uuid()} $category={category} $isSelected={option.isSelected} onClick={option.handleClick}>
                        {option.label}
                    </Option>
                );
            })}
        </Container>
    );
}
