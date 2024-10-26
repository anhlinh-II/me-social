import React, { useEffect, useState } from 'react';
import GroupSuggestCard from './card/GroupSuggestCard';
import { getSuggestedGroups } from '../../services/Entities/GroupService';
import { GroupResponse } from '../../services/Types/Group';

const GroupSuggestion: React.FC = () => {
    const [groups, setGroups] = useState<GroupResponse[]>([]);
    const userId = 4;

    useEffect(() => {
        const fetchGroupsJoined = async () => {
            try {
                const token = localStorage.getItem('access_token');
                if (!token) {
                    throw new Error('No token found');
                }

                const response = await getSuggestedGroups(userId, 0);

                const groupsData = response?.result?.content ?? [];
                setGroups(groupsData);
            } catch (err: any) {
                console.log(err)
            }
        };

        fetchGroupsJoined();
    }, [userId]);

    return (
        <div className='mt-5'>
            <h5 className="font-bold mb-6">Các nhóm gợi ý cho bạn</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {groups.length > 0 ? (
                    groups.map(group => (
                        <GroupSuggestCard key={group.id} imageUrl={group.imageUrl} groupName={group.name} />
                    ))
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default GroupSuggestion;
