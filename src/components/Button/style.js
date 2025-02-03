import styled from 'styled-components';
import { typography } from '../../configurations/Typography';
import { color } from '../../configurations/Color';

export const Form = styled.button`
    width: 100%;
    background-color: ${color.black};
    border: none;
    border-radius: 0.5rem;
    ${typography.title3};
    color: ${color.white};
    padding: 0.75rem;
    cursor: pointer;
`;

export const Basic = styled.div`
    width: 100%;
    background-color: ${color.black};
    border: none;
    border-radius: 0.5rem;
    ${typography.title3};
    color: ${color.white};
    text-align: center;
    padding: 0.75rem;
    cursor: pointer;
`;

export const Sub = styled.p`
    width: max-content;
    ${typography.body2};
    text-decoration: underline;
    color: ${color.black};
    margin: 0 auto;
    cursor: pointer;
    padding: 0.5rem;

    &:hover {
        font-weight: 700;
    }
`;

export const Back = styled.div`
    width: max-content;
    position: absolute;
    top: 1rem;
    left: 1rem;
    ${typography.title1};
    color: ${color.gray};
    padding: 0.5rem;
    cursor: pointer;
`;

export const Close = styled.div`
    width: max-content;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    ${typography.title1};
    color: ${color.gray};
    cursor: pointer;
`;
