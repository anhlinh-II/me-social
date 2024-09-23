import React, { useRef, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaEarthAmericas, FaLock } from "react-icons/fa6";
import { PiYoutubeLogoThin } from "react-icons/pi";
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

const baseStyle = {
     control: (baseStyles: any, state: any) => ({
          ...baseStyles,
          borderColor: state.isFocused ? 'rgb(2 132 199)' : 'black',
          backgroundColor: 'rgb(224 242 254)',
          width: "150px",
          cursor: 'pointer'
     }),
     options: (baseStyle: any) => ({
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

const CreateReelModal = (props: IProps) => {
     const { show, setShow } = props;

     const [reel, setReel] = useState<string | null>(null);
     const [openEditPanel, setOpenEditPanel] = useState<boolean>(false);

     const inputFile = useRef<HTMLInputElement | null>(null);

     const handleOpenFileBrowser = () => {
          inputFile?.current?.click();
     }
     const handleChooseFile = (event: React.ChangeEvent<HTMLInputElement>) => {
          if (event.target.files && event.target.files[0]) {
               setReel(URL.createObjectURL(event.target.files[0]));
               setOpenEditPanel(true);
          }
     };

     const handleSaveFile = () => {
          setOpenEditPanel(false);
          setShow(false);
          setReel(null);
     }

     const handleClose = () => {
          setOpenEditPanel(false);
          setShow(false);
          setReel(null);
     }

     return (
          <>
               {
                    show &&
                    <div className="modal-overlay fixed inset-0 bg-black/50 z-50" onClick={() => handleClose()}>
                         <div
                              id="medium-modal"
                              className="fixed inset-0 z-50 flex items-center justify-center"
                              onClick={(e) => e.stopPropagation()} // Để tránh modal bị đóng khi click vào chính modal
                         >
                              <div className="relative w-full max-w-lg bg-white h-[550px] rounded-lg shadow-lg p-4">

                                   {/* Modal Header */}
                                   <div className="flex items-center justify-between pb-4 border-b">
                                        <h3 className="text-xl font-medium text-gray-900">
                                             Create New Reel
                                        </h3>
                                        <button
                                             onClick={() => setShow(false)}
                                             type="button"
                                             className="text-gray-400 bg-gray-100 text-9xl hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8"
                                        >
                                             <svg className="p-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13" />
                                             </svg>
                                             <span className="sr-only">Close modal</span>
                                        </button>
                                   </div>

                                   {/* Modal Body */}
                                   {
                                        openEditPanel
                                             ? <div>
                                                  <div className="flex justify-start items-center gap-2 ml-5 mt-4">
                                                       <img src="https://scontent.fhph1-1.fna.fbcdn.net/v/t39.30808-6/451418121_1493503281258736_1067539081919969742_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_Zd01_0VGpYQ7kNvgGeWDHD&_nc_ht=scontent.fhph1-1.fna&oh=00_AYBHEAthlGeQj62ElU3i3-wL8Pg2Yne60mzoift-ZQxEKw&oe=66F439A4"
                                                            className="rounded-[100%] text-base h-10 w-10 "
                                                            alt="error" />
                                                       <div className="">
                                                            <span className="font-bold">Ahn Linhh</span>
                                                            <div className="cursor-pointer w-full">
                                                                 <Select
                                                                      defaultValue={options[0]}
                                                                      // onChange={setSelectedOption}
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
                                                  <div className="px-6 py-2 w-[100%] h-full">
                                                       <input id="message" className="block border-none h-[20px] bg-transparent focus:outline-none py-3.5 w-full text-sm text-black rounded-lg " placeholder="Write your thoughts here..."></input>
                                                       <div className="relative border border-sky-600 mt-2 border-dashed h-[250px] flex justify-center">
                                                            <img
                                                                 className="object-contain w-[100%]"
                                                                 src={reel} alt="error" />
                                                       </div>
                                                       <div className="flex gap-4 pt-8 font-bold">
                                                            <button className="px-4 py-2 bg-amber-400 rounded-lg w-60 hover:bg-yellow-500 transition duration-200 text-white"
                                                                 onClick={() => handleOpenFileBrowser()}
                                                            >Select another</button>
                                                            <input type='file' id='file'
                                                                 onChange={handleChooseFile}
                                                                 ref={inputFile}
                                                                 style={{ display: 'none' }}
                                                            />
                                                            <button
                                                                 onClick={() => handleSaveFile()}
                                                                 className="px-4 py-2 bg-sky-500 rounded-lg w-60 hover:bg-sky-600 transition duration-200 text-white">Save</button>
                                                       </div>
                                                  </div>
                                             </div>
                                             : <div className="p-4 flex flex-col mt-28 items-center justify-center gap-2">
                                                  <PiYoutubeLogoThin className="text-7xl" />
                                                  <span className="text-[18px]">Create your reels here</span>
                                                  <button
                                                       className="px-4 py-2 bg-sky-600 text-sm font-bold hover:bg-sky-700 transition duration-200 rounded-2xl text-white"
                                                       onClick={() => handleOpenFileBrowser()}
                                                  >
                                                       Select from computer
                                                  </button>
                                                  <input type='file' id='file'
                                                       onChange={handleChooseFile}
                                                       ref={inputFile}
                                                       style={{ display: 'none' }}
                                                  />
                                             </div>
                                   }
                              </div>
                         </div>
                    </div>
               }
          </>
     );
};

export default CreateReelModal;
