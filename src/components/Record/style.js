import styled from 'styled-components';
import { typography } from '../../configurations/Typography';
import { color } from '../../configurations/Color';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    outline: 1px solid ${color.gray};
    padding: 1rem;
`;

export const HeadContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const YearContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const Arrow = styled.p`
    ${typography.title3};
    color: ${color.black};
    cursor: pointer;
`;

export const Year = styled.div`
    ${typography.title3};
    color: ${color.black};
`;

export const Total = styled.p`
    ${typography.title3};
    color: ${color.black};
`;

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const TeamContainer = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-right: 0.5rem;
`;

export const Team = styled.img`
    height: 3rem;
`;

export const PercentContainer = styled.div`
    width: 100%;
    height: calc(100% - 0.5rem);
    display: flex;
`;

export const Percent = styled.div`
    ${({ $total, $count }) => `
        display: flex;
        align-items: center;
        overflow: hidden;

        &:first-child {
            width: ${($count / $total) * 100}%;
            background-color: ${color.win};
            text-align: left;
        }

        &:nth-child(2) {
            width: ${($count / $total) * 100}%;
            background-color: ${color.draw};
            text-align: center;
        }
                    
        &:last-child {
            width: ${($count / $total) * 100}%;
            background-color: ${color.lose};
            text-align: right;
        }
    `}
`;

export const Result = styled.p`
    width: 100%;
    ${typography.body2};
    color: ${color.black};
    padding: 0 1rem;
`;
