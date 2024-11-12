import Calendar from '../components/Calendar';
import PageLayout from '../components/layout/PageLayout';
import ContentLayout from '../components/layout/ContentLayout';
import Filter from '../components/common/Filter';
import SpaceBetween from '../components/alignment/SpaceBetween';
import { useState } from 'react';
import Record from '../components/Record';
import User from '../components/User';

export default function Home() {
    const [pageState, setPageState] = useState('일정');

    return (
        <PageLayout>
            <ContentLayout>
                <SpaceBetween>
                    <Filter
                        options={[
                            { label: '일정', handleClick: () => setPageState('일정'), isSelected: pageState === '일정' },
                            { label: '시즌 전적', handleClick: () => setPageState('시즌 전적'), isSelected: pageState === '시즌 전적' }
                        ]}
                    />
                    <User />
                </SpaceBetween>

                {pageState === '일정' && <Calendar />}

                {pageState === '시즌 전적' && <Record />}
            </ContentLayout>
        </PageLayout>
    );
}
