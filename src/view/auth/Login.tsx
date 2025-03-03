import { Button, Divider, Form, Input, message, notification } from 'antd';
import { useEffect, useState } from 'react';
import { TbBrandReact } from 'react-icons/tb';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { callLogin, callRegister, callResendOtp, callVerifyOtp } from '../../services/AuthService';
import { setUserLoginInfo } from '../../redux/slice/accountSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hook';

const Login = () => {

     const navigate = useNavigate();
     const [isSubmit, setIsSubmit] = useState(false);
     const dispatch = useDispatch();
     const isAuthenticated = useAppSelector(state => state.account.isAuthenticated);

     useEffect(() => {
          //đã login => redirect to '/'
          if (isAuthenticated === true) {
               navigate('/');
          }
     }, [])

     const onFinish = async (values: any) => {
          const { username, password } = values;
          setIsSubmit(true);

          try {
               const res = await callLogin(username, password);

               if (res?.data?.code === 1000) {
                    const email = res?.data?.result?.user.email as string;
                    if (res?.data?.result?.user.active === false) {
                         navigate(`/verify-otp/${email}`);
                         callResendOtp(email);
                         return;
                    }
                    const accessToken = res.data.result?.access_token;
                    if (accessToken) {
                         localStorage.setItem('access_token', accessToken);
                    }
                    dispatch(setUserLoginInfo(res.data.result));
                    message.success('Đăng nhập tài khoản thành công!');
                    navigate('/')
               } else {
                    notification.error({
                         message: "Đăng nhập không thành công",
                         description: res?.data?.message || "Kiểm tra tên người dùng hoặc mật khẩu của bạn",
                         duration: 5,
                    });
                    console.log("đăng nhập không thành công")
               }
          } catch (error) {
               console.error('Login error:', error);
               notification.error({
                    message: "Login Error",
                    description: "An error occurred during login. Please try again.",
                    duration: 5,
               });
          } finally {
               setIsSubmit(false);
          }
     };



     return (
          <div className="flex justify-center items-center h-screen bg-slate-200">
               <div className="h-[550px] w-[450px] rounded-xl border-2 bg-sky-200 shadow-gray-800 p-6">
                    <div className="mb-6">
                         <div className='flex justify-start items-center gap-2 text-xl text-sky-600 font-bold pb-2'>
                              <TbBrandReact className='text-sky-600 text-xl' />
                              <span className=''>Me Social</span>
                         </div>
                         <p className='text-3xl font-semibold'>Sign In</p>
                    </div>
                    <Form
                         name="basic"
                         onFinish={onFinish}
                         autoComplete="off"
                    >
                         <Form.Item
                              className="mb-4"
                              labelCol={{ span: 24 }} //whole column
                              label="Email"
                              name="username"
                              rules={[{ required: true, message: 'This field must be filled!' }]}
                         >
                              <Input className='py-2' placeholder='Enter your email, username or phone number' />
                         </Form.Item>

                         <Form.Item
                              labelCol={{ span: 24 }} //whole column
                              label="Password"
                              name="password"
                              rules={[{ required: true, message: 'Password must be filled!' }]}
                              className="relative mb-6"
                         >
                              <Input.Password className='py-2' placeholder='Enter your password' />
                         </Form.Item>

                         <p className='flex justify-center mb-8 hover:text-sky-600 cursor-pointer'>Forgot your password?</p>

                         <Form.Item>
                              <Button onClick={onFinish} className="w-full bg-sky-600 text-white py-5 rounded-md hover:bg-sky-700 transition duration-300" type="primary" htmlType="submit" loading={isSubmit}>
                                   Đăng nhập
                              </Button>
                         </Form.Item>
                         <Divider>Or</Divider>
                         <p className='flex justify-center mt-6'>Don't have an account? &nbsp;
                              <Link to={'/register'}>
                                   <span className='underline cursor-pointer'>Sign Up</span>
                              </Link>
                         </p>
                    </Form>
               </div>
          </div>
     )
}

export default Login;