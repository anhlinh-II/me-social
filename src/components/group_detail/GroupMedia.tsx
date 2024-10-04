import React, { useState } from 'react';

const GroupMedia: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'image' | 'video'>('image');

  const mediaItems = [
    { type: 'image', src: 'https://instagram.fhan20-1.fna.fbcdn.net/v/t39.30808-6/430818351_1034560898030450_5363521448821745273_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDI3eDE0Mjcuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan20-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=wnFSNF5kazcQ7kNvgHeV44W&_nc_gid=827766f3e7db4752ac9f155d5230a6a5&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzMxNzcwOTkwMTI1NjkxNzE3OA%3D%3D.3-ccb7-5&oh=00_AYC9mFEMbanq9mRDRnzqo8M_WjK1P28jQKXm_xUsW8MwKA&oe=66F852EE&_nc_sid=22de04', alt: 'Image 1' },
    { type: 'image', src: 'https://instagram.fhan20-1.fna.fbcdn.net/v/t39.30808-6/430818351_1034560898030450_5363521448821745273_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDI3eDE0Mjcuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan20-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=wnFSNF5kazcQ7kNvgHeV44W&_nc_gid=827766f3e7db4752ac9f155d5230a6a5&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzMxNzcwOTkwMTI1NjkxNzE3OA%3D%3D.3-ccb7-5&oh=00_AYC9mFEMbanq9mRDRnzqo8M_WjK1P28jQKXm_xUsW8MwKA&oe=66F852EE&_nc_sid=22de04', alt: 'Image 2' },
    { type: 'video', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
    { type: 'image', src: 'https://instagram.fhan20-1.fna.fbcdn.net/v/t39.30808-6/430818351_1034560898030450_5363521448821745273_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDI3eDE0Mjcuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan20-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=wnFSNF5kazcQ7kNvgHeV44W&_nc_gid=827766f3e7db4752ac9f155d5230a6a5&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzMxNzcwOTkwMTI1NjkxNzE3OA%3D%3D.3-ccb7-5&oh=00_AYC9mFEMbanq9mRDRnzqo8M_WjK1P28jQKXm_xUsW8MwKA&oe=66F852EE&_nc_sid=22de04', alt: 'Image 3' },
    { type: 'video', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
    { type: 'image', src: 'https://instagram.fhan20-1.fna.fbcdn.net/v/t39.30808-6/430818351_1034560898030450_5363521448821745273_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDI3eDE0Mjcuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fhan20-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=wnFSNF5kazcQ7kNvgHeV44W&_nc_gid=827766f3e7db4752ac9f155d5230a6a5&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzMxNzcwOTkwMTI1NjkxNzE3OA%3D%3D.3-ccb7-5&oh=00_AYC9mFEMbanq9mRDRnzqo8M_WjK1P28jQKXm_xUsW8MwKA&oe=66F852EE&_nc_sid=22de04', alt: 'Image 4' },
  ];

  const filteredMediaItems = mediaItems.filter(item => item.type === activeTab);

  return (
    <div className='w-[70%] rounded-lg bg-white shadow-md p-6'>
      <div className='mb-5'>
        <span className='text-lg font-bold'>File phương tiện</span>
      </div>
      
      {/* Tab selection */}
      <div className='flex space-x-4 mb-4'>
        <button
          onClick={() => setActiveTab('image')}
          className={`py-2 px-4 ${activeTab === 'image' ? 'py-2 px-4 border-b-2 border-blue-500 font-medium text-black' : 'rounded-lg hover:bg-gray-200'}`}
        >
          Ảnh
        </button>
        <button
          onClick={() => setActiveTab('video')}
          className={`py-2 px-4 ${activeTab === 'video' ? 'py-2 px-4 border-b-2 border-blue-500 font-medium text-black' : 'rounded-lg hover:bg-gray-200'}`}
        >
          Video
        </button>
      </div>

      {/* Media grid */}
      <div className="grid grid-cols-5 sm:grid-cols-5 gap-2">
        {filteredMediaItems.map((item, index) => (
          <div key={index} className="relative">
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt || 'media'}
                className="w-full h-48 object-cover rounded-lg hover:opacity-80"
              />
            ) : (
              <video
                controls
                src={item.src}
                className="w-full h-48 object-cover rounded-lg hover:opacity-80"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupMedia;
