import { useState } from 'react';

export function useReadModal() {
    const [isOpen, setIsOpen] = useState(false);

    /* modal 창 열기 */
    const openModal = () => {
        setIsOpen(true);
    };

    /* modal 창 닫기 */
    const closeModal = () => {
        setIsOpen(false);
    };

    return { isOpen, openModal, closeModal };
}
