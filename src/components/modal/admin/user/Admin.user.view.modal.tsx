import React from 'react';
import {  Form, Input, Modal, Tag } from 'antd';
import { Avatar } from '@mui/material';
import avatar from '../../../../assets/jisoo.jpg'
import TextArea from 'antd/es/input/TextArea';

interface IProps {
     show: boolean;
     setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const userInfo = {
     username: 'Kim Jisoo',
     email: 'jisoo75@gmail.com',
     firstName: "Kim",
     lastName: "Jisoo",
     phone: "0837421572",
     gender: "MALE",
     location: "Nam Dinh, Viet Nam",
     createdAt: "2/4/2024",
     createdBy: "Anh Linh",
     updatedBy: "Anh Linh",
     updatedAt: "3/4/2024",
     age: 30,
     roles: ['admin', "admin group", "user"],
     bio: "this is the bio of the testing account hahaha heheheh hheheh heheooo i love you so much we don't talk any more, we don't talk any more, we don't talk any more like we used to do, we don't love any more, what was all of it for oh uh we don't talk anymore like we used to do",
     adminGroups: ["anhlinh fanclub", "thuyvan fanclub"],
     memberGroups: ["anhlinh fanclub", "thuyvan funclub", "thuyanh funclub"],
};

const ViewUserModal = (props: IProps) => {

     return (

          <>
               <Modal
                    title="View user details"
                    centered
                    open={props.show}
                    onOk={() => props.setShow(false)}
                    onCancel={() => props.setShow(false)}
                    cancelButtonProps={{ style: { display: 'none' } }}
                    okButtonProps={{ style: { padding: "16px 24px", marginRight: "10px" } }}
                    width={1000}
               >
                    <div className='p-4 flex flex-col'>
                         {/* row 1 */}
                         <div className='flex gap-4 items-center'>
                              {/* avatar email and name */}
                              <div className='flex gap-4 items-center justify-center w-1/2'>
                                   <div>
                                        <Avatar sx={{ width: "100px", height: "100px", border: "solid 2px rgb(14 165 233)" }} alt='avatar' src={avatar} />
                                   </div>
                                   <div className='flex flex-col gap-2'>
                                        <span className='font-bold text-3xl'>{userInfo.username}</span>
                                        <span>{userInfo.email}</span>
                                   </div>
                              </div>

                              <Form
                                   className='flex flex-col w-1/2'
                                   layout="horizontal"
                                   initialValues={userInfo}  // Khởi tạo giá trị từ thông tin người dùng
                              >
                                   <Form.Item className='mt-10' label="First name" name="firstName">
                                        <Input value={userInfo.firstName} readOnly /> {/* Hoặc dùng disabled */}
                                   </Form.Item>

                                   <Form.Item className='text-center' label="Last name" name="lastName">
                                        <Input value={userInfo.lastName} readOnly />
                                   </Form.Item>

                              </Form>
                         </div>
                         {/* row 2 */}
                         <div className='flex flex-1 gap-4'>
                              <Form
                                   className='flex flex-col justify-between w-1/2'
                                   layout="horizontal"
                                   initialValues={userInfo}  // Khởi tạo giá trị từ thông tin người dùng
                              >
                                   <Form.Item className='' label="Phone" name="Phone">
                                        <Input className='m-auto' value={userInfo.phone} readOnly /> {/* Hoặc dùng disabled */}
                                   </Form.Item>

                                   <Form.Item className='text-center' label="Gender" name="gender">
                                        <Input value={userInfo.gender} readOnly />
                                   </Form.Item>

                              </Form>
                              <Form
                                   className='flex flex-col justify-between w-1/2'
                                   layout="horizontal"
                                   initialValues={userInfo}  // Khởi tạo giá trị từ thông tin người dùng
                              >
                                   <Form.Item className='' label="Location" name="location">
                                        <Input className='m-auto' value={userInfo.location} readOnly /> {/* Hoặc dùng disabled */}
                                   </Form.Item>

                                   <Form.Item className='text-center' label="Age" name="age">
                                        <Input value={userInfo.age} readOnly />
                                   </Form.Item>
                              </Form>
                         </div>
                         {/* row 3 */}
                         <div className='flex flex-1 gap-4'>
                              <Form
                                   className='flex flex-col justify-between w-1/2'
                                   layout="horizontal"
                                   initialValues={userInfo}  // Khởi tạo giá trị từ thông tin người dùng
                              >
                                   <Form.Item className='' label="Created At" name="createdAt">
                                        <Input className='m-auto' value={userInfo.createdAt} readOnly /> {/* Hoặc dùng disabled */}
                                   </Form.Item>

                                   <Form.Item className='text-center' label="Updated At" name="updatedAt">
                                        <Input value={userInfo.updatedAt} readOnly />
                                   </Form.Item>

                              </Form>
                              <Form
                                   className='flex flex-col justify-between w-1/2'
                                   layout="horizontal"
                                   initialValues={userInfo}  // Khởi tạo giá trị từ thông tin người dùng
                              >
                                   <Form.Item className='' label="Created By" name="createdBy">
                                        <Input className='m-auto' value={userInfo.createdBy} readOnly /> {/* Hoặc dùng disabled */}
                                   </Form.Item>

                                   <Form.Item className='text-center' label="Updated By" name="updatedBy">
                                        <Input value={userInfo.updatedBy} readOnly />
                                   </Form.Item>
                              </Form>
                         </div>
                         {/* row 4 */}
                         <div className='flex flex-1 gap-4'>
                              <Form
                                   className='flex flex-col justify-between w-1/2'
                                   layout="horizontal"
                                   initialValues={userInfo}  // Khởi tạo giá trị từ thông tin người dùng
                              >
                                   <Form.Item className="" label="Roles" name="roles">
                                        <div className="m-auto border p-1 rounded-lg">
                                             {userInfo.roles.map((role) => {
                                                  return (
                                                       <>
                                                       {role === "admin" && <Tag color='processing'>{role}</Tag>}
                                                       {role === "admin group" && <Tag color='magenta'>{role}</Tag>}
                                                       {role === "user" && <Tag color='error'>{role}</Tag>}
                                                       </>
                                                  )
                                             })}
                                        </div>
                                   </Form.Item>

                                   <Form.Item className='text-center' label="Bio" name="bio">
                                        <TextArea rows={4} value={userInfo.bio} readOnly />
                                   </Form.Item>

                              </Form>
                              <Form
                                   className='flex flex-col justify-start w-1/2'
                                   layout="horizontal"
                                   initialValues={userInfo}  // Khởi tạo giá trị từ thông tin người dùng
                              >
                                   <Form.Item className='' label="Groups joined" name="memberGroups">
                                        <Input className='m-auto' value={userInfo.memberGroups} readOnly /> {/* Hoặc dùng disabled */}
                                   </Form.Item>

                                   <Form.Item className='text-center' label="Admin groups" name="adminGroups">
                                        <Input value={userInfo.adminGroups} readOnly />
                                   </Form.Item>
                              </Form>
                         </div>
                    </div>
               </Modal>
          </>
     );
};

export default ViewUserModal;