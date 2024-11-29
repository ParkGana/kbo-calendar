import styled from 'styled-components';
import { typography } from '../../configurations/Typography';
import { color } from '../../configurations/Color';

export const Container = styled.div`
    outline: 1px solid ${color.gray};
    padding: 10px;
`;

export const TeamContainer = styled.div`
    width: calc(100vw - 180px);
    max-width: 1100px;
    height: calc((100vh - 250px) / 9);
    min-height: 40px;
    max-height: 60px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-right: 10px;
`;

export const Team = styled.img`
    height: calc((100vh - 250px) / 9);
    min-height: 40px;
    max-height: 60px;
`;

export const PercentContainer = styled.div`
    width: 100%;
    height: calc(100% - 20px);
    display: flex;
`;

export const Percent = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;

    ${({ $count }) => `
        &:first-child {
            width: ${($count / 16) * 100}%;
            background-color: ${color.win};
            text-align: left;
            padding-left: 10px;
        }

        &:nth-child(2) {
            width: ${($count / 16) * 100}%;
            background-color: ${color.draw};
            text-align: center;
        }
                    
        &:last-child {
            width: ${($count / 16) * 100}%;
            background-color: ${color.lose};
            text-align: right;
            padding-right: 10px;
        }
    `}
`;

export const Result = styled.p`
    width: 100%;
    ${typography.body2};
    color: ${color.black};
`;
