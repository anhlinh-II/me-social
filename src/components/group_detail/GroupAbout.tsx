import { FaEarthAmericas, FaLock, FaLocationDot, FaClock, FaUserGroup, FaCalendar } from "react-icons/fa6"


const GroupAbout = () => {

    return (
        <div className="w-[50%] top-20 h-fit space-y-6">
            {/* Giới thiệu */}
            <div className="space-y-2 rounded-lg bg-white shadow-md p-6">
                <h3 className="text-lg font-bold">Giới thiệu về nhóm</h3>
                <hr className="w-full"></hr>
                <p className="text-gray-600">
                    Đây là một nhóm thảo luận về các chủ đề công nghệ hiện đại và chia sẻ kinh nghiệm, tài liệu học tập. Tham gia cùng chúng tôi để cập nhật các thông tin mới nhất.
                </p>

                <span className="flex items-start gap-2">
                    <span className="relative top-1.5"><FaEarthAmericas /></span>
                    <span className="flex flex-col">
                        <span className="font-semibold">Công khai</span>
                        <span>Bất kỳ ai cũng có thể nhìn thấy mọi người trong nhóm và những gì họ đăng</span>
                    </span>
                </span>


                <span className="flex items-start gap-2">
                    <span className="relative top-1.5"><FaLock /></span>
                    <span className="flex flex-col">
                        <span className="font-semibold text-gray-700">Hiển thị</span>
                        <span>Ai cũng có thể tìm thấy nhóm này.</span>
                    </span>
                </span>

                <div className="flex items-start gap-2 mt-2">
                    <span className="relative top-1.5"><FaLocationDot /></span>
                    <span className="">
                        Hà Nội, Việt Nam
                    </span>
                </div>

                <span className="flex items-start gap-2">
                    <span className="relative top-1.5"><FaClock /></span>
                    <span className="flex flex-col">
                        <span className="font-semibold">Lịch sử</span>
                        <span>Đã tạo nhóm vào 28 tháng 9, 202. Lần gần nhất đổi tên là vào 29 tháng 9, 2024. </span>
                    </span>
                </span>
            </div>

            <div className="space-y-4 flex flex-col rounded-lg bg-white shadow-md p-6">
                <h3 className="text-lg font-bold">Thành viên</h3>
                <hr className="w-full"></hr>
                <div className="flex gap-1">
                    <div>
                        <img src="https://vnn-imgs-f.vgcloud.vn/2018/05/27/04/real-liverpool2.jpg" alt="" className="rounded-full w-[40px] h-[40px]"/>
                    </div>
                    <div>
                        <img src="https://scontent.fhph1-1.fna.fbcdn.net/v/t39.30808-6/451418121_1493503281258736_1067539081919969742_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_Zd01_0VGpYQ7kNvgGeWDHD&_nc_ht=scontent.fhph1-1.fna&oh=00_AYBHEAthlGeQj62ElU3i3-wL8Pg2Yne60mzoift-ZQxEKw&oe=66F439A4" alt="" className="rounded-full w-[40px] h-[40px]"/>
                    </div>
                    <div>
                        <img src="https://scontent.fhph1-2.fna.fbcdn.net/v/t39.30808-6/438804782_1493180808269191_794376572904014893_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lTxR81NaTf4Q7kNvgFzm-S-&_nc_ht=scontent.fhph1-2.fna&oh=00_AYDAhKVXDXWRQG-Mh7sccB6jZ3ycM328lsE2XtLyp7YZ8w&oe=66F4962C" alt="" className="rounded-full w-[40px] h-[40px]"/>
                    </div>
                    <div>
                        <img src="https://scontent.fhph1-2.fna.fbcdn.net/v/t39.30808-6/455247901_1566647544255850_2979140626005352086_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4-KFw0tZwUcQ7kNvgGumm25&_nc_ht=scontent.fhph1-2.fna&_nc_gid=Asbht8uRsRLY2BRiW23YGVl&oh=00_AYDM0qHWcYLmyQMBgVWgdSZrq18-BfCkiSVM48uxu2J4qA&oe=66F4AD8A" alt="" className="rounded-full w-[40px] h-[40px]"/>
                    </div>
                    <div>
                        <img src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/453530783_122139111278271357_7821382139692007781_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGVYCrHea9BWuasolp3wxEepob1SPeef2mmhvVI955_aVq_K1dKTut4jiGP6RqFHvDCmz5bHEMx_1Vk1Z05Mw8H&_nc_ohc=X85O_LA4FDEQ7kNvgEbufUx&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AwTPZE99EqppBlK1EehgY-i&oh=00_AYCu4aytf_B1AKRr0KnLb2a0fRUms9fX4g5fXAsf6qwLzA&oe=67020306" alt="" className="rounded-full w-[40px] h-[40px]"/>
                    </div>
                    <div>
                        <img src="https://scontent.fhph2-1.fna.fbcdn.net/v/t39.30808-6/449159350_1997633627359685_3033974697510613913_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=bxRqxaMid2wQ7kNvgHATpZV&_nc_ht=scontent.fhph2-1.fna&_nc_gid=AHEGGND76WGF-xDKG-J38eH&oh=00_AYA93jCpdrlbdmG2Rb17SPhdqG4gYE0mdrh595lfGFcw9w&oe=66F4BAE6" alt="" className="rounded-full w-[40px] h-[40px]"/>
                    </div>
                    <div>
                        <img src="https://nld.mediacdn.vn/zoom/594_371/291774122806476800/2024/5/22/367665968-1043122716604056-338-6755-5396-1698222857-1716365427555912026234-126-0-595-750-crop-17163656793691494473476.jpg" alt="" className="rounded-full w-[40px] h-[40px]"/>
                    </div>
                </div>
                <div>Messi, Neymar và 953 người bạn khác đã tham gia</div>
                <div className="flex gap-1">
                    <div>
                        <img src="https://instagram.fhan20-1.fna.fbcdn.net/v/t39.30808-6/430818351_1034560898030450_5363521448821745273_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDI3eDE0Mjcuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan20-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=wnFSNF5kazcQ7kNvgHeV44W&_nc_gid=827766f3e7db4752ac9f155d5230a6a5&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzMxNzcwOTkwMTI1NjkxNzE3OA%3D%3D.3-ccb7-5&oh=00_AYC9mFEMbanq9mRDRnzqo8M_WjK1P28jQKXm_xUsW8MwKA&oe=66F852EE&_nc_sid=22de04" alt="" className="rounded-full w-[40px] h-[40px]"/>
                    </div>
                    <div>
                        <img src="https://scontent.fhph1-2.fna.fbcdn.net/v/t39.30808-6/455247901_1566647544255850_2979140626005352086_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4-KFw0tZwUcQ7kNvgGumm25&_nc_ht=scontent.fhph1-2.fna&_nc_gid=Asbht8uRsRLY2BRiW23YGVl&oh=00_AYDM0qHWcYLmyQMBgVWgdSZrq18-BfCkiSVM48uxu2J4qA&oe=66F4AD8A" alt="" className="rounded-full w-[40px] h-[40px]"/>
                    </div>
                    <div>
                        <img src="https://scontent.fhph1-1.fna.fbcdn.net/v/t39.30808-6/451418121_1493503281258736_1067539081919969742_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_Zd01_0VGpYQ7kNvgGeWDHD&_nc_ht=scontent.fhph1-1.fna&oh=00_AYBHEAthlGeQj62ElU3i3-wL8Pg2Yne60mzoift-ZQxEKw&oe=66F439A4" alt="" className="rounded-full w-[40px] h-[40px]"/>
                    </div>
                </div>
                <div>Ronaldo là quản trị viên. Messi và Linh là người kiểm duyệt</div>
                <div className="self-center">
                    <button className="bg-blue-100 text-blue-500 px-4 ps-20 pe-20 py-2 rounded-md hover:bg-blue-200">
                        Xem tất cả
                    </button>
                </div>
            </div>
            <div className="space-y-4 flex flex-col rounded-lg bg-white shadow-md p-6">
                <h3 className="text-lg font-bold">Hoạt động</h3>
                <hr className="w-full"></hr>
                <span className="flex items-start gap-2">
                    <span className="relative top-1.5"><FaCalendar /></span>
                    <span className="flex flex-col">
                        <span className="font-semibold">Hôm nay có 24 bải viết mới</span>
                        <span>953 trong tháng trước</span>
                    </span>
                </span>


                <span className="flex items-start gap-2">
                    <span className="relative top-1.5"><FaUserGroup /></span>
                    <span className="flex flex-col">
                        <span className="font-semibold text-gray-700">Tổng cộng 9.197.478 thành viên</span>
                        <span>+ 9537 trong tuần qua.</span>
                    </span>
                </span>

                <div className="flex items-start gap-2 mt-2">
                    <span className="relative top-1.5"><FaClock /></span>
                    <span className="">
                        Ngày tạo: 7 năm trước
                    </span>
                </div>
            </div>
        </div>
    )
}

export default GroupAbout