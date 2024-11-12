import styled from 'styled-components';

const Alignment = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default function SpaceBetween({ children }) {
    return <Alignment>{children}</Alignment>;
}
