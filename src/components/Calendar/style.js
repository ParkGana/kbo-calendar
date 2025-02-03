import styled from 'styled-components';
import { typography } from '../../configurations/Typography';
import { color } from '../../configurations/Color';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export const HeadContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const Arrow = styled.p`
    ${typography.title3};
    color: ${color.black};
    cursor: pointer;
`;

export const NowContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Year = styled.div`
    ${typography.title3};
    color: ${color.black};
`;

export const Month = styled.p`
    ${typography.headline2};
    color: ${color.black};
`;

export const BodyContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

export const Day = styled.div`
    ${({ $isSaturday, $isSunday }) => `
        background-color: ${color.white};
        outline: 1px solid ${color.gray};
        ${typography.title3};
        color: ${$isSaturday ? color.saturday : $isSunday ? color.sunday : color.weekdays};
        text-align: center;
        padding: 0.5rem;
    `}
`;

export const Plus = styled.p`
    position: absolute;
    top: 0;
    right: 0.25rem;
    display: none;
    ${typography.body1};
    color: ${color.gray};
    cursor: pointer;

    &:hover {
        ${typography.title3};
    }
`;

export const DateContainer = styled.div`
    height: 6rem;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    background-color: ${color.white};
    outline: 1px solid ${color.gray};
    padding: 0.5rem;

    &:hover ${Plus} {
        display: block;
    }
`;

export const Date = styled.p`
    ${({ $isSaturday, $isSunday }) => `
        ${typography.body2};
        color: ${$isSaturday ? color.saturday : $isSunday ? color.sunday : color.weekdays};
    `}
`;

export const Opponent = styled.p`
    ${({ $backgroundColor, $isWin }) => `
        width: 100%;
        background-color: ${$backgroundColor};
        opacity: ${$isWin ? '1' : '0.5'};
        ${typography.body3};
        color: ${color.white};
        text-align: center;
        padding: 0.25rem 0;
        cursor: pointer;
    `}
`;
