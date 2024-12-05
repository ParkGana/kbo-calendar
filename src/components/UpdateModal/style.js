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

export const Container = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: ${color.white};
    border-radius: 10px;
    padding: 30px;
`;
