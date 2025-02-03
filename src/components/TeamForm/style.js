import styled from 'styled-components';
import { typography } from '../../configurations/Typography';
import { color } from '../../configurations/Color';

export const LocationRadio = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const OpponentRadio = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
`;

export const Label = styled.label`
    width: 50%;
`;

export const Option = styled.p`
    ${({ $isSelected }) => `
        ${typography.title3};
        background-color: ${$isSelected ? color.black : color.white};
        border: 1px solid ${$isSelected ? color.white : color.black};
        border-radius: 0.5rem;
        color: ${$isSelected ? color.white : color.black};
        text-align: center;
        padding: 0.75rem;
        cursor: pointer;
    `}
`;

export const Image = styled.img`
    ${({ $isSelected }) => `
        width: 6rem;
        cursor: pointer;

        ${
            $isSelected &&
            `
                background-color: ${color.gray};
                border-radius: 0.5rem;
            `
        };
    `}
`;

export const HiddenInput = styled.input`
    display: none;
`;
