import styled from 'styled-components';
import { color } from '../../configurations/Color';
import { typography } from '../../configurations/Typography';

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 40px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: ${color.white};
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    padding: 40px;
`;

export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Filter = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Option = styled.p`
    ${({ $isSelected }) => `
        ${typography.title3};
        color: ${$isSelected ? color.black : color.gray};
        cursor: pointer;
    `}
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

export const Name = styled.p`
    color: ${color.black};
    ${typography.title3}
`;

export const Thumbnail = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${color.gray};
    border-radius: 50%;
`;
