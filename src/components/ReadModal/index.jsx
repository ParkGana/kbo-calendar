import Button from '../Button';
import Result from '../Result';
import { Background, ButtonContainer, Container } from './style';

export default function ReadModal({ isOpen, handleClose, handleUpdate }) {
    return (
        <Background $isOpen={isOpen}>
            <Container>
                <Button category="close" label="✖" handleClick={handleClose} />
                <Result />
                <ButtonContainer>
                    <Button category="basic" label="수정" handleClick={handleUpdate} />
                    <Button category="basic" label="삭제" handleClick={() => {}} />
                </ButtonContainer>
            </Container>
        </Background>
    );
}
