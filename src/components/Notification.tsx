// Notification.tsx
import React from 'react';
import NotifyCard from './NotifyCard';

interface Notification {
    id: number;
    avatar: string;
    content: string;
    createdAt: string;
}

interface NotificationProps {
    notifications: Notification[];
    onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ notifications }) => {
    return (
        <div className="absolute top-[42px] right-[-100px] z-40 w-[360px] mt-2 bg-white rounded-lg shadow-lg">
            <div className="p-2 text-2xl font-bold">Thông báo</div>
            <ul className="max-h-[80vh] overflow-y-auto">
                {notifications.length > 0 ? (
                    notifications.map((notification) => (
                        <li key={notification.id} className="">
                            <NotifyCard
                                avatar={notification.avatar}
                                content={notification.content}
                                createdAt={notification.createdAt}
                            />
                        </li>
                    ))
                ) : (
                    <li className="p-2 text-center">Không có thông báo</li>
                )}
            </ul>
        </div>
    );
};

export default Notification;
