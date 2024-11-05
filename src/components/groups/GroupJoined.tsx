import React, { useEffect, useState } from 'react';
import GroupJoinedCard from './card/GroupJoinedCard';
import { GroupResponse } from '../../types/Group';
import { getGroupsByUserId } from '../../services/GroupService';
import GroupCardPlaceholder from './placeholder/GroupCardPlaceholder';

const GroupJoined: React.FC = () => {
    const [groups, setGroups] = useState<GroupResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
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
                setLoading(false);
            } catch (err: any) {
                console.log(err);
                setError(err.message || 'Something went wrong');
                setLoading(false);
            }
        };

        fetchGroupsJoined();
    }, [userId]);

    if (loading) {
        return <div className='mt-5'>
                    <h5 className="font-bold mb-6">Các nhóm gợi ý cho bạn</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_) => (
                            <GroupCardPlaceholder />
                        ))}
                    </div>
                </div>
    }

    if (error) {
        return <div className='mt-5'>
                    <h5 className="font-bold mb-6">Các nhóm gợi ý cho bạn</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_) => (
                            <GroupCardPlaceholder />
                        ))}
                    </div>
                </div>
    }

    return (
        <div className='mt-5'>
            <h5 className="font-bold mb-6">Tất cả nhóm bạn đã tham gia</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {groups.length > 0 ? (
                    groups.map(group => (
                        <GroupJoinedCard key={group.id} imageUrl={group.imageUrl} groupName={group.name} />
                    ))
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default GroupJoined;
