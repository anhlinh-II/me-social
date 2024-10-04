import React, { useState } from 'react';
import { FaFilePdf, FaFileWord, FaFileExcel, FaFileAlt } from 'react-icons/fa';

interface FileItem {
  name: string;
  size: string;
  type: 'pdf' | 'word' | 'excel' | 'other';
  uploadedDate: string;
}

const GroupFile: React.FC = () => {
  // fake data
  const initialFiles: FileItem[] = [
    { name: 'Báo cáo tài chính 2023.pdf', size: '1.2 MB', type: 'pdf', uploadedDate: '10/01/2024' },
    { name: 'Kế hoạch dự án.docx', size: '890 KB', type: 'word', uploadedDate: '15/01/2024' },
    { name: 'Thống kê doanh thu.xlsx', size: '2.3 MB', type: 'excel', uploadedDate: '20/01/2024' },
    { name: 'Hướng dẫn sử dụng hệ thống.pdf', size: '750 KB', type: 'pdf', uploadedDate: '25/01/2024' },
    { name: 'Danh sách thành viên.txt', size: '300 KB', type: 'other', uploadedDate: '30/01/2024' },
  ];

  const [files, setFiles] = useState<FileItem[]>(initialFiles);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<'name' | 'type'>('name');

  // icons
  const renderFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FaFilePdf className="text-red-500 w-8 h-8" />;
      case 'word':
        return <FaFileWord className="text-blue-500 w-8 h-8" />;
      case 'excel':
        return <FaFileExcel className="text-green-500 w-8 h-8" />;
      default:
        return <FaFileAlt className="text-gray-500 w-8 h-8" />;
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Sort
  const handleSort = (option: 'name' | 'type') => {
    setSortOption(option);
    const sortedFiles = [...files].sort((a, b) =>
      option === 'name' ? a.name.localeCompare(b.name) : a.type.localeCompare(b.type)
    );
    setFiles(sortedFiles);
  };

  // Filter based on search
  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddFile = () => {
    const newFile: FileItem = {
      name: 'Tài liệu mới.docx',
      size: '500 KB',
      type: 'word',
      uploadedDate: '01/02/2024',
    };
    setFiles([newFile, ...files]);
  };

  return (
    <div className='w-[70%] rounded-lg bg-white shadow-md p-6'>
      <div className='mb-5 flex justify-between items-center'>
        <span className='text-lg font-bold'>Files của nhóm</span>
        <button 
          onClick={handleAddFile} 
          className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'
        >
          Thêm file
        </button>
      </div>

      {/* Search bar */}
      <div className='flex items-center space-x-4 mb-4'>
        <input
          type="text"
          placeholder="Tìm kiếm file..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <select
          className="py-2 px-4 border border-gray-300 rounded-lg"
          value={sortOption}
          onChange={(e) => handleSort(e.target.value as 'name' | 'type')}
        >
          <option value="name">Sắp xếp theo tên</option>
          <option value="type">Sắp xếp theo loại</option>
        </select>
      </div>

      {/* Show files */}
      <div className="grid grid-cols-1 gap-4">
        {filteredFiles.map((file, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
            <div className="flex items-center">
              {/* Icons */}
              {renderFileIcon(file.type)}
              <div className="ml-4">
                <p className="text-sm font-semibold">{file.name}</p>
                <p className="text-xs text-gray-500">Kích thước: {file.size}</p>
              </div>
            </div>
            <div className="text-xs text-gray-500">{file.uploadedDate}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupFile;
