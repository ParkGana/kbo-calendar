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
            $category.includes('modal') &&
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

        &::placeholder {
            color: ${color.gray};
        }
        
        &:focus {
            outline: none;
        }
    `}
`;

export default function Input({ type = 'text', category = 'auth', placeholder, value, handleChange }) {
    return <Container type={type} $category={category} placeholder={placeholder} value={value} onChange={handleChange} />;
}
