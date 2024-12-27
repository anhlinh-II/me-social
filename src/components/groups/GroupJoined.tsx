import React, { useEffect } from 'react';
import GroupJoinedCard from './card/GroupJoinedCard';
import GroupCardPlaceholder from './placeholder/GroupCardPlaceholder';
import { useUser } from '../../utils/CustomHook';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { fetchGroupByUser } from '../../redux/slice/groupSlice';

const GroupJoined: React.FC = () => {
    // const [groups, setGroups] = useState<GroupResponse[]>([]);
    // const [loading, setLoading] = useState<boolean>(true);
    // const [error, setError] = useState<string | null>(null);
    // const userId = 4;

    const user = useUser();
    const dispatch = useAppDispatch();
    const { groups, isLoading, error } = useAppSelector(state => state.group)

    useEffect(() => {
        // const fetchGroupsJoined = async () => {
        //     try {
        //         const token = localStorage.getItem('access_token');
        //         if (!token) {
        //             throw new Error('No token found');
        //         }

        //         const response = await getGroupsByUserId(userId, 0);

        //         const groupsData = response?.result?.content ?? [];
        //         setGroups(groupsData);
        //         setLoading(false);
        //     } catch (err: any) {
        //         console.log(err);
        //         setError(err.message || 'Something went wrong');
        //         setLoading(false);
        //     }
        // };

        dispatch(fetchGroupByUser(Number(user.id)))

        // fetchGroupsJoined();
    }, [user.id, dispatch]);

    if (isLoading) {
        return <div className='mt-5'>
            <h5 className="font-bold mb-6">Các nhóm gợi ý cho bạn</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
                    <GroupCardPlaceholder key={index} />
                ))}
            </div>
        </div>
    }

    if (error) {
        return <div className='mt-5'>
            <h5 className="font-bold mb-6">Các nhóm gợi ý cho bạn</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
                    <GroupCardPlaceholder key={index} />
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
                        <GroupJoinedCard key={group.id} imageUrl={group.imageUrl} groupName={group.name} createdAt={group.createdAt} />
                    ))
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default GroupJoined;
