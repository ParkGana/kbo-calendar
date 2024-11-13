import Calendar from '../components/Calendar';
import PageLayout from '../components/layout/PageLayout';
import ContentLayout from '../components/layout/ContentLayout';
import Filter from '../components/common/Filter';
import SpaceBetween from '../components/alignment/SpaceBetween';
import { useState } from 'react';
import Record from '../components/Record';
import User from '../components/User';
import Modal from '../components/Modal';

export default function Home() {
    const [pageContent, setPageContent] = useState('일정');
    const [modalContent, setModalContent] = useState();
    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <PageLayout category="basic">
            <ContentLayout category="basic">
                <SpaceBetween>
                    <Filter
                        category="page"
                        options={[
                            { label: '일정', isSelected: pageContent === '일정', handleClick: () => setPageContent('일정') },
                            { label: '시즌 전적', isSelected: pageContent === '시즌 전적', handleClick: () => setPageContent('시즌 전적') }
                        ]}
                    />
                    <User category="simple" />
                </SpaceBetween>

                {pageContent === '일정' && (
                    <Calendar
                        handleOpenRead={() => {
                            setModalContent('read');
                            setIsOpenModal(true);
                        }}
                        handleOpenCreate={() => {
                            setModalContent('create');
                            setIsOpenModal(true);
                        }}
                    />
                )}

                {pageContent === '시즌 전적' && <Record />}
            </ContentLayout>

            <Modal category={modalContent} isOpen={isOpenModal} handleClose={() => setIsOpenModal(false)} handleUpdate={() => setModalContent('update')} />
        </PageLayout>
    );
}
