import styled from 'styled-components';
import { color } from '../../configurations/Color';
import { typography } from '../../configurations/Typography';

export const TeamContainer = styled.div`
    display: grid;
    grid-template-columns: 7.5rem 6rem 7.5rem;
    align-items: center;
    margin-top: 3rem;
`;

export const Team = styled.img`
    width: 7.5rem;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`;

export const Info = styled.p`
    ${typography.title3};
    color: ${color.black};
    text-align: center;
`;

export const Radio = styled.div`
    display: flex;
    align-items: center;
`;

export const Label = styled.label`
    width: 3rem;
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
    grid-template-columns: 7.5rem 6rem 7.5rem;
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
        padding: 0.25rem;

        &::placeholder {
            color: ${color.gray};
        }

        &:focus {
            outline: none;
        }
    `}
`;
