import styled from 'styled-components';
import { color } from '../../configurations/Color';
import { typography } from '../../configurations/Typography';

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 2rem;
`;

export const Container = styled.div`
    width: 90vw;
    max-width: 50rem;
    position: relative;
    background-color: ${color.white};
    border-radius: 1rem;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    padding: 2rem;
`;

export const User = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export const Thumbnail = styled.div`
    width: 12rem;
    height: 12rem;
    background-color: ${color.gray};
    border-radius: 50%;
`;

export const Description = styled.p`
    ${typography.body1};
    color: ${color.black};
    margin-top: 1rem;
`;

export const Name = styled.p`
    color: ${color.black};
    ${typography.title1}
`;

export const Radio = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(4rem, 1fr));
    gap: 1rem 0.5rem;
`;

export const Image = styled.img`
    ${({ $isMy }) => `
        width: 4rem;
        ${!$isMy && `opacity: 0.2;`};
        cursor: pointer;
    `}
`;
