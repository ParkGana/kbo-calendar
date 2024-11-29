import styled from 'styled-components';
import { typography } from '../../configurations/Typography';
import { color } from '../../configurations/Color';

export const Filter = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Option = styled.p`
    ${({ $isSelected }) => `
        ${typography.title3};
        width: 50%;
        background-color: ${$isSelected ? color.black : color.white};
        border: 1px solid ${$isSelected ? color.white : color.black};
        border-radius: 4px;
        color: ${$isSelected ? color.white : color.black};
        text-align: center;
        padding: 10px;
        cursor: pointer;
    `}
`;

export const Opponent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
`;

export const Image = styled.img`
    ${({ $isSelected }) => `
        width: 100px;
        cursor: pointer;

        ${
            $isSelected &&
            `
                background-color: ${color.gray};
                border-radius: 4px;
            `
        };
    `}
`;
