import styled from 'styled-components';
import { color } from '../../configurations/Color';
import { typography } from '../../configurations/Typography';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

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

export const ScoreContainer = styled.div`
    display: grid;
    grid-template-columns: 7.5rem 6rem 7.5rem;
`;

export const Score = styled.p`
    ${typography.headline1};
    color: ${color.black};
    text-align: center;
`;
