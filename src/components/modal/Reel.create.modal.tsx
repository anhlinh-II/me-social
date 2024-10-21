import React, { useRef, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaEarthAmericas, FaLock, FaRegCircleCheck } from "react-icons/fa6";
import { PiYoutubeLogoThin } from "react-icons/pi";
import Select, { components, SingleValueProps } from 'react-select';
import { uploadVideo } from "../../services/Entities/VideoService";
import { ReelRequest } from "../../services/Types/Reel";
import { createReel } from "../../services/Entities/ReelService";
import avt from '../../assets/me1.jpg';

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

     const [reel, setReel] = useState<string>("");
     const [openEditPanel, setOpenEditPanel] = useState<boolean>(false);
     const [content, setContent] = useState('');
     const [successMessage, setSuccessMessage] = useState('');
     const [selectedFile, setSelectedFile] = useState<File | null>(null);
     const inputFile = useRef<HTMLInputElement | null>(null);

     const handleOpenFileBrowser = () => {
          inputFile.current?.click();
     }
     const handleChooseFile = (event: React.ChangeEvent<HTMLInputElement>) => {
          if (event.target.files && event.target.files[0]) {
               const file = event.target.files[0];
               setSelectedFile(file);
               setReel(URL.createObjectURL(event.target.files[0]));
               setOpenEditPanel(true);
          } else {
               setReel("");
               setSelectedFile(null);
               setOpenEditPanel(false);
          }
     };

     const handleSaveFile = async () => {
          console.log('Selected file:', selectedFile);
          if (selectedFile) {
               try {
                    // Upload video lên Cloudinary
                    const uploadedData = await uploadVideo(selectedFile);
                    console.log(uploadedData);
                    console.log('Uploaded video URL:', uploadedData.secure_url);

                    // Tạo request để lưu vào database
                    const reelRequest: ReelRequest = {
                         userId: 3,
                         url: uploadedData.secure_url,
                         content: content,
                    };

                    // Gọi service để lưu reel vào database
                    const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhaGFoYWhhQGdtYWlsLmNvbSIsInBlcm1pc3Npb24iOlsiUk9MRV9VU0VSX0NSRUFURSIsIlJPTEVfVVNFUl9VUERBVEUiXSwiZXhwIjoxNzI5NTgzMDMzLCJpYXQiOjE3Mjk0OTY2MzMsInVzZXIiOnsiaWQiOjUsImVtYWlsIjoiYWhhaGFoYUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IkFETUlOIiwibG9jYXRpb24iOm51bGx9fQ.D0TyZsfS4-bSX40H64v5BwHcUCYxpTM-xlmn7GnEDz51mZc8CTi02sQzXPZQxWDwM5iHoZX7tfhwWqlLwmRyWA";
                    const reelResponse = await createReel(reelRequest, token);
                    console.log('Reel saved:', reelResponse);

                    // Đóng modal và reset trạng thái
                    setSuccessMessage('Reel đã được đăng tải thành công!');
                    setOpenEditPanel(false);
                    setReel("");
               } catch (error) {
                    console.error('Error during file upload or reel save:', error);
                    alert('Có lỗi xảy ra khi đăng video. Vui lòng thử lại!');
               }
          } else {
               alert('Vui lòng chọn một video để đăng.');
          }
     };

     const handleChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
          setContent(event.target.value);
     };

     const handleClose = () => {
          setOpenEditPanel(false);
          setShow(false);
          setSuccessMessage('');
          setReel("");
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
                                             onClick={() => handleClose()}
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
                                                       <img src={avt}
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
                                                       <input id="message" className="block border-none h-[20px] bg-transparent focus:outline-none py-3.5 w-full text-sm text-black rounded-lg "
                                                            placeholder="Write your thoughts here..."
                                                            value={content}
                                                            onChange={handleChangeContent}></input>
                                                       <div className="relative border border-sky-600 mt-2 border-dashed h-[250px] flex justify-center">
                                                            <img
                                                                 className="object-contain w-[100%]"
                                                                 src={reel} alt="error" />
                                                       </div>
                                                       <div className="flex gap-4 pt-8 font-bold">
                                                            <button className="px-4 py-2 bg-amber-400 rounded-lg w-60 hover:bg-yellow-500 transition duration-200 text-white"
                                                                 onClick={() => handleOpenFileBrowser()}
                                                            >Select another</button>
                                                            <input type='file' accept="video/*" id='file'
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
                                                  <input type='file' accept="video/*" id='file'
                                                       onChange={handleChooseFile}
                                                       ref={inputFile}
                                                       style={{ display: 'none' }}
                                                  />
                                             </div>
                                   }
                                   {successMessage && (
                                        <div className="flex flex-row self-center items-center justify-center gap-2 mt-2 p-2 bg-white text-2xl text-blue-400 rounded-lg">
                                             <span>{successMessage}</span>
                                             {successMessage? <FaRegCircleCheck /> : <></>}
                                        </div>
                                   )}
                              </div>
                         </div>
                    </div>
               }
          </>
     );
};

export default CreateReelModal;
