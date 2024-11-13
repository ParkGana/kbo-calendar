import styled from 'styled-components';
import { color } from '../../configurations/Color';
import { typography } from '../../configurations/Typography';

const Container = styled.input`
    ${({ $category }) => `
        ${
            $category === 'auth' &&
            `
                width: 100%;
                border: 1px solid ${color.black};
                ${typography.body1};
                color: ${color.black};
                padding: 10px;
            `
        };

        ${
            ($category === 'info' || $category === 'score') &&
            `
                width: 100%;
                border: none;
                border-bottom: 1px solid ${color.gray};
                ${$category === 'modal_text' ? typography.title3 : typography.headline1};
                color: ${color.black};
                padding: 5px;
                text-align: center;
            `
        };

        ${$category === 'info' && `${typography.title3};`};

        ${$category === 'score' && `${typography.headline1};`};

        &::placeholder {
            color: ${color.gray};
        }
        
        &:focus {
            outline: none;
        }
    `}
`;

export default function Input({ category, type, placeholder, value, handleChange }) {
    return <Container $category={category} type={type} placeholder={placeholder} value={value} onChange={handleChange} />;
}
