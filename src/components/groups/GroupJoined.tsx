import React from 'react';
import GroupJoinedCard from './GroupJoinedCard';

const GroupJoined: React.FC = () => {
    const groups = [
        { id: 1, name: 'Group 1', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s' },
        { id: 2, name: 'Group 2', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s' },
        { id: 3, name: 'Group 3', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s' },
        { id: 4, name: 'Group 4', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s' },
        { id: 5, name: 'Group 5', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s' },
        { id: 6, name: 'Group 6', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s' },
        { id: 7, name: 'Group 7', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s' },
        { id: 8, name: 'Group 8', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s' },
        { id: 9, name: 'Group 9', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s' },
        { id: 10, name: 'Group 10', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s' },
    ];

    return (
        <div className='mt-5'>
            <h5 className="font-bold mb-6">Tất cả nhóm bạn đã tham gia</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {groups.map(group => (
                    <GroupJoinedCard key={group.id} imageUrl={group.imageUrl} groupName={group.name} />
                ))}
            </div>
        </div>
    );
};

export default GroupJoined;
