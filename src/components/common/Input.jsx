import styled from 'styled-components';
import { color } from '../../configurations/Color';
import { typography } from '../../configurations/Typography';

const Container = styled.input`
    width: 100%;
    border: 1px solid ${color.black};
    ${typography.body1};
    color: ${color.black};
    padding: 10px;

    &::placeholder {
        color: ${color.gray};
    }

    &:focus {
        outline: none;
    }
`;

export default function Input({ type = 'text', placeholder, value, handleChange }) {
    return <Container type={type} placeholder={placeholder} value={value} onChange={handleChange} />;
}
