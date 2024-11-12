import styled from 'styled-components';
import { color } from '../../configurations/Color';

const Wrap = styled.div`
    ${({ $category }) => `
        display: flex;
        flex-direction: column;
        gap: 20px;
        background-color: ${color.white};
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        
        ${$category === 'basic' && `padding: 40px;`};

        ${
            $category === 'auth' &&
            `
                width: 80vw;
                max-width: 450px;
                padding: 50px;
            `
        };

        ${
            $category === 'user' &&
            `
                width: calc(100vw - 80px);
                max-width: 800px;
                padding: 30px;
            `
        };
    `}
`;

export default function ContentLayout({ category = 'basic', children }) {
    return <Wrap $category={category}>{children}</Wrap>;
}
