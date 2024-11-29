import Button from '../Button';
import ResultForm from '../ResultForm';
import { Background, Container } from './style';

export default function UpdateModal({ isOpen, handleClose }) {
    return (
        <Background $isOpen={isOpen}>
            <Container>
                <Button category="close" label="✖" handleClick={handleClose} />
                <ResultForm label="수정 완료" handleChange={() => {}} handleSubmit={() => {}} />
            </Container>
        </Background>
    );
}
