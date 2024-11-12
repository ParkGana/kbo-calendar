import styled from 'styled-components';

const Alignment = styled.div`
    ${({ $gap }) => `
        display: flex;
        flex-direction: column;
        gap: ${$gap}px;
    `}
`;

export default function Vertical({ gap, children }) {
    return <Alignment $gap={gap}>{children}</Alignment>;
}
