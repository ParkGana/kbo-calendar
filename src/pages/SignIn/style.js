import styled from 'styled-components';
import { typography } from '../../configurations/Typography';
import { color } from '../../configurations/Color';

export const Wrap = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const Container = styled.div`
    width: 80vw;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: ${color.white};
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    padding: 50px;
`;

export const Title = styled.p`
    ${typography.headline1};
    color: ${color.black};
    text-align: center;
    margin-bottom: 30px;
`;
