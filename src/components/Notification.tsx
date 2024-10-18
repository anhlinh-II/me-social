// Notification.tsx
import React from 'react';
import UserChatCard from './UserChatCard';

interface Notification {
    id: number;
    name: string;
    avatar: string;
    lastChat: string;
    lastChatSince: string;
}

interface NotificationProps {
    notifications: Notification[];
    onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ notifications, onClose }) => {
    return (
        <div className="absolute right-0 z-40 w-[360px] mt-2 bg-white rounded shadow-lg">
            <div className="p-2 text-xl bg-gray-100">Thông báo</div>
            <ul className="max-h-60 overflow-y-auto">
                {notifications.length > 0 ? (
                    notifications.map((notification) => (
                        <li key={notification.id} className="">
                            <UserChatCard
                                id={notification.id}
                                name={notification.name}
                                avatar={notification.avatar}
                                lastChat={notification.lastChat}
                                lastChatSince={notification.lastChatSince}
                            />
                        </li>
                    ))
                ) : (
                    <li className="p-2 text-center">Không có thông báo</li>
                )}
            </ul>
            <div className="p-2 text-center">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={onClose}
                >
                    Đóng
                </button>
            </div>
        </div>
    );
};

export default Notification;
