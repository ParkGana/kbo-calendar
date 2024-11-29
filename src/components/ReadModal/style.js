import styled from 'styled-components';
import { color } from '../../configurations/Color';

export const Background = styled.div`
    ${({ $isOpen }) => `
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: ${$isOpen ? 'grid' : 'none'};
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 2;
    `}
`;

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 40px;
    background-color: ${color.white};
    border-radius: 10px;
    padding: 30px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
