// NotificationDropdown.tsx
import React from 'react';

interface Notification {
    id: number;
    message: string;
}

interface NotificationDropdownProps {
    notifications: Notification[];
    onClose: () => void;
}

// Well, theres nothing much
const NotificationDropdown: React.FC<NotificationDropdownProps> = ({ notifications }) => {
    return (
        <div className="absolute right-0 z-40 w-64 mt-2 bg-white border rounded shadow-lg">
            <div className="p-2 text-xl border-b bg-gray-100">Thông báo</div>
            <ul className="max-h-60 overflow-y-auto">
                {notifications.length > 0 ? (
                    notifications.map((notification) => (
                        <li key={notification.id} className="p-2 hover:bg-gray-100">
                            {notification.message}
                        </li>
                    ))
                ) : (
                    <li className="p-2 text-center">Không có thông báo</li>
                )}
            </ul>
        </div>
    );
};

export default NotificationDropdown;
