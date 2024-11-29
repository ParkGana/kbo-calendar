import styled from 'styled-components';
import { color } from '../../configurations/Color';
import { typography } from '../../configurations/Typography';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Input = styled.input`
    width: 100%;
    border: 1px solid ${color.black};
    ${typography.body1};
    color: ${color.black};
    padding: 10px;
`;

export const Radio = styled.div``;

export const Label = styled.label``;

export const Image = styled.img`
    ${({ $isSelected }) => `
        width: 20%;
        ${!$isSelected && `opacity: 0.2;`};
        cursor: pointer;
    `}
`;

export const HiddenInput = styled.input`
    display: none;
`;
