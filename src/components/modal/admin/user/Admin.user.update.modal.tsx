import React, { useRef, useState } from 'react';
import { Button, Form, Input, Modal, Tag } from 'antd';
import { Avatar } from '@mui/material';
import avatar from '../../../../assets/jisoo.jpg'
import TextArea from 'antd/es/input/TextArea';
import { IoIosCamera } from 'react-icons/io';
import { TbTriangleInvertedFilled } from 'react-icons/tb';

interface IProps {
     show: boolean;
     setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UserInfo {
     avatar: string
     username: string;
     email: string;
     firstName: string;
     lastName: string;
     phone: string;
     gender: "MALE" | "FEMALE" | "OTHER"; // Assuming gender can be one of these values
     location: string;
     createdAt: string; // Date strings or can be `Date` if it's actually a Date object
     createdBy: string;
     updatedBy: string;
     updatedAt: string;
     age: number;
     roles: string[]; // Array of roles as strings
     bio: string;
     adminGroups: string[]; // Array of admin group names
     memberGroups: string[]; // Array of member group names
};


const initialUserInfo: UserInfo = {
     avatar: avatar,
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

const UpdateUserModal = (props: IProps) => {

     const [userInfo, setUserInfo] = useState<UserInfo>(initialUserInfo)

     const inputFile = useRef<HTMLInputElement | null>(null);

     const handleOpenFileBrowser = () => {
          inputFile?.current?.click();
     }

     const handleChooseFile = (event: React.ChangeEvent<HTMLInputElement>) => {

          const file = event.target.files?.[0]; // Safely access the first file
          if (file) {
               setUserInfo((prevState) => ({
                    ...prevState,
                    avatar: URL.createObjectURL(file),
               }));
          }
     };

     const handleOnchange = (e: any) => {
          const { name, value } = e.target;
          setUserInfo((prevState) => ({
               ...prevState,
               [name]: value,  // Dynamically update the correct field
          }));
     };

     return (
          <>
               <Modal
                    title="Update user information"
                    centered
                    open={props.show}
                    onOk={() => props.setShow(false)}
                    onCancel={() => props.setShow(false)}
                    cancelButtonProps={{ style: { padding: "16px 24px", marginRight: "10px", border: " rgb(14 165 233) 1px solid" } }}
                    okButtonProps={{ style: { padding: "16px 24px", marginRight: "10px" } }}
                    width={1000}
                    okText="Save Changes"
                    cancelText="Discard Changes"
               >
                    <div className='p-4 flex flex-col'>
                         {/* row 1 */}
                         <div className='flex gap-4 items-center '>
                              {/* avatar email and name */}
                              <div className='flex gap-10 items-center justify-center w-1/2'>
                                   <div className='relative flex flex-col gap-2'>
                                        <Avatar sx={{ width: "100px", height: "100px", border: "solid 2px rgb(14 165 233)" }} alt='avatar' src={userInfo.avatar} />
                                        <button onClick={() => handleOpenFileBrowser()} className='group/item absolute bottom-0 right-1 cursor-pointer text-lg p-1 rounded-full bg-gray-300'>
                                             <IoIosCamera />
                                             <span className="absolute -top-12 left-6 font-semibold text-sm invisible group-hover/item:delay-200 group-hover/item:visible px-4 py-1 decoration-blue-100 bg-gray-200 rounded">
                                                  Edit Avatar
                                                  <span className='absolute -bottom-2 rotate-4 text-gray-200 left-0'><TbTriangleInvertedFilled /></span>
                                             </span>
                                        </button>
                                        <input type='file' id='file'
                                             onChange={handleChooseFile}
                                             ref={inputFile}
                                             style={{ display: 'none' }}
                                        />
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
                                        <Input name="firstName" onChange={handleOnchange} value={userInfo.firstName} /> {/* Hoặc dùng disabled */}
                                   </Form.Item>

                                   <Form.Item className='text-center' label="Last name" name="lastName">
                                        <Input value={userInfo.lastName} />
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
                                   <Form.Item className='' label="Phone" name="phone">
                                        <Input name="phone" onChange={handleOnchange} className='m-auto' value={userInfo.phone} /> {/* Hoặc dùng disabled */}
                                   </Form.Item>

                                   <Form.Item className='text-center' label="Gender" name="gender">
                                        <Input value={userInfo.gender} />
                                   </Form.Item>

                              </Form>
                              <Form
                                   className='flex flex-col justify-between w-1/2'
                                   layout="horizontal"
                                   initialValues={userInfo}  // Khởi tạo giá trị từ thông tin người dùng
                              >
                                   <Form.Item className='' label="Location" name="location">
                                        <Input name="location" onChange={handleOnchange} className='m-auto' value={userInfo.location} /> {/* Hoặc dùng disabled */}
                                   </Form.Item>

                                   <Form.Item className='text-center' label="Age" name="age">
                                        <Input value={userInfo.age} />
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
                                        <Input name="createdAt" onChange={handleOnchange} className='m-auto' value={userInfo.createdAt} /> {/* Hoặc dùng disabled */}
                                   </Form.Item>

                                   <Form.Item className='text-center' label="Updated At" name="updatedAt">
                                        <Input value={userInfo.updatedAt} />
                                   </Form.Item>

                              </Form>
                              <Form
                                   className='flex flex-col justify-between w-1/2'
                                   layout="horizontal"
                                   initialValues={userInfo}  // Khởi tạo giá trị từ thông tin người dùng
                              >
                                   <Form.Item className='' label="Created By" name="createdBy">
                                        <Input name="createdBy" onChange={handleOnchange} className='m-auto' value={userInfo.createdBy} /> {/* Hoặc dùng disabled */}
                                   </Form.Item>

                                   <Form.Item className='text-center' label="Updated By" name="updatedBy">
                                        <Input value={userInfo.updatedBy} />
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
                                             {userInfo.roles.map((role, index) => {
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
                                        <TextArea rows={4} value={userInfo.bio} />
                                   </Form.Item>

                              </Form>
                              <Form
                                   className='flex flex-col justify-start w-1/2'
                                   layout="horizontal"
                                   initialValues={userInfo}  // Khởi tạo giá trị từ thông tin người dùng
                              >
                                   <Form.Item className='' label="Groups joined" name="memberGroups">
                                        <Input className='m-auto' value={userInfo.memberGroups} /> {/* Hoặc dùng disabled */}
                                   </Form.Item>

                                   <Form.Item className='text-center' label="Admin groups" name="adminGroups">
                                        <Input value={userInfo.adminGroups} />
                                   </Form.Item>
                              </Form>
                         </div>
                    </div>
               </Modal>
          </>
     );
};

export default UpdateUserModal;