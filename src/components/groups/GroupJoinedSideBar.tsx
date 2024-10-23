import React from 'react';
import GroupSimpleCard from './GroupSimpleCard';
import fakeGroups from '../fakeData';
import { Link, useNavigate } from 'react-router-dom';
import { IoAddOutline } from 'react-icons/io5';

const GroupJoinedSideBar: React.FC = () => {

	const navigate = useNavigate();
    const groups = fakeGroups;

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
                        groupName={group.groupName} lastActivitySince={group.lastActivitySince}/>
                ))}
            </div>
        </div>
    );
};

export default GroupJoinedSideBar;
