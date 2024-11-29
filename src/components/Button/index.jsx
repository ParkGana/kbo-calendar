import { Back, Basic, Close, Form, Sub } from './style';

export default function Button({ category, label, handleClick }) {
    return (
        <>
            {category === 'form' && <Form>{label}</Form>}

            {category === 'basic' && <Basic onClick={handleClick}>{label}</Basic>}

            {category === 'sub' && <Sub onClick={handleClick}>{label}</Sub>}

            {category === 'back' && <Back onClick={handleClick}>{label}</Back>}

            {category === 'close' && <Close onClick={handleClick}>{label}</Close>}
        </>
    );
}
