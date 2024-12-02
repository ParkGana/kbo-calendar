import Button from '../Button';
import Result from '../Result';
import { Background, ButtonContainer, Container } from './style';

export default function ReadModal({ isOpen, data, handleClose, handleUpdate }) {
    return (
        <Background $isOpen={isOpen}>
            <Container>
                <Button category="close" label="✖" handleClick={handleClose} />
                <Result data={data} />
                <ButtonContainer>
                    <Button category="basic" label="수정" handleClick={handleUpdate} />
                    <Button category="basic" label="삭제" handleClick={() => {}} />
                </ButtonContainer>
            </Container>
        </Background>
    );
}
