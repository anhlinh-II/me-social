
import { FaEarthAmericas } from 'react-icons/fa6';

const GroupHeader = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full bg-blue-100 shadow-sm p-4 mb-5">
            <img
                src="https://instagram.fhan20-1.fna.fbcdn.net/v/t39.30808-6/430818351_1034560898030450_5363521448821745273_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDI3eDE0Mjcuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan20-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=wnFSNF5kazcQ7kNvgHeV44W&_nc_gid=827766f3e7db4752ac9f155d5230a6a5&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzMxNzcwOTkwMTI1NjkxNzE3OA%3D%3D.3-ccb7-5&oh=00_AYC9mFEMbanq9mRDRnzqo8M_WjK1P28jQKXm_xUsW8MwKA&oe=66F852EE&_nc_sid=22de04"
                alt="Group"
                className="rounded-md object-cover w-[1120px] h-[440px]"
            />
            {/* Group Info */}
            <div className="flex items-center space-x-4">
                <div className='mt-5'>
                    <h1 className="text-xl font-bold">Spring Boot + React or whatever you're learning</h1>
                    <span>< FaEarthAmericas className="text-gray-600 text-sm font-normal align-center" />Nhóm Công khai</span>
                    <span className='ms-5'>9,53 triệu thành viên</span>
                </div>
                <div className="flex-1">
                    <div className="flex space-x-2 mt-2">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Tham gia nhóm
                        </button>
                        <button className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300">
                            Chia sẻ
                        </button>
                        <button className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-400">
                            + Mời
                        </button>
                    </div>
                </div>
            </div>

            {/* Horizontal Menu */}
            <div className="mt-4">
                <div className="flex space-x-6 border-b">
                    <button className="py-2 px-4 border-b-2 border-blue-500 font-medium">
                        Giới thiệu
                    </button>
                    <button className="py-2 px-4 rounded-md hover:text-blue-500 hover:bg-blue-300">Thảo luận</button>
                    <button className="py-2 px-4 rounded-md hover:text-blue-500 hover:bg-blue-300">Mọi người</button>
                    <button className="py-2 px-4 rounded-md hover:text-blue-500 hover:bg-blue-300">File phương tiện</button>
                    <button className="py-2 px-4 rounded-md hover:text-blue-500 hover:bg-blue-300">File</button>
                </div>

                {/* Search Input */}
                <div className="mt-4">
                    <input
                        type="text"
                        placeholder="Tìm kiếm"
                        className="w-full p-2 border rounded-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default GroupHeader;
