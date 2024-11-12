import styled from 'styled-components';

const Alignment = styled.div`
    ${({ $gap }) => `
        display: flex;
        align-items: center;
        gap: ${$gap}px;
    `}
`;

export default function Horizontal({ gap, children }) {
    return <Alignment $gap={gap}>{children}</Alignment>;
}
