import { color } from '../configurations/Color';
import Button from './common/Button';
import ModalLayout from './layout/ModalLayout';
import Bracket from './Bracket';

export default function UpdateModal({ isOpen, handleClose }) {
    return (
        <ModalLayout gap={20} isOpen={isOpen}>
            <Button category="close" labelColor={color.gray} label="✖" handleClick={handleClose} />

            <Bracket type="write" />
            <Button category="basic" labelColor={color.white} backgroundColor={color.black} label="수정 완료" handleClick={() => {}} />
        </ModalLayout>
    );
}
