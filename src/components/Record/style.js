import styled from 'styled-components';
import { typography } from '../../configurations/Typography';
import { color } from '../../configurations/Color';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    outline: 1px solid ${color.gray};
    padding: 20px 10px;
`;

export const HeadContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`;

export const YearContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
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
    gap: 10px;
`;

export const TeamContainer = styled.div`
    width: calc(100vw - 180px);
    max-width: 1100px;
    height: calc((100vh - 390px) / 9);
    min-height: 30px;
    max-height: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-right: 10px;
`;

export const Team = styled.img`
    height: calc((100vh - 390px) / 9);
    min-height: 30px;
    max-height: 50px;
`;

export const PercentContainer = styled.div`
    width: 100%;
    height: calc(100% - 10px);
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
    padding: 0 10px;
`;
