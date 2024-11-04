import React, { useState } from 'react';

const GroupMedia: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'image' | 'video'>('image');
  const [loadedItems, setLoadedItems] = useState<boolean[]>(Array(6).fill(false));

  const mediaItems = [
    { type: 'image', src: 'https://vnn-imgs-f.vgcloud.vn/2018/05/27/04/real-liverpool2.jpg', alt: 'Image 1' },
    { type: 'image', src: 'https://example.com/image2.jpg', alt: 'Image 2' },
    { type: 'video', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
    { type: 'image', src: 'https://example.com/image3.jpg', alt: 'Image 3' },
    { type: 'video', src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
    { type: 'image', src: 'https://example.com/image4.jpg', alt: 'Image 4' },
  ];

  const filteredMediaItems = mediaItems.filter(item => item.type === activeTab);

  const handleLoad = (index: number) => {
    setLoadedItems(prev => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <div className='w-[70%] rounded-lg bg-white shadow-md p-6'>
      <div className='mb-5'>
        <span className='text-lg font-bold'>File phương tiện</span>
      </div>

      {/* Tab selection */}
      <div className='flex space-x-4 mb-4'>
        <button
          onClick={() => setActiveTab('image')}
          className={`py-2 px-4 ${activeTab === 'image' ? 'border-b-2 border-blue-500 font-medium text-black' : 'rounded-lg hover:bg-gray-200'}`}
        >
          Ảnh
        </button>
        <button
          onClick={() => setActiveTab('video')}
          className={`py-2 px-4 ${activeTab === 'video' ? 'border-b-2 border-blue-500 font-medium text-black' : 'rounded-lg hover:bg-gray-200'}`}
        >
          Video
        </button>
      </div>

      {/* Media grid */}
      <div className="grid grid-cols-5 sm:grid-cols-5 gap-2">
        {filteredMediaItems.map((item, index) => (
          <div key={index} className="relative w-full h-48">
            {!loadedItems[index] && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
            )}
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt || 'media'}
                className="w-full h-48 object-cover rounded-lg hover:opacity-80"
                onLoad={() => handleLoad(index)}
                style={{ display: loadedItems[index] ? 'block' : 'none' }}
              />
            ) : (
              <video
                controls
                src={item.src}
                className="w-full h-48 object-cover rounded-lg hover:opacity-80"
                onLoadedData={() => handleLoad(index)}
                style={{ display: loadedItems[index] ? 'block' : 'none' }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};



export default GroupMedia;
