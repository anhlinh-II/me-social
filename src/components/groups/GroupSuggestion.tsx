import React from 'react';
import GroupSuggestCard from './GroupSuggestCard';
import fakeGroups from '../fakeData';

const GroupSuggestion: React.FC = () => {
    const groups = fakeGroups

    return (
        <div className='mt-5'>
            <h5 className="font-bold mb-6">Các nhóm gợi ý cho bạn</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {groups.map(group => (
                    <GroupSuggestCard key={group.id} imageUrl={group.imageUrl} groupName={group.groupName} />
                ))}
            </div>
        </div>
    );
};

export default GroupSuggestion;
