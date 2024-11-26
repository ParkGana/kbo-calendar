import Calendar from '../components/Calendar';
import PageLayout from '../components/layout/PageLayout';
import ContentLayout from '../components/layout/ContentLayout';
import Filter from '../components/common/Filter';
import SpaceBetween from '../components/alignment/SpaceBetween';
import { useState } from 'react';
import Record from '../components/Record';
import User from '../components/User';

export default function Home() {
    const [pageContent, setPageContent] = useState('일정');

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

                {pageContent === '일정' && <Calendar />}

                {pageContent === '시즌 전적' && <Record />}
            </ContentLayout>
        </PageLayout>
    );
}
