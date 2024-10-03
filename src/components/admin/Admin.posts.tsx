import React, { useState } from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { IoMdAdd } from 'react-icons/io';
import { IoFilter } from 'react-icons/io5';
import ViewPostModal from '../modal/admin/post/Admin.post.view.modal';

interface DataType {
     key: string;
     author: string;
     caption: string;
     createdAt: Date | string;
     updatedAt: Date | string;

}

const data: DataType[] = [
     {
          key: '1',
          author: 'Anh Linh',
          caption: "hello i am anh linh and i am 20 yearsold, im currently a student at National Economics University which is know as one of the best university in vietnam when it comes to Econnomics. But you know, my major is Information Technology, haha that's funny right?",
          createdAt: new Date().toISOString(),          // Gán giá trị Date cho createdAt
          updatedAt: new Date().toISOString()
     },
     {
          key: '2',
          author: 'Thuy Van',
          caption: "hello i am anh linh and i am 20 yearsold, im currently a student at National Economics University which is know as one of the best university in vietnam when it comes to Econnomics.",
          createdAt: new Date().toISOString(),          // Gán giá trị Date cho createdAt
          updatedAt: new Date().toISOString()
     },
     {
          key: '3',
          author: 'Thuy Anh',
          caption: "hello i am thuy anh, im currently a student at National Economics University which is know as one of the best university in vietnam when it comes to Econnomics. But you know, my major is Information Technology, haha that's funny right?",
          createdAt: new Date().toISOString(),          // Gán giá trị Date cho createdAt
          updatedAt: new Date().toISOString()
     },
     {
          key: '4',
          author: 'Thuy Anh',
          caption: "hello i am thuy anh, im currently a student at National Economics University which is know as one of the best university in vietnam when it comes to Econnomics. But you know, my major is Information Technology, haha that's funny right?",
          createdAt: new Date().toISOString(),          // Gán giá trị Date cho createdAt
          updatedAt: new Date().toISOString()
     },
     {
          key: '5',
          author: 'Thuy Anh',
          caption: "hello i am thuy anh, im currently a student at National Economics University which is know as one of the best university in vietnam when it comes to Econnomics. But you know, my major is Information Technology, haha that's funny right?",
          createdAt: new Date().toISOString(),          // Gán giá trị Date cho createdAt
          updatedAt: new Date().toISOString()
     },
     {
          key: '6',
          author: 'Thuy Anh',
          caption: "hello i am thuy anh, im currently a student at National Economics University which is know as one of the best university in vietnam when it comes to Econnomics. But you know, my major is Information Technology, haha that's funny right?",
          createdAt: new Date().toISOString(),          // Gán giá trị Date cho createdAt
          updatedAt: new Date().toISOString()
     }
];

const PostsPanel: React.FC = () => {

     const [showView, setShowView] = useState<boolean>(false);

     const columns: TableProps<DataType>['columns'] = [
          {
               title: <span style={{ color: 'rgb(3 105 161)', fontWeight: "600", fontSize: "16px", }}>ID</span>,
               dataIndex: "key",
               key: "key"
          },
          {
               title: <span style={{ color: 'rgb(3 105 161)', fontWeight: "600", fontSize: "16px", }}>Author</span>,
               dataIndex: 'author',
               key: 'author',
               render: (text) => <a>{text}</a>,
          },
          {
               title: <span style={{ color: 'rgb(3 105 161)', fontWeight: "600", fontSize: "16px", }}>Created At</span>,
               dataIndex: 'createdAt',
               key: 'createdAt',
          },
          {
               title: <span style={{ color: 'rgb(3 105 161)', fontWeight: "600", fontSize: "16px", }}>Updated At</span>,
               dataIndex: 'updatedAt',
               key: 'updatedAt',
          },

          {
               title: <span style={{ color: 'rgb(3 105 161)', fontWeight: "600", fontSize: "16px", }}>Caption</span>,
               dataIndex: 'caption',
               key: 'caption',
          },
          {
               title: <span style={{ color: 'rgb(3 105 161)', fontWeight: "600", fontSize: "16px", }}>Action</span>,
               key: 'action',
               render: () => (
                    <Space size="middle">
                         <Button style={{ backgroundColor: "rgb(2 132 199)", color: "white", fontWeight: "600" }} onClick={() => setShowView(true)}>View</Button>
                         <Button style={{ backgroundColor: "rgb(245 158 11)", color: "white", fontWeight: "600" }}>Update</Button>
                         <Button style={{ backgroundColor: "rgb(190 24 93)", color: "white", fontWeight: "600" }}>Delete</Button>
                    </Space>
               ),
          },
     ];
     return (
          <div className='px-8 py-4 bg-sky-100 h-fit -mb-8 flex flex-col gap-4'>
               <div className='bg-white p-4 flex justify-between items-center'>
                    {/* left */}
                    <div className='text-sky-600'>
                         <div><strong>Total Posts:</strong> 100,200</div>
                    </div>
                    {/* right */}
                    <div className='flex gap-4'>
                         <input className='border-2 p-1 border-sky-700 rounded-xl indent-2 focus:outline-none' type="text" placeholder='search posts...' />
                         <Button style={{ border: "2px solid rgb(3 105 161)" }}><span><IoFilter /></span> Filter</Button>
                         <Button style={{ backgroundColor: "black", color: "white", fontWeight: "600", display: "flex", gap: "2px" }}> <span className='font-2xl'><IoMdAdd /></span>Add post</Button>
                    </div>
               </div>
               <Table<DataType>
                    bordered
                    columns={columns}
                    dataSource={data}
               />
               <ViewPostModal show={showView} setShow={setShowView} />
          </div>
     )
};

export default PostsPanel;