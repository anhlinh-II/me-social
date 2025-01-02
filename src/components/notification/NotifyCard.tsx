// NotifyCard.tsx
import React from 'react';
import { formatCreatedTime } from '../../utils/FormatTime';

interface NotifyCardProps {
    avatar: string;
    content: string;
    createdAt: string;
}

const NotifyCard: React.FC<NotifyCardProps> = ({ avatar, content, createdAt }) => {
    return (
        <div className="flex items-start p-4 border-b">
            <img className="w-14 h-14 rounded-full object-cover" src={avatar} alt="Avatar" />
            <div className="ml-4">
                <p className="text-md text-gray-800">{content}</p>
                <p className="text-xs text-gray-500">{formatCreatedTime(createdAt)}</p>
            </div>
        </div>
    );
};

export default NotifyCard;
