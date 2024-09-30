import React, { useState } from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { IoMdAdd } from 'react-icons/io';
import { IoFilter } from 'react-icons/io5';
import ViewUserModal from '../modal/Admin.user.view.modal';
import UpdateUserModal from '../modal/Admin.user.update.modal';
import DeleteUserModal from '../modal/Admin.user.delete.modal';

interface DataType {
     key: string;
     name: string;
     age: number;
     email: string;
     tags: string[];
}



const data: DataType[] = [
     {
          key: '1',
          name: 'Anh Linh',
          age: 29,
          email: "annlinh@gmail.com",
          tags: ['admin', 'user'],
     },
     {
          key: '2',
          name: 'Thuy Van',
          age: 28,
          email: "thuyvan@gmail.com",
          tags: ['admin', 'admin group'],
     },
     {
          key: '3',
          name: 'Thuy Anh',
          age: 1,
          email: "thuyanh@gmail.com",
          tags: ['user', 'admin'],
     },
     {
          key: '4',
          name: 'Thuy Anh',
          age: 1,
          email: "thuyanh@gmail.com",
          tags: ['user', 'admin'],
     }, {
          key: '5',
          name: 'Thuy Anh',
          age: 1,
          email: "thuyanh@gmail.com",
          tags: ['user', 'admin'],
     }, {
          key: '6',
          name: 'Thuy Anh',
          age: 1,
          email: "thuyanh@gmail.com",
          tags: ['user', 'admin'],
     }, {
          key: '7',
          name: 'Thuy Anh',
          age: 1,
          email: "thuyanh@gmail.com",
          tags: ['user', 'admin'],
     }, {
          key: '8',
          name: 'Thuy Anh',
          age: 1,
          email: "thuyanh@gmail.com",
          tags: ['user', 'admin'],
     }, {
          key: '9',
          name: 'Thuy Anh',
          age: 1,
          email: "thuyanh@gmail.com",
          tags: ['user', 'admin'],
     }, {
          key: '10',
          name: 'Thuy Anh',
          age: 1,
          email: "thuyanh@gmail.com",
          tags: ['user', 'admin'],
     }, {
          key: '11',
          name: 'Thuy Anh',
          age: 1,
          email: "thuyanh@gmail.com",
          tags: ['user', 'admin'],
     }, {
          key: '12',
          name: 'Thuy Anh',
          age: 1,
          email: "thuyanh@gmail.com",
          tags: ['user', 'admin'],
     }, {
          key: '13',
          name: 'Thuy Anh',
          age: 1,
          email: "thuyanh@gmail.com",
          tags: ['user', 'admin'],
     }, {
          key: '14',
          name: 'Thuy Anh',
          age: 1,
          email: "thuyanh@gmail.com",
          tags: ['user', 'admin'],
     }, {
          key: '15',
          name: 'Thuy Anh',
          age: 1,
          email: "thuyanh@gmail.com",
          tags: ['user', 'admin'],
     }, {
          key: '16',
          name: 'Thuy Anh',
          age: 1,
          email: "thuyanh@gmail.com",
          tags: ['user', 'admin'],
     }, {
          key: '17',
          name: 'Thuy Anh',
          age: 1,
          email: "thuyanh@gmail.com",
          tags: ['user', 'admin'],
     }, {
          key: '18',
          name: 'Thuy Anh',
          age: 1,
          email: "thuyanh@gmail.com",
          tags: ['user', 'admin'],
     },
];

const UsersPanel: React.FC = () => {

     const [showViewModal, setShowViewModal] = useState<boolean>(false);
     const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);
     const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

     const columns: TableProps<DataType>['columns'] = [
          {
               title: <span style={{ color: 'rgb(3 105 161)', fontWeight: "600", fontSize: "16px", }}>ID</span>,
               dataIndex: "key",
               key: "key"
          },
          {
               title: <span style={{ color: 'rgb(3 105 161)', fontWeight: "600", fontSize: "16px", }}>Name</span>,
               dataIndex: 'name',
               key: 'name',
               render: (text) => <a>{text}</a>,
          },
          {
               title: <span style={{ color: 'rgb(3 105 161)', fontWeight: "600", fontSize: "16px", }}>Email</span>,
               dataIndex: 'email',
               key: 'email',
          },
          {
               title: <span style={{ color: 'rgb(3 105 161)', fontWeight: "600", fontSize: "16px", }}>Age</span>,
               dataIndex: 'age',
               key: 'age',
          },
          {
               title: <span style={{ color: 'rgb(3 105 161)', fontWeight: "600", fontSize: "16px", }}>Roles</span>,
               key: 'tags',
               dataIndex: 'tags',
               render: (_, { tags }) => (
                    <>
                         {tags.map((tag) => {
                              let color = tag === "admin" ? 'blue' : (tag === "admin group" ? 'yellow' : 'magenta');
                              return (
                                   <Tag color={color} key={tag}>
                                        {tag.toUpperCase()}
                                   </Tag>
                              );
                         })}
                    </>
               ),
          },
          {
               title: <span style={{ color: 'rgb(3 105 161)', fontWeight: "600", fontSize: "16px", }}>Action</span>,
               key: 'action',
               render: () => (
                    <Space size="middle">
                         <Button
                              style={{ backgroundColor: "rgb(2 132 199)", color: "white", fontWeight: "600" }}
                              onClick={() => setShowViewModal(true)}
                         >
                              View
                         </Button>
                         <Button
                              style={{ backgroundColor: "rgb(245 158 11)", color: "white", fontWeight: "600" }}
                              onClick={() => setShowUpdateModal(true)}
                         >
                              Update
                         </Button>
                         <Button
                              style={{ backgroundColor: "rgb(190 24 93)", color: "white", fontWeight: "600" }}
                              onClick={() => setShowDeleteModal(true)}
                         >
                              Delete
                         </Button>
                    </Space>
               ),
          },
     ];
     return (
          <div className='px-8 py-4 bg-sky-100 h-fit -mb-8 flex flex-col gap-4'>
               <div className='bg-white p-4 flex justify-between items-center'>
                    {/* left */}
                    <div className='flex gap-4 text-sky-600'>
                         <div><strong>All Users:</strong> 100,200,117</div>
                         <div><strong>Active Users: </strong> 20,425,234</div>
                    </div>
                    {/* right */}
                    <div className='flex gap-4'>
                         <input className='border-2 p-1 border-sky-700 rounded-xl indent-2 focus:outline-none' type="text" placeholder='search users...' />
                         <Button style={{ border: "2px solid rgb(3 105 161)" }}><span><IoFilter /></span> Filter</Button>
                         <Button style={{ backgroundColor: "black", color: "white", fontWeight: "600", display: "flex", gap: "2px" }}> <span className='font-2xl'><IoMdAdd /></span>Add user</Button>
                    </div>
               </div>
               <Table<DataType>
                    bordered
                    columns={columns}
                    dataSource={data}
               />
               <ViewUserModal
                    show={showViewModal}
                    setShow={setShowViewModal}
               />
               <UpdateUserModal
                    show={showUpdateModal}
                    setShow={setShowUpdateModal}
               />
               <DeleteUserModal
                    show={showDeleteModal}
                    setShow={setShowDeleteModal}
               />
          </div>
     )
};

export default UsersPanel;