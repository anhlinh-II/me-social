import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TbBrandReact } from "react-icons/tb";
import { Link } from "react-router-dom";

const Register = () => {

     const [showEye, setShowEye] = useState<boolean>(false);

     return (
          <div className="flex h-screen justify-center items-center">
               <div className="h-[600px] w-[400px] rounded border-2 shadow-gray-800 p-6">
                    <div className="mb-6">
                         <div className='flex justify-start items-center gap-2 text-xl text-sky-600 font-bold pb-2'>
                              <TbBrandReact className='text-sky-600 text-xl' />
                              <span className=''>Me Social</span>
                         </div>
                         <p className='text-3xl font-semibold'>Sign Up</p>
                    </div>
                    <form>
                         <div className="mb-4">
                              <label className="block text-gray-700 mb-2" htmlFor="email">Full Name</label>
                              <input
                                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-600 focus:border-2"
                                   type="text"
                                   id="fullName"
                                   placeholder="ex: thuyveo2004"
                                   required
                              />
                         </div>
                         <div className="mb-4">
                              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                              <input
                                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-600 focus:border-2"
                                   type="email"
                                   id="email"
                                   placeholder="ex: thuyvan@gmail.com"
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
                              />
                              <div
                                   className='absolute right-4 top-11 cursor-pointer hover:text-sky-600'
                                   onClick={() => setShowEye(!showEye)}
                              >
                                   {showEye ? <FaEyeSlash /> : <FaEye />}
                                   
                              </div>
                         </div>

                         <button
                              type="submit"
                              className="w-full bg-sky-600 text-white py-2 rounded-md hover:bg-sky-700 transition duration-300"
                         >
                              Sign In
                         </button>

                         <p className='flex justify-center mt-6'>Already had an account? &nbsp;
                              <Link to={'/login'}>
                                   <span className='underline cursor-pointer'>Sign In</span>
                              </Link>
                         </p>
                    </form>
               </div>

          </div>
     )
}

export default Register;