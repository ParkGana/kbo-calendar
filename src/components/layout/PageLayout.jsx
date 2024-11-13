import styled from 'styled-components';

const Wrap = styled.div`
    ${({ $category }) => `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;

        ${$category === 'auth' && `height: 100vh;`};
        
        ${$category === 'basic' && `padding: 40px;`};
    `}
`;

export default function PageLayout({ category, children }) {
    return <Wrap $category={category}>{children}</Wrap>;
}
