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
    width: calc(100vw - 80px);
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: ${color.white};
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    padding: 30px;
`;

export const User = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const Thumbnail = styled.div`
    width: 200px;
    height: 200px;
    background-color: ${color.gray};
    border-radius: 50%;
`;

export const Description = styled.p`
    ${typography.body1};
    color: ${color.black};
    margin-top: 20px;
`;

export const Name = styled.p`
    color: ${color.black};
    ${typography.title1}
`;

export const Radio = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    gap: 20px 10px;
`;

export const Image = styled.img`
    ${({ $isMy }) => `
        width: 60px;
        ${!$isMy && `opacity: 0.2;`};
        cursor: pointer;
    `}
`;
