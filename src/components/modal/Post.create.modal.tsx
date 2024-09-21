import React, { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaEarthAmericas, FaLock, FaVideo } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { IoImagesSharp } from "react-icons/io5";
import Select, { components, SingleValueProps } from 'react-select';

interface IProps {
     show: boolean;
     setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const options = [
     { value: "Public", label: "Public", icon: <FaEarthAmericas /> },
     { value: "Friends", label: "Friends", icon: <FaUserFriends /> },
     { value: "Private", label: "Private", icon: <FaLock /> }
];

const baseStyle  = {
     control: (baseStyles: any, state: any) => ({
          ...baseStyles,
          borderColor: state.isFocused ? 'rgb(2 132 199)' : 'black',
          backgroundColor: 'rgb(224 242 254)',
          width: "150px",
          cursor: 'pointer'
     }),
     options: (baseStyle: any, state: any) => ({
          ...baseStyle,
          display: 'flex',
          alignItems: 'center',
          padding: '8px', // Tailwind p-2
          "&:hover": {
               backgroundColor: 'rgb(2 132 199)', // hover:bg-blue-500
               color: 'white',
          },
          cursor: 'pointer'
     }),
     singleValue: (baseStyles: any) => ({
          ...baseStyles,
          color: "",
          display: 'flex',
          alignItems: 'center', // Align the icon and text horizontally
          justifyContent: 'center', 
          cursor: 'pointer'
     }),
}

const IconOption = (props: any) => {
     const { data } = props;
     return (
          <components.Option {...props}>
               <div className="flex items-center">
               <span className="mr-4">{data.icon}</span>
               <span>{data.label}</span>
               </div>
          </components.Option>
     );
};

type NewType = any;

const CustomSingleValue = (props: SingleValueProps<NewType>) => (
     <components.SingleValue {...props}>
       <span className="mr-2">{props.data.icon}</span> {/* Adds margin to the icon */}
       {props.data.label}
     </components.SingleValue>
   );

const CreatePostModal = (props: IProps) => {

     const [selectedOption, setSelectedOption] = useState<any>(null);
     return (
          <>
               <>
                    {props.show ? (
                         <>
                              <div
                                   className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                              >
                                   <div className="relative w-[40%] my-6 mx-auto max-w-3xl">
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                             {/*header*/}
                                             <div className="relative flex items-center justify-center p-5 border-b border-solid border-blueGray-200">
                                                  <h3 className="absolute top-6 text-3xl font-semibold">
                                                       Create Post
                                                  </h3>
                                                  <button
                                                       className="p-1 ml-auto bg-transparent border-0 text-sky-600 float-right text-4xl leading-none font-semibold outline-none focus:outline-none"
                                                       onClick={() => props.setShow(false)}
                                                  >
                                                       <IoIosCloseCircle className="" />
                                                       {/* <span className="bg-black text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                       </span> */}
                                                  </button>
                                             </div>
                                             {/*body*/}
                                             <div className="flex justify-start items-center gap-2 ml-5 mt-4">
                                                  <img src="https://scontent.fhph1-1.fna.fbcdn.net/v/t39.30808-6/451418121_1493503281258736_1067539081919969742_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_Zd01_0VGpYQ7kNvgGeWDHD&_nc_ht=scontent.fhph1-1.fna&oh=00_AYBHEAthlGeQj62ElU3i3-wL8Pg2Yne60mzoift-ZQxEKw&oe=66F439A4"
                                                       className="rounded-[100%] text-base h-10 w-10 "
                                                       alt="error" />
                                                  <div className="font-bold">
                                                       <span>Ahn Linhh</span>
                                                       <div className="cursor-pointer w-full">
                                                            <Select
                                                                 defaultValue={options[0]}
                                                                 onChange={setSelectedOption}
                                                                 options={options}
                                                                 styles={baseStyle}
                                                                 id="status"
                                                                 isSearchable={false}
                                                                 components={{ Option: IconOption, SingleValue: CustomSingleValue }}
                                                            >
                                                            </Select>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="relative p-6 w-[100%]">

                                                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Tell us what you are thinking</label>
                                                  <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-black bg-sky-100 rounded-lg border border-sky-600 focus:ring-blue-500 focus:border-blue-200 focus:outline-sky-600" placeholder="Write your thoughts here..."></textarea>

                                             </div>
                                             <div className=" w-[100%] flex justify-center">
                                                  <div className="w-[92%] flex justify-around items-center border border-1 border-solid border-sky-200 rounded p-2 mb-2 font-lg">
                                                       Add to your post
                                                       <div className="flex justify-around w-[30%] items-center">
                                                            <span className="hover:bg-gray-300 p-4 rounded cursor-pointer"><IoImagesSharp /></span>
                                                            <span className="hover:bg-gray-300 p-4 rounded cursor-pointer"><FaVideo /></span>
                                                       </div>
                                                  </div>
                                             </div>
                                             {/*footer*/}
                                             <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                  <button
                                                       className="bg-sky-500 text-white active:bg-sky-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                       type="button"
                                                       onClick={() => props.setShow(false)}
                                                  >
                                                       Save Changes
                                                  </button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                         </>
                    ) : null}
               </>
          </>
     )
};

export default CreatePostModal;
