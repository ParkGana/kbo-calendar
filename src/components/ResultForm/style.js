import styled from 'styled-components';
import { color } from '../../configurations/Color';
import { typography } from '../../configurations/Typography';

export const TeamContainer = styled.div`
    display: grid;
    grid-template-columns: 140px 80px 140px;
    align-items: center;
    margin-top: 50px;
`;

export const Team = styled.img`
    width: 140px;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Info = styled.p`
    ${typography.title3};
    color: ${color.black};
    text-align: center;
`;

export const Radio = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Label = styled.label`
    width: 50px;
`;

export const Option = styled.p`
    ${({ $isSelected }) => `
        ${$isSelected ? typography.title3 : typography.body1};
        color: ${$isSelected ? color.black : color.gray};
        text-align: center;
        cursor: pointer;
    `}
`;

export const HiddenInput = styled.input`
    display: none;
`;

export const ResultContainer = styled.div`
    display: grid;
    grid-template-columns: 140px 80px 140px;
`;

export const Result = styled.p`
    ${typography.headline1};
    color: ${color.black};
    text-align: center;
`;

export const Input = styled.input`
    ${({ $category }) => `
        width: 100%;
        border: none;
        border-bottom: 1px solid ${color.gray};
        ${$category === 'score' ? typography.headline1 : typography.title3};
        color: ${color.black};
        text-align: center;
        padding: 5px;

        &::placeholder {
            color: ${color.gray};
        }

        &:focus {
            outline: none;
        }
    `}
`;
