import styled from 'styled-components';
import { typography } from '../../configurations/Typography';
import { color } from '../../configurations/Color';

export const Form = styled.button`
    width: 100%;
    background-color: ${color.black};
    border: none;
    border-radius: 4px;
    ${typography.title3};
    color: ${color.white};
    padding: 10px;
    cursor: pointer;
`;

export const Basic = styled.div`
    width: 100%;
    background-color: ${color.black};
    border: none;
    border-radius: 4px;
    ${typography.title3};
    color: ${color.white};
    text-align: center;
    padding: 10px;
    cursor: pointer;
`;

export const Sub = styled.p`
    width: max-content;
    ${typography.body2};
    text-decoration: underline;
    color: ${color.black};
    margin: 0 auto;
    cursor: pointer;

    &:hover {
        font-weight: 700;
    }
`;

export const Back = styled.div`
    width: max-content;
    ${typography.title1};
    color: ${color.gray};
    cursor: pointer;
`;

export const Close = styled.div`
    width: max-content;
    position: absolute;
    top: 30px;
    right: 30px;
    ${typography.title1};
    color: ${color.gray};
    cursor: pointer;
`;
