import React, { useRef, useEffect } from 'react';
import { FaShare } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import { PiBellRingingFill, PiShieldWarningFill } from 'react-icons/pi';
import { BiSolidBookContent } from "react-icons/bi";

interface GroupDropdownMenuProps {
    onClose: () => void;
}

const GroupDropdownMenu: React.FC<GroupDropdownMenuProps> = ({ onClose }) => {
    const menuRef = useRef<HTMLDivElement>(null);

    // Đóng menu khi nhấn ra ngoài
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    return (
        <div ref={menuRef} className="absolute top-[100%] mt-2 -right-24 bg-white border rounded-lg shadow-lg w-80 z-50">
            <ul className="p-2 text-left">
                <li className="px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer flex gap-2 items-center">
                    <BiSolidBookContent />Nội dung của bạn</li>
                <li className="px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer flex gap-2 justify-between items-center">
                    <div className='flex gap-2 items-center'>
                    <FaShare />Chia sẻ 
                    </div>
                    <IoIosArrowForward /></li>
                <li className="px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer flex gap-2 items-center">
                    <PiBellRingingFill />Quản lý thông báo</li>
                <li className="px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer flex gap-2 items-center">
                    <PiShieldWarningFill />Báo cáo nhóm</li>
            </ul>
        </div>
    );
};

export default GroupDropdownMenu;
