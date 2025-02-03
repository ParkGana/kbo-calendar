import styled from 'styled-components';
import { color } from '../../configurations/Color';
import { typography } from '../../configurations/Typography';

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`;

export const Container = styled.div`
    width: 90vw;
    max-width: 75rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: ${color.white};
    border-radius: 1rem;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    padding: 2rem;
`;

export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Filter = styled.div`
    display: flex;
    align-items: center;
`;

export const Option = styled.p`
    padding: 0.5rem;

    ${({ $isSelected }) => `
        ${typography.title3};
        color: ${$isSelected ? color.black : color.gray};
        cursor: pointer;
    `}
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
`;

export const Name = styled.p`
    color: ${color.black};
    ${typography.title3}
`;

export const Thumbnail = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: ${color.gray};
    border-radius: 50%;
`;
