import styled from 'styled-components';
import { color } from '../../configurations/Color';
import { typography } from '../../configurations/Typography';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

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

export const ScoreContainer = styled.div`
    display: grid;
    grid-template-columns: 140px 80px 140px;
`;

export const Score = styled.p`
    ${typography.headline1};
    color: ${color.black};
    text-align: center;
`;
