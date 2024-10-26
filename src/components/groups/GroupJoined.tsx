import React, { useEffect, useState } from 'react';
import GroupJoinedCard from './card/GroupJoinedCard';
import { GroupResponse } from '../../services/Types/Group';
import { getGroupsByUserId } from '../../services/Entities/GroupService';

const GroupJoined: React.FC = () => {
    const [groups, setGroups] = useState<GroupResponse[]>([]);
    const userId = 4;

    useEffect(() => {
        const fetchGroupsJoined = async () => {
            try {
                const token = localStorage.getItem('access_token');
                if (!token) {
                    throw new Error('No token found');
                }

                const response = await getGroupsByUserId(userId, 0);

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
            <h5 className="font-bold mb-6">Tất cả nhóm bạn đã tham gia</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {groups.length > 0 ? (
                    groups.map(group => (
                        <GroupJoinedCard key={group.id} imageUrl={group.imageUrl} groupName={group.name} />
                    ))
                ) : (
                    <>Bạn chưa tham gia nhóm nào</>
                )}
            </div>
        </div>
    );
};

export default GroupJoined;
