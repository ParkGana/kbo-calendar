import styled from 'styled-components';
import { typography } from '../../configurations/Typography';
import { color } from '../../configurations/Color';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const HeadContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const Arrow = styled.p`
    ${typography.title3};
    color: ${color.black};
    cursor: pointer;
`;

export const Month = styled.p`
    ${typography.headline1};
    color: ${color.black};
`;

export const BodyContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, minmax(calc(100% / 7), 160px));
`;

export const Day = styled.div`
    ${({ $isSaturday, $isSunday }) => `
        background-color: ${color.white};
        outline: 1px solid ${color.gray};
        ${typography.title3};
        color: ${$isSaturday ? color.saturday : $isSunday ? color.sunday : color.weekdays};
        text-align: center;
        padding: 10px;
    `}
`;

export const Plus = styled.p`
    position: absolute;
    top: 0;
    right: 5px;
    display: none;
    ${typography.body1};
    color: ${color.gray};
    cursor: pointer;

    &:hover {
        ${typography.title3};
    }
`;

export const DateContainer = styled.div`
    height: calc((100vh - 330px) / 6);
    min-height: 60px;
    max-height: 120px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: ${color.white};
    outline: 1px solid ${color.gray};
    padding: 5px 10px;

    &:hover ${Plus} {
        display: block;
    }
`;

export const Date = styled.p`
    ${({ $isSaturday, $isSunday }) => `
        width: 20px;
        ${typography.body2};
        color: ${$isSaturday ? color.saturday : $isSunday ? color.sunday : color.weekdays};
    `}
`;

export const Opponent = styled.p`
    ${({ $backgroundColor }) => `
        width: 100%;
        background-color: ${$backgroundColor};
        ${typography.body3};
        color: ${color.white};
        text-align: center;
        padding: 4px 0;
        cursor: pointer;
    `}
`;
