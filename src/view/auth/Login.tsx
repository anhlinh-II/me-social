import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { TbBrandReact } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Login = () => {

     const [showEye, setShowEye] = useState<boolean>(false);

     return (
          <div className="flex justify-center items-center h-screen">
               <div className="h-[550px] w-[500px] rounded border-2 shadow-gray-800 p-6">
                    <div className="mb-6">
                         <div className='flex justify-start items-center gap-2 text-xl text-sky-600 font-bold pb-2'>
                              <TbBrandReact className='text-sky-600 text-xl' />
                              <span className=''>Me Social</span>
                         </div>
                         <p className='text-3xl font-semibold'>Sign In</p>
                    </div>
                    <form>
                         <div className="mb-4">
                              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                              <input
                                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-600 focus:border-2"
                                   type="email"
                                   id="email"
                                   placeholder="Enter your email, username or phone number"
                                   required
                              />
                         </div>

                         <div className="relative mb-6">
                              <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                              <input
                                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-600 focus:border-2"
                                   type={showEye ? "text" : "password"}
                                   id="password"
                                   placeholder="Enter your password"
                                   required
                              >

                              </input>
                              <div
                                   className='absolute right-4 top-11 cursor-pointer hover:text-sky-600'
                                   onClick={() => setShowEye(!showEye)}
                              >
                                   {showEye ? <FaEyeSlash /> : <FaEye />}
                                   
                              </div>
                         </div>

                         <p className='flex justify-center mb-8 hover:text-sky-600 cursor-pointer'>Forgot your password?</p>

                         <button
                              type="submit"
                              className="w-full bg-sky-600 text-white py-2 rounded-md hover:bg-sky-700 transition duration-300"
                         >
                              Sign In
                         </button>

                         <p className='flex justify-center mt-6'>Don't have an account? &nbsp;
                              <Link to={'/register'}>
                                   <span className='underline cursor-pointer'>Sign Up</span>
                              </Link>
                         </p>
                    </form>
               </div>
          </div>
     )
}

export default Login;