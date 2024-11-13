import styled from 'styled-components';
import { typography } from '../../configurations/Typography';
import { color } from '../../configurations/Color';

const MainContainer = styled.button`
    ${({ $labelColor, $backgroundColor }) => `
        width: 100%;
        background-color: ${$backgroundColor};
        border: none;
        border-radius: 4px;
        ${typography.title3};
        color: ${$labelColor};
        padding: 10px;
        cursor: pointer;
    `}
`;

const SubContainer = styled.p`
    ${({ $labelColor }) => `
        width: max-content;
        ${typography.body2};
        color: ${$labelColor};
        text-decoration: underline;
        margin: 0 auto;
        cursor: pointer;

        &:hover {
            font-weight: 700;
        }
    `}
`;

const BackContainer = styled.p`
    ${({ $labelColor }) => `
        width: max-content;
        ${typography.title1};
        color: ${$labelColor};
        cursor: pointer;
    `}
`;

const CloseContainer = styled.p`
    ${({ $labelColor }) => `
        width: max-content;
        position: absolute;
        top: 30px;
        right: 30px;
        ${typography.title1};
        color: ${$labelColor};
        cursor: pointer;
    `}
`;

export default function Button({ category = 'main', labelColor = color.white, backgroundColor = color.black, label, handleClick }) {
    return (
        <>
            {category === 'main' && (
                <MainContainer type="button" $labelColor={labelColor} $backgroundColor={backgroundColor} onClick={handleClick}>
                    {label}
                </MainContainer>
            )}

            {category === 'sub' && (
                <SubContainer $labelColor={labelColor} onClick={handleClick}>
                    {label}
                </SubContainer>
            )}

            {category === 'back' && (
                <BackContainer $labelColor={labelColor} onClick={handleClick}>
                    {label}
                </BackContainer>
            )}

            {category === 'close' && (
                <CloseContainer $labelColor={labelColor} onClick={handleClick}>
                    {label}
                </CloseContainer>
            )}
        </>
    );
}
