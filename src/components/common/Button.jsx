import styled from 'styled-components';
import { typography } from '../../configurations/Typography';
import { color } from '../../configurations/Color';

const MainContainer = styled.button`
    ${({ $labelColor, $backgroundColor }) => `
        width: 100%;
        background-color: ${$backgroundColor};
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
        </>
    );
}
