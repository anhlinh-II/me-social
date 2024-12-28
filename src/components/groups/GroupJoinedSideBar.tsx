import React, { useEffect } from 'react';
import GroupSimpleCard from './card/GroupSimpleCard';
import { Link, useNavigate } from 'react-router-dom';
import { IoAddOutline } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { fetchGroupByUser } from '../../redux/slice/groupSlice';
import { useUser } from '../../utils/CustomHook';

const GroupJoinedSideBar: React.FC = () => {

    const navigate = useNavigate();
    const { groups } = useAppSelector(state => state.group)
    const user = useUser();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchGroupByUser({userId: Number(user.id), pageNum: 0}))
    }, [dispatch])

    return (
        <div className='mb-[25%] me-2 hover:me-0'>
            <div className="flex flex-col gap-1 p-2">
                <button
                    onClick={() => navigate('/groups/create')}
                    className="border  hover:bg-sky-600 transition duration-300 px-5 rounded-lg h-2/3 py-2 bg-sky-500 text-white flex justify-center items-center">
                    <span className="text-xl pr-2 font-bold"><IoAddOutline /></span>
                    <span className="font-semibold">
                        Create Your Group
                    </span>
                </button>
                <div className='flex flex-row items-center justify-between mb-2 border-t border-gray-200'>
                    <h5 className="font-bold">Nhóm bạn đã tham gia</h5>
                    <button className='text-blue-600 p-2 rounded-lg hover:bg-blue-200'>
                        <Link to={`/groups/joined`}>Xem tất cả</Link>
                    </button>
                </div>
                {groups.map(group => (
                    <GroupSimpleCard key={group.id} imageUrl={group.imageUrl}
                        groupName={group.name} createdAt={group.createdAt} groupId={group.id} />
                ))}
            </div>
        </div>
    );
};

export default GroupJoinedSideBar;
