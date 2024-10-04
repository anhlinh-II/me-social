import React, { useState } from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { IoMdAdd } from 'react-icons/io';
import { IoFilter } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import ViewGroupModal from '../modal/admin/group/Admin.group.view.modal';

interface DataType {
     key: string;
     groupName: string;
     mode: string[];
     createdBy: string;
     location: string;

}



const data: DataType[] = [
     {
          key: '1',
          groupName: 'Anh Linh fan club',
          mode: ["public"],
          createdBy: "anh linh",        // Gán giá trị Date cho createdAt
          location: "nam dinh"
     },
     {
          key: '2',
          groupName: 'Thuy Van fan club',
          mode: ["public"],
          createdBy: "anh linh",        // Gán giá trị Date cho createdAt
          location: "Mien Dong nuoc Anh"
     }, {
          key: '3',
          groupName: 'Thuy Anh fan club',
          mode: ["private"],
          createdBy: "Thuy Van",        // Gán giá trị Date cho createdAt
          location: "Nam Tu Liem"
     }, {
          key: '4',
          groupName: 'Thuy Anh fan club',
          mode: ["private"],
          createdBy: "Thuy Van",        // Gán giá trị Date cho createdAt
          location: "Nam Tu Liem"
     }, {
          key: '5',
          groupName: 'Thuy Anh fan club',
          mode: ["private"],
          createdBy: "Thuy Van",        // Gán giá trị Date cho createdAt
          location: "Nam Tu Liem"
     }, {
          key: '6',
          groupName: 'Thuy Anh fan club',
          mode: ["private"],
          createdBy: "Thuy Van",        // Gán giá trị Date cho createdAt
          location: "Nam Tu Liem"
     }, {
          key: '7',
          groupName: 'Thuy Van fan club',
          mode: ["public"],
          createdBy: "anh linh",        // Gán giá trị Date cho createdAt
          location: "Mien Dong nuoc Anh"
     }, {
          key: '8',
          groupName: 'Thuy Van fan club',
          mode: ["public"],
          createdBy: "anh linh",        // Gán giá trị Date cho createdAt
          location: "Mien Dong nuoc Anh"
     },
];

const GroupsPanel: React.FC = () => {

     const [showView, setShowView] = useState<boolean>(false);
     const navigate = useNavigate();

     const columns: TableProps<DataType>['columns'] = [
          {
               title: <span style={{ color: 'rgb(3 105 161)', fontWeight: "600", fontSize: "16px", }}>ID</span>,
               dataIndex: "key",
               key: "key"
          },
          {
               title: <span style={{ color: 'rgb(3 105 161)', fontWeight: "600", fontSize: "16px", }}>Group Name</span>,
               dataIndex: 'groupName',
               key: 'groupName',
               render: (text) => <a>{text}</a>,
          },
          {
               title: <span style={{ color: 'rgb(3 105 161)', fontWeight: "600", fontSize: "16px", }}>Mode</span>,
               dataIndex: 'mode',
               key: 'mode',
               render: (_, { mode }) => (
                    <>
                         {mode.map((item) => {
                              let color = item === "public" ? 'blue' : (item === "private" ? 'magenta' : '');
                              return (
                                   <Tag color={color} key={item}>
                                        {item.toUpperCase()}
                                   </Tag>
                              );
                         })}
                    </>
               ),
          },
          {
               title: <span style={{ color: 'rgb(3 105 161)', fontWeight: "600", fontSize: "16px", }}>Created By</span>,
               dataIndex: 'createdBy',
               key: 'createdBy',
          },
          {
               title: <span style={{ color: 'rgb(3 105 161)', fontWeight: "600", fontSize: "16px", }}>Location</span>,
               dataIndex: 'location',
               key: 'location',
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
                         <div><strong>Total Groups:</strong> 100,200,117</div>
                    </div>
                    {/* right */}
                    <div className='flex gap-4'>
                         <input className='border-2 p-1 border-sky-700 rounded-xl indent-2 focus:outline-none' type="text" placeholder='search groups...' />
                         <Button style={{ border: "2px solid rgb(3 105 161)" }}><span><IoFilter /></span> Filter</Button>
                         <Button style={{ backgroundColor: "black", color: "white", fontWeight: "600", display: "flex", gap: "2px" }} onClick={() => navigate('/groups/create')}> <span className='font-2xl'><IoMdAdd /></span>Add group</Button>
                    </div>
               </div>
               <Table<DataType>
                    bordered
                    columns={columns}
                    dataSource={data}
               />
               <ViewGroupModal show={showView} setShow={setShowView} />
          </div>
     )
};

export default GroupsPanel;