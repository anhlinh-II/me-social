import { FaEarthAmericas, FaLock } from "react-icons/fa6";
import { GroupResponse } from "../../types/Group";
import { IoEyeSharp } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";

interface IProps {
    group: GroupResponse | undefined;
}

const GroupOverview = (props: IProps) => {
    const { group } = props;
    const mediaFiles = [
        {
            id: 1,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s',
            alt: 'Media 1',
        },
        {
            id: 2,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s',
            alt: 'Media 2',
        },
        {
            id: 3,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s',
            alt: 'Media 3',
        },
        {
            id: 4,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1GlOqZQeGxh87JJ8DiM8a_F-KcLiNt1qHw&s',
            alt: 'Media 4',
        },
    ];

    return (
        <div className="w-[40%] sticky -top-16 h-fit space-y-6">
            {/* Giới thiệu */}
            <div className="space-y-2 rounded-lg bg-white shadow-md p-6">
                <h2 className="text-lg font-bold">Giới thiệu về nhóm</h2>
                <p className="text-gray-600">
                    {group?.description}
                </p>

                <div className="flex items-start gap-2">
                    {group?.privacy === "PUBLIC" ? (
                        <>
                            <span className="relative top-1.5">
                                <FaEarthAmericas />
                            </span>
                            <span className="flex flex-col">
                                <span className="font-semibold">Công khai</span>
                                <span>Bất kỳ ai cũng có thể nhìn thấy mọi người trong nhóm và những gì họ đăng</span>
                            </span>
                        </>
                    ) : (
                        <>
                            <span className="relative top-1.5">
                                <FaLock />
                            </span>
                            <span className="flex flex-col">
                                <span className="font-semibold">Riêng tư</span>
                                <span>Chỉ thành viên mới có thể nhìn thấy mọi người trong nhóm và những gì họ đăng</span>
                            </span>
                        </>
                    )}
                </div>

                {group?.privacy === "PUBLIC" ?
                    (
                        <>
                            <span className="flex items-start gap-2">
                                <span className="relative top-1.5 text-lg"><IoEyeSharp /></span>
                                <span className="flex flex-col">
                                    <span className="font-semibold text-gray-700">Hiển thị</span>
                                    <span>Ai cũng có thể tìm thấy nhóm này.</span>
                                </span>
                            </span>
                        </>
                    ) : (
                        <>
                            <span className="flex items-start gap-2">
                                <span className="relative top-1.5"><FaLock /></span>
                                <span className="flex flex-col">
                                    <span className="font-semibold text-gray-700">Hiển thị</span>
                                    <span>Chỉ thành viên mới có thể nhìn thấy nhóm này.</span>
                                </span>
                            </span>X
                        </>
                    )

                }
                <div className="flex items-center gap-2">
                    <span className="text-md"><MdLocationPin /></span>
                    <span className="font-bold">{group?.location}</span>
                </div>
            </div>

            {/* File phương tiện gần đây */}
            <div className="space-y-4 flex flex-col rounded-lg bg-white shadow-md p-6">
                <h3 className="text-lg font-bold">File phương tiện gần đây</h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                    {mediaFiles.map((file) => (
                        <div key={file.id} className="relative">
                            <img
                                src={file.src}
                                alt={file.alt}
                                className="w-full h-32 object-cover rounded-md"
                            />
                            <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                                {file.alt}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="self-center">
                    <button className="bg-blue-100 text-blue-500 px-4 ps-20 pe-20 py-2 rounded-md hover:bg-blue-200">
                        Xem tất cả
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GroupOverview;
