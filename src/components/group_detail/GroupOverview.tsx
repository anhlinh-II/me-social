

const GroupOverview = () => {
    // Dữ liệu mẫu các file phương tiện gần đây
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
        <div className="w-[65%] sticky top-12 h-fit rounded-lg bg-white shadow-md p-6 space-y-6">
            {/* Giới thiệu */}
            <div className="space-y-2">
                <h2 className="text-2xl font-bold">Giới thiệu về nhóm</h2>
                <p className="text-gray-600">
                    Đây là một nhóm thảo luận về các chủ đề công nghệ hiện đại và chia sẻ kinh nghiệm, tài liệu học tập. Tham gia cùng chúng tôi để cập nhật các thông tin mới nhất.
                </p>
            </div>

            {/* File phương tiện gần đây */}
            <div className="space-y-4 flex flex-col items-center">
                <h3 className="text-xl font-bold">File phương tiện gần đây</h3>
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
                <div className="">
                    <button className="bg-blue-100 text-blue-500 px-4 ps-20 pe-20 py-2 rounded-md hover:bg-blue-200">
                        Xem tất cả
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GroupOverview;
