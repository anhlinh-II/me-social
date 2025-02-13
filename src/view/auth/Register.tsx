import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TbBrandReact } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import signup from '../../assets/signup.png';
import { Button, Form, Input, message, Radio } from "antd";
import { callRegister } from "../../services/AuthService";
import { UserCreationRequest } from "../../types/User";
import { useState } from "react";

const Register = () => {
     const [loading, setLoading] = useState<boolean>(false)
     const [form] = Form.useForm();
     const navigate = useNavigate();

     const onFinish = async (values: UserCreationRequest) => {
          try {
               setLoading(true);
               const response = await callRegister(values);
               if (response && response.data && response.data.code === 1000) {
                    navigate(`/verify-otp/${values.email}`);
                    message.info("We are sending you an OTP, check your email.");    
               }
               if (!response.data) {
                    message.error("Email or username already exists. Try again!");
               }
          } catch (error: any) {
               if (error.code === 1002) {
                    message.error("Email or username already exists. Try again!");
               }
          }
     };

     return (
          <div className="flex h-screen justify-center items-center bg-gray-50 px-4 sm:px-6 md:px-8">
               <div className="relative flex flex-col sm:flex-row w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Form Section */}
                    <div className="w-full sm:w-1/2 p-8 overflow-y-auto no-scrollbar bg-sky-300 max-h-[calc(100vh-2rem)]">
                         <div className="mb-4 flex justify-between">
                              <div>
                                   <div className="flex items-center gap-2 text-xl text-sky-600 font-bold pb-2">
                                        <TbBrandReact className="text-sky-600 text-xl" />
                                        <span>Me Social</span>
                                   </div>
                                   <p className="text-3xl font-semibold">Sign Up</p>
                              </div>
                         </div>
                         <Form form={form} name="register" layout="vertical" onFinish={onFinish}>
                              <div className="flex flex-col sm:flex-row sm:gap-2 mb-4">
                                   <Form.Item
                                        className="w-full sm:w-1/2"
                                        label="Username"
                                        name="username"
                                        rules={[{ required: true, message: 'Please enter your username!' }, { min: 8, message: 'User must be at least 8 characters!' }]}
                                   >
                                        <Input placeholder="ex: anhlinh_II" />
                                   </Form.Item>
                                   <Form.Item
                                        className="w-full sm:w-1/2"
                                        label="Phone"
                                        name="phone"
                                        rules={[{ required: true, message: 'Please enter your phone!' }]}
                                   >
                                        <Input placeholder="ex: 0837422562" />
                                   </Form.Item>
                              </div>

                              <div className="flex flex-col sm:flex-row sm:gap-2 mb-4">
                                   <Form.Item
                                        className="w-full sm:w-1/2"
                                        label="First name"
                                        name="firstName"
                                        rules={[{ required: true, message: 'Please enter your first name!' }]}
                                   >
                                        <Input placeholder="ex: Thuy Anh" />
                                   </Form.Item>

                                   <Form.Item
                                        className="w-full sm:w-1/2"
                                        label="Last name"
                                        name="lastName"
                                        rules={[{ required: true, message: 'Please enter your last name!' }]}
                                   >
                                        <Input placeholder="ex: Nguyen" />
                                   </Form.Item>
                              </div>

                              <div className="flex flex-col sm:flex-row sm:gap-2 mb-4">
                                   <Form.Item
                                        className="w-full sm:w-1/2"
                                        label="Email"
                                        name="email"
                                        rules={[{ required: true, message: 'Please enter your email!' }, { type: 'email', message: 'Please enter a valid email!' }]}
                                   >
                                        <Input placeholder="ex: thuyvan@gmail.com" />
                                   </Form.Item>

                                   <Form.Item
                                        className="w-full sm:w-1/2"
                                        label="Password"
                                        name="password"
                                        rules={[{ required: true, message: 'Please enter your password!' }, { min: 8, message: 'Password must be at least 8 characters!' }]}
                                   >
                                        <Input.Password
                                             placeholder="Enter your password"
                                             iconRender={visible => (visible ? <FaEye /> : <FaEyeSlash />)}
                                        />
                                   </Form.Item>
                              </div>

                              <Form.Item label="Gender" name="gender" rules={[{ required: true, message: 'Please select your gender!' }]}>
                                   <Radio.Group>
                                        <Radio value="Male">Male</Radio>
                                        <Radio value="Female">Female</Radio>
                                        <Radio value="Other">Other</Radio>
                                   </Radio.Group>
                              </Form.Item>

                              <Form.Item>
                                   <Button loading={loading} htmlType="submit" className="w-full bg-sky-600 text-white py-6">
                                        Sign Up
                                   </Button>
                              </Form.Item>
                         </Form>
                         <div className="flex justify-center items-center mt-4">
                              <p>
                                   Already have an account?&nbsp;
                                   <Link to="/login" className="text-sky-600">Log In</Link>
                              </p>
                         </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full sm:w-1/2">
                         <img className="h-full w-full object-cover" src={signup} alt="sign up illustration" />
                    </div>
               </div>
          </div>
     );
};

export default Register;
