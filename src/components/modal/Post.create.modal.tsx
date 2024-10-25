import React, { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaEarthAmericas, FaLock, FaVideo } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { IoImagesSharp } from "react-icons/io5";
import Select, { components, SingleValueProps } from 'react-select';
import avt from '../../assets/me1.jpg';
import { deleteImage, uploadImage } from "../../services/Entities/ImageService";
import { createPost } from "../../services/Entities/PostService";
import { PostRequest } from "../../services/Types/Post";

interface IProps {
     show: boolean;
     setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const options = [
     { value: "PUBLIC", label: "Public", icon: <FaEarthAmericas /> },
     { value: "FRIENDS", label: "Friends", icon: <FaUserFriends /> },
     { value: "PRIVATE", label: "Private", icon: <FaLock /> }
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

const CreatePostModal = (props: IProps) => {

     const [selectedOption, setSelectedOption] = useState<any>(null);
     const [content, setContent] = useState('');
     const [files, setFiles] = useState<File[]>([]);
     const [loading, setLoading] = useState<boolean>(false);

     // Dummy user ID and token
     const userId = 3;
     const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhaGFoYWhhQGdtYWlsLmNvbSIsInBlcm1pc3Npb24iOlsiUk9MRV9VU0VSX0NSRUFURSIsIlJPTEVfVVNFUl9VUERBVEUiXSwiZXhwIjoxNzI5ODQ1NDA3LCJpYXQiOjE3Mjk3NTkwMDcsInVzZXIiOnsiaWQiOjUsImVtYWlsIjoiYWhhaGFoYUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IkFETUlOIiwibG9jYXRpb24iOm51bGx9fQ.AQvnao_roLFCMXvZ59XDMMEw7z_FJbrXNrNkeyzVTN2AKd0T_tVqDy8KtXvJQ1ZPYgmLVgHl0ar-rTowPEUXNA';

     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.files) {
               const selectedFiles = Array.from(e.target.files);
               setFiles(selectedFiles); // Store all selected files in the state
          }
     };

     const handleSubmit = async () => {
          if (files.length === 0) {
               console.error('No files selected');
               return;
          }

          const postRequest: PostRequest = {
               userId: userId,
               privacy: selectedOption?.value || 'PUBLIC',
               content: content,
               urls: []
          };

          setLoading(true);
          try {
               const response = await handleCreatePost(files, postRequest, token);
               console.log('Post created successfully:', response);
               props.setShow(false);
          } catch (error) {
               console.error('Failed to create post:', error);
          } finally {
               setLoading(false);
          }
     };


     const handleCreatePost = async (files: File[], postRequest: PostRequest, token: string) => {
          const uploadedPublicIds: string[] = [];
          const uploadedUrls: string[] = [];

          try {
               for (const file of files) {
                    const uploadResult = await uploadImage(file);
                    uploadedPublicIds.push(uploadResult.public_id);
                    uploadedUrls.push(uploadResult.secure_url);
               }

               const postRequestWithMedia = {
                    ...postRequest,
                    urls: uploadedUrls,
                    publicIds: uploadedPublicIds,
               };

               const postResponse = await createPost(postRequestWithMedia, token);
               console.log('Post created successfully:', postResponse);

               return postResponse;

          } catch (error) {
               console.error('Error creating post:', error);

               // Delete uploaded images/videos if the post creation fails
               for (const publicId of uploadedPublicIds) {
                    try {
                         await deleteImage(publicId);
                         console.log('Uploaded image/video deleted successfully.');
                    } catch (deleteError) {
                         console.error('Error deleting uploaded image/video:', deleteError);
                    }
               }

               throw error;
          }
     };


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
                                                       <IoIosCloseCircle />
                                                  </button>
                                             </div>
                                             {/*body*/}
                                             <div className="flex justify-start items-center gap-2 ml-5 mt-4">
                                                  <img src={avt}
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
                                                  <textarea id="message" rows={4} value={content} onChange={(e) => setContent(e.target.value)} className="block p-2.5 w-full text-sm text-black bg-sky-100 rounded-lg border border-sky-600 focus:ring-blue-500 focus:border-blue-200 focus:outline-sky-600" placeholder="Write your thoughts here..."></textarea>

                                             </div>
                                             <div className=" w-[100%] flex flex-col justify-center">
                                                  <div className="w-[92%] flex justify-around items-center border border-1 border-solid border-sky-200 rounded p-2 mb-2 font-lg">
                                                       Add to your post
                                                       <div className="flex justify-around w-[30%] items-center">
                                                            <label className="hover:bg-gray-300 p-4 rounded cursor-pointer">
                                                                 <IoImagesSharp />
                                                                 <input type="file" multiple accept="image/*" onChange={handleFileChange} className="hidden" />
                                                            </label>
                                                            <label className="hover:bg-gray-300 p-4 rounded cursor-pointer">
                                                                 <FaVideo />
                                                                 <input type="file" multiple accept="video/*" onChange={handleFileChange} className="hidden" />
                                                            </label>
                                                       </div>
                                                  </div>
                                                  <div className="flex flex-wrap">
                                                       {files.map((file, index) => (
                                                            <div key={index} className="m-2">
                                                                 {file.type.startsWith('image/') ? (
                                                                      <img
                                                                           src={URL.createObjectURL(file)}
                                                                           alt={file.name}
                                                                           className="h-20 w-20 object-cover rounded"
                                                                      />
                                                                 ) : (
                                                                      <div className="flex items-center">
                                                                           <FaVideo className="text-blue-500" />
                                                                           <span className="ml-2">{file.name}</span>
                                                                      </div>
                                                                 )}
                                                                 <span className="text-sm">{file.name}</span> {/* Display filename */}
                                                            </div>
                                                       ))}
                                                  </div>
                                             </div>
                                             {/*footer*/}
                                             <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                  <button
                                                       className="bg-sky-500 text-white active:bg-sky-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                       type="button"
                                                       onClick={handleSubmit}
                                                       disabled={loading}
                                                  >
                                                       {loading ? 'Saving...' : 'Save Changes'}
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
