// NotifyCard.tsx
import React from 'react';

interface NotifyCardProps {
    avatar: string;
    content: string;
    createdAt: string;
}

const formatTime = (createdAt: string): string => {
    const date = new Date(createdAt);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return `${diffInSeconds} giây trước`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} phút trước`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} giờ trước`;
    return `${Math.floor(diffInSeconds / 86400)} ngày trước`;
};

const NotifyCard: React.FC<NotifyCardProps> = ({ avatar, content, createdAt }) => {
    return (
        <div className="flex items-start p-4 border-b">
            <img className="w-14 h-14 rounded-full object-cover" src={avatar} alt="Avatar" />
            <div className="ml-4">
                <p className="text-md text-gray-800">{content}</p>
                <p className="text-xs text-gray-500">{formatTime(createdAt)}</p>
            </div>
        </div>
    );
};

export default NotifyCard;
