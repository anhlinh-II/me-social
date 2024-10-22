import React from 'react';
import GroupJoinedCard from './GroupJoinedCard';
import fakeGroups from '../fakeData';

const GroupJoined: React.FC = () => {
    const groups = fakeGroups;

    return (
        <div className='mt-5'>
            <h5 className="font-bold mb-6">Tất cả nhóm bạn đã tham gia</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {groups.map(group => (
                    <GroupJoinedCard key={group.id} imageUrl={group.imageUrl} groupName={group.groupName} />
                ))}
            </div>
        </div>
    );
};

export default GroupJoined;
