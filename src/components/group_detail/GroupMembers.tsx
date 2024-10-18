import { GoDotFill } from "react-icons/go"
import UserCard from "../user/UserCard";


const GroupMembers = () => {

    const users = [
        {
            name: 'Alice Johnson',
            avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
            description: 'Graphic Designer',
            mutualFriends: 12,
            location: 'New York, USA',
            joinedSince: 'June 2018'
        },
        {
            name: 'Mark Stevenson',
            avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
            description: 'Full-Stack Developer',
            mutualFriends: 8,
            location: 'London, UK',
            joinedSince: 'March 2019'
        },
        {
            name: 'Clara Rodriguez',
            avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
            description: 'Marketing Specialist',
            mutualFriends: 20,
            location: 'Madrid, Spain',
            joinedSince: 'January 2020'
        },
        {
            name: 'David Kim',
            avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
            description: 'Software Engineer',
            mutualFriends: 15,
            location: 'Seoul, South Korea',
            joinedSince: 'October 2017'
        },
        {
            name: 'Emma Wong',
            avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
            description: 'Data Analyst',
            mutualFriends: 9,
            location: 'Singapore',
            joinedSince: 'April 2019'
        },
        {
            name: 'Liam O\'Brien',
            avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
            description: 'Project Manager',
            mutualFriends: 7,
            location: 'Dublin, Ireland',
            joinedSince: 'August 2020'
        },
        {
            name: 'Sophia Garcia',
            avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
            description: 'UX/UI Designer',
            mutualFriends: 18,
            location: 'Mexico City, Mexico',
            joinedSince: 'May 2018'
        },
        {
            name: 'James Patel',
            avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
            description: 'Cloud Architect',
            mutualFriends: 14,
            location: 'Mumbai, India',
            joinedSince: 'February 2017'
        },
    ];

    return (
        <div className="w-[50%] rounded-lg bg-white shadow-md p-6">
            <div className="flex items-center gap-2">
                <span className="text-lg font-bold">Thành viên</span>
                <GoDotFill className="text-[10px]" />
                <span>9723429234</span>
            </div>
            <span>Các thành viên đã tham gia sẽ hiển thị ở đây.</span>
            <div className="w-full mx-auto my-5 mb-6">
                <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                />
            </div>
            <div className="my-5">
                <hr className="w-full"></hr>
            </div>

            {/* Admins */}
            <div className="flex items-center gap-2">
                <span className="text-md font-bold">Quản trị viên & người kiểm duyệt</span>
                <GoDotFill className="text-[10px]" />
                <span>3</span>
            </div>
            <div className="flex flex-col w-full items-start gap-2">
                {users.map((user, index) => (
                    <UserCard
                        key={index}
                        name={user.name}
                        avatar={user.avatar}
                        description={user.description}
                        mutualFriends={user.mutualFriends}
                        location={user.location}
                        joinedSince={user.joinedSince}
                    />
                ))}
            </div>
            <div className="self-center">
                <button className="bg-blue-100 text-blue-500 w-full px-4 ps-20 pe-20 py-2 rounded-md hover:bg-blue-200">
                    Xem tất cả
                </button>
            </div>
            <div className="my-5">
                <hr className="w-full"></hr>
            </div>

            {/* Members have common */}
            <div className="flex items-center gap-2">
                <span className="text-md font-bold">Thành viên có điểm chung</span>
                <GoDotFill className="text-[10px]" />
                <span>765</span>
            </div>
            <div className="flex flex-col w-full items-start gap-2">
                {users.map((user, index) => (
                    <UserCard
                        key={index}
                        name={user.name}
                        avatar={user.avatar}
                        description={user.description}
                        mutualFriends={user.mutualFriends}
                        location={user.location}
                        joinedSince={user.joinedSince}
                    />
                ))}
            </div>
            <div className="self-center">
                <button className="bg-blue-100 text-blue-500 w-full px-4 ps-20 pe-20 py-2 rounded-md hover:bg-blue-200">
                    Xem tất cả
                </button>
            </div>
            <div className="my-5">
                <hr className="w-full"></hr>
            </div>

            {/* Members near you */}
            <div className="flex items-center gap-2">
                <span className="text-md font-bold">Thành viên ở gần bạn</span>
                <GoDotFill className="text-[10px]" />
                <span>45</span>
            </div>
            <div className="flex flex-col w-full items-start gap-2">
                {users.map((user, index) => (
                    <UserCard
                        key={index}
                        name={user.name}
                        avatar={user.avatar}
                        description={user.description}
                        mutualFriends={user.mutualFriends}
                        location={user.location}
                        joinedSince={user.joinedSince}
                    />
                ))}
            </div>
            <div className="self-center">
                <button className="bg-blue-100 text-blue-500 w-full px-4 ps-20 pe-20 py-2 rounded-md hover:bg-blue-200">
                    Xem tất cả
                </button>
            </div>
            <div className="my-5">
                <hr className="w-full"></hr>
            </div>

            {/* Members just joined group */}
            <div className="flex items-center gap-2">
                <span className="text-md font-bold">Mới vào nhóm</span>
            </div>
            <span>Danh sách này bao gồm những người đã tham gia nhóm và những người đang xem trước nhóm. Bất kỳ người nào được mời và được phê duyệt đều có thể xem trước nội dung trong nhóm.</span>
            <div className="flex flex-col w-full items-start gap-2">
                {users.map((user, index) => (
                    <UserCard
                        key={index}
                        name={user.name}
                        avatar={user.avatar}
                        description={user.description}
                        mutualFriends={user.mutualFriends}
                        location={user.location}
                        joinedSince={user.joinedSince}
                    />
                ))}
            </div>

            <div className="self-center">
                <button className="bg-blue-100 text-blue-500 w-full px-4 ps-20 pe-20 py-2 rounded-md hover:bg-blue-200">
                    Xem tất cả
                </button>
            </div>
            <div className="my-5">
                <hr className="w-full"></hr>
            </div>

        </div>
    )
}

export default GroupMembers