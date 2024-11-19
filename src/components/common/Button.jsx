import styled from 'styled-components';
import { typography } from '../../configurations/Typography';

const Basic = styled.button`
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

const Other = styled.p`
    ${({ $category, $labelColor }) => `
        width: max-content;
        color: ${$labelColor};
        cursor: pointer;

        ${
            $category === 'sub' &&
            `
                ${typography.body2};
                text-decoration: underline;
                margin: 0 auto;

                &:hover {
                    font-weight: 700;
                }
            `
        };

        ${$category === 'back' && `${typography.title1};`};

        ${
            $category === 'close' &&
            `
                position: absolute;
                top: 30px;
                right: 30px;
                ${typography.title1};
            `
        };
    `}
`;

export default function Button({ category, labelColor, backgroundColor, label, handleClick }) {
    return (
        <>
            {category === 'basic' || category === 'form' ? (
                <Basic type={category === 'form' ? 'submit' : 'button'} $labelColor={labelColor} $backgroundColor={backgroundColor} onClick={handleClick}>
                    {label}
                </Basic>
            ) : (
                <Other $category={category} $labelColor={labelColor} onClick={handleClick}>
                    {label}
                </Other>
            )}
        </>
    );
}
