// Notification.tsx
import React from 'react';
import { PiDotsThreeOutlineFill } from 'react-icons/pi';
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
        <div className="fixed top-[42px] right-[2%] z-40 h-[90vh] w-[360px] mt-2 bg-white rounded-lg shadow-lg">
            <div className='flex  justify-between items-center pe-4'>
						<p className="text-2xl ms-4 mt-2 mb-4 font-bold">Thông báo</p>
						<div className={`w-[32px] h-[32px] hover:bg-[#F3F4F6] rounded-full flex items-center justify-center`}>
							<PiDotsThreeOutlineFill style={{ fontSize: "22px", color: "black", cursor: "pointer" }}/>
						</div>
					</div>
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
