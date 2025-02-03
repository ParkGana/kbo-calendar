import styled from 'styled-components';
import { typography } from '../../configurations/Typography';
import { color } from '../../configurations/Color';

export const Wrap = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    width: 80vw;
    max-width: 25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: ${color.white};
    border-radius: 1rem;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    padding: 3rem;
`;

export const Title = styled.p`
    ${typography.headline1};
    color: ${color.black};
    text-align: center;
    margin-bottom: 1rem;
`;
