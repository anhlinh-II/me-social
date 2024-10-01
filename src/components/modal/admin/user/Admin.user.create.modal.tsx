import React, { useRef, useState } from 'react';
import { Form, Input, Modal, Tag } from 'antd';
import { Avatar } from '@mui/material';
import defaultAvatar from '../../../../assets/kaitokid.jpg'
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
     gender: "MALE" | "FEMALE" | "OTHER" | ""; // Assuming gender can be one of these values
     location: string;
     createdAt: string; // Date strings or can be `Date` if it's actually a Date object
     createdBy: string;
     updatedBy: string;
     updatedAt: string;
     age?: number;
     roles: string[]; // Array of roles as strings
     bio: string;
     adminGroups: string[]; // Array of admin group names
     memberGroups: string[]; // Array of member group names
};


const initialUserInfo: UserInfo = {
     avatar: defaultAvatar,
     username: "",
     email: "",
     firstName: "",
     lastName: "",
     phone: "",
     gender: "",
     location: "",
     createdAt: "",
     createdBy: "",
     updatedBy: "",
     updatedAt: "",
     age: 0,
     roles: [],
     bio: "",
     adminGroups: [],
     memberGroups: [],
};

const CreateUserModal = (props: IProps) => {

     const [userInfo, setUserInfo] = useState<UserInfo>(initialUserInfo)
     const [buttonDisabled, setButtonDisabled] = useState(true);

     const inputFile = useRef<HTMLInputElement | null>(null);

     const handleOpenFileBrowser = () => {
          inputFile?.current?.click();
     }
     const [form] = Form.useForm();
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
          setUserInfo((prevState) => {
               const updatedUserInfo = {
                    ...prevState,
                    [name]: value,  // Dynamically update the correct field
               };
               isFormValid(updatedUserInfo); // Check validity with the updated userInfo
               return updatedUserInfo;
          });
     };
     
     const isFormValid = (updatedUserInfo: UserInfo) => {
          const { username, email, firstName, lastName, phone, gender, location, age } = updatedUserInfo;
     
          const isValid = username && email && firstName && lastName && phone && gender && location && age;
          setButtonDisabled(!isValid); // Set button disabled state
     };
     

     return (
          <>
               <Modal
                    title="Create new user"
                    centered
                    open={props.show}
                    onOk={() => form.submit()}
                    onCancel={() => props.setShow(false)}
                    okButtonProps={{
                         style: {
                              padding: "16px 24px",
                              marginRight: "10px"
                         },
                         disabled: buttonDisabled
                    }}
                    cancelButtonProps={{
                         style: {
                              padding: "16px 24px",
                              marginRight: "10px",
                              border: " rgb(14 165 233) 1px solid"
                         },
                    }}
                    width={1000}
                    okText="Create"
               >
                    <div className='p-4 flex flex-col'>
                         {/* row 1 */}
                         <div className='flex gap-4 items-center '>
                              {/* avatar email and name */}
                              <div className='flex  items-center justify-end gap-10 w-1/2'>
                                   <div className='relative flex flex-col gap-2 '>
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
                                   <Form
                                        className='flex flex-col w-[60%]'
                                        layout="horizontal"
                                        initialValues={userInfo}  // Khởi tạo giá trị từ thông tin người dùng
                                        onFinish={(values) => alert(values)}
                                   >
                                        <Form.Item className='mt-10' label="User name" name="username" rules={[
                                             {
                                                  required: true,
                                             }
                                        ]}>
                                             <Input name="username" onChange={handleOnchange} value={userInfo.username} /> {/* Hoặc dùng disabled */}
                                        </Form.Item>

                                        <Form.Item className='text-center' label="Email" name="email" rules={[
                                             {
                                                  required: true,
                                             }
                                        ]}>
                                             <Input name='email' onChange={handleOnchange} value={userInfo.email} />
                                        </Form.Item>

                                   </Form>
                              </div>

                              <Form
                                   className='flex flex-col w-1/2'
                                   layout="horizontal"
                                   initialValues={userInfo}  // Khởi tạo giá trị từ thông tin người dùng
                              >
                                   <Form.Item className='mt-10' label="First name" name="firstName" rules={[
                                        {
                                             required: true,
                                        }
                                   ]}>
                                        <Input name="firstName" onChange={handleOnchange} value={userInfo.firstName} /> {/* Hoặc dùng disabled */}
                                   </Form.Item>

                                   <Form.Item className='text-center' label="Last name" name="lastName" rules={[
                                        {
                                             required: true,
                                        }
                                   ]}>
                                        <Input name="lastName" onChange={handleOnchange} value={userInfo.lastName} />
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
                                   <Form.Item className='' label="Phone" name="phone"
                                        rules={[{
                                             required: true,
                                        }]}>
                                        <Input name="phone" onChange={handleOnchange} className='m-auto' value={userInfo.phone} /> {/* Hoặc dùng disabled */}
                                   </Form.Item>

                                   <Form.Item className='text-center' label="Gender" name="gender" rules={[{
                                             required: true,
                                        }]}>
                                        <Input name='gender' onChange={handleOnchange} value={userInfo.gender} />
                                   </Form.Item>

                              </Form>
                              <Form
                                   className='flex flex-col justify-between w-1/2'
                                   layout="horizontal"
                                   initialValues={userInfo}  // Khởi tạo giá trị từ thông tin người dùng
                              >
                                   <Form.Item className='' label="Location" name="location" rules={[{
                                             required: true,
                                        }]}>
                                        <Input name="location" onChange={handleOnchange} className='m-auto' value={userInfo.location} /> {/* Hoặc dùng disabled */}
                                   </Form.Item>

                                   <Form.Item className='text-center' label="Age" name="age" rules={[{
                                             required: true,
                                        }]}>
                                        <Input name='age' onChange={handleOnchange} value={userInfo.age} />
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
                                        <Input name='updatedAt' onChange={handleOnchange} value={userInfo.updatedAt} />
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
                                        <Input name='updatedBy' onChange={handleOnchange} value={userInfo.updatedBy} />
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
                                             {
                                                  userInfo.roles.length === 0 && <Tag color='processing'>Add roles for user</Tag>
                                             }
                                             {
                                                  userInfo.roles.map((role) => {
                                                       return (
                                                            <>
                                                                 {role === "admin" && <Tag color='processing'>{role}</Tag>}
                                                                 {role === "admin group" && <Tag color='magenta'>{role}</Tag>}
                                                                 {role === "user" && <Tag color='error'>{role}</Tag>}
                                                            </>
                                                       )
                                                  })
                                             }
                                        </div>
                                   </Form.Item>

                                   <Form.Item className='text-center' label="Bio" name="bio">
                                        <TextArea required name='bio' onChange={handleOnchange} rows={userInfo.bio === "" ? 1 : 4} value={userInfo.bio} />
                                   </Form.Item>

                              </Form>
                              <Form
                                   className='flex flex-col justify-start w-1/2'
                                   layout="horizontal"
                                   initialValues={userInfo}  // Khởi tạo giá trị từ thông tin người dùng
                              >
                                   <Form.Item className='' label="Member groups" name="memberGroups">
                                        <div className="m-auto border p-1 rounded-lg">
                                             {
                                                  userInfo.memberGroups.length === 0 && <Tag color='processing'>Add group for user</Tag>
                                             }
                                             {
                                                  userInfo.memberGroups.map((group) => {
                                                       return (
                                                            <>
                                                                 {group === "admin" && <Tag color='processing'>{group}</Tag>}
                                                                 {group === "admin group" && <Tag color='magenta'>{group}</Tag>}
                                                                 {group === "user" && <Tag color='error'>{group}</Tag>}
                                                            </>
                                                       )
                                                  })
                                             }
                                        </div>
                                   </Form.Item>

                                   <Form.Item className='text-center' label="Admin groups" name="adminGroups">
                                        <div className="m-auto border p-1 rounded-lg">
                                             {
                                                  userInfo.adminGroups.length === 0 && <Tag color='processing'>Add group for user to becom admin</Tag>
                                             }
                                             {
                                                  userInfo.adminGroups.map((group) => {
                                                       return (
                                                            <>
                                                                 {group === "admin" && <Tag color='processing'>{group}</Tag>}
                                                                 {group === "admin group" && <Tag color='magenta'>{group}</Tag>}
                                                                 {group === "user" && <Tag color='error'>{group}</Tag>}
                                                            </>
                                                       )
                                                  })
                                             }
                                        </div>
                                   </Form.Item>
                              </Form>
                         </div>
                    </div>
               </Modal>
          </>
     );
};

export default CreateUserModal;