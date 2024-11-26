import { color } from '../configurations/Color';
import Horizontal from './alignment/Horizontal';
import Button from './common/Button';
import ModalLayout from './layout/ModalLayout';
import Bracket from './Bracket';

export default function ReadModal({ isOpen, handleClose, handleUpdate }) {
    return (
        <ModalLayout gap={40} isOpen={isOpen}>
            <Button category="close" labelColor={color.gray} label="✖" handleClick={handleClose} />

            <Bracket type="read" />
            <Horizontal gap={20}>
                <Button category="basic" labelColor={color.white} backgroundColor={color.black} label="수정" handleClick={handleUpdate} />
                <Button category="basic" labelColor={color.white} backgroundColor={color.red} label="삭제" handleClick={() => {}} />
            </Horizontal>
        </ModalLayout>
    );
}
