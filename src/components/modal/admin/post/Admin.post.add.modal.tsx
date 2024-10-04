import { Modal, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Form } from "antd";
import { FaImage } from "react-icons/fa6";
import Lightbox from "yet-another-react-lightbox";
import { useRef, useState } from "react";
import { Download } from "yet-another-react-lightbox/plugins";
import { MdOutlineFileUpload } from "react-icons/md";

interface IProps {
     show: boolean;
     setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IPostInfo {
     id: string;
     content: string;
     author: string;
     createdAt: string;
     updatedAt: string;
     group: string;
     totalLikes: number;
     totalComments: number;
     tags: string[];
     mode: string;
     image: string;
}

const postInitialInfo: IPostInfo = {
     id: "",
     content: "",
     author: "",
     createdAt: "",
     updatedAt: "",
     group: "",
     totalLikes: 0,
     totalComments: 0,
     tags: [],
     mode: "",
     image: ""
}

const AddPostModal = ({ show, setShow }: IProps) => {
     const [isOpenLightBox, setIsOpenLightBox] = useState<boolean>(false);
     const [postInfo, setPostInfo] = useState<IPostInfo>(postInitialInfo);

     const inputFile = useRef<HTMLInputElement | null>(null);

     const handleOpenFileBrowser = () => {
          inputFile?.current?.click();
     }
     const handleChooseFile = (event: React.ChangeEvent<HTMLInputElement>) => {

          const file = event.target.files?.[0]; // Safely access the first file
          if (file) {
               setPostInfo((prevState) => ({
                    ...prevState,
                    image: URL.createObjectURL(file),
               }));
          }
     };

     const handleOnchange = (e: any) => {
          const { name, value } = e.target;
          setPostInfo((prevState) => ({
               ...prevState,
               [name]: value,  // Dynamically update the correct field
          }));
     }
     return (
          <>
               <Modal
                    title="View post details"
                    centered
                    open={show}
                    onOk={() => setShow(false)}
                    onCancel={() => setShow(false)}
                    cancelButtonProps={{ style: { display: 'none' } }}
                    okButtonProps={{ style: { padding: "16px 24px", marginRight: "10px", maxHeight: "80%" } }}
                    styles={{ body: { maxHeight: '60%', overflowY: "auto" }, }}
                    width={1000}
                    okText={`Create`}
               >
                    <div className="flex flex-col items-start w-full">
                         <Form
                              className='flex justify-around items-center gap-x-4 w-full'
                              layout="horizontal"
                              initialValues={postInfo}  // Khởi tạo giá trị từ thông tin người dùng
                         >
                              <Form.Item className='w-1/2' label="Mode" name="mode">
                                   <Input value={postInfo.mode} onChange={handleOnchange} name="mode" />
                              </Form.Item>

                              <Form.Item className='w-1/2' label="Author" name="author">
                                   <Input value={postInfo.author} onChange={handleOnchange} name="author" />
                              </Form.Item>
                         </Form>
                         <Form
                              className='flex justify-around items-center gap-x-4 w-full'
                              layout="horizontal"
                              initialValues={postInfo}  // Khởi tạo giá trị từ thông tin người dùng
                         >
                              <Form.Item className='w-1/2' label="Group" name="group">
                                   <Input value={postInfo.group} onChange={handleOnchange} name="group" /> {/* Hoặc dùng disabled */}
                              </Form.Item>

                              <Form.Item className='w-1/2' label="Tags" name="tags">
                                   <Input value={postInfo.tags} onChange={handleOnchange} name="tags" />
                              </Form.Item>
                         </Form>
                         <Form
                              className='flex justify-around items-center gap-x-4 w-full'
                              layout="horizontal"
                              initialValues={postInfo}
                         >
                              

                              <Form.Item className='w-full resize-none' label="Content" name="content">
                                   <TextArea  className="border w-full focus:outline-sky-600 resize-none" value={postInfo.content} onChange={handleOnchange} name="content" />
                              </Form.Item>
                         </Form>
                         <div className="flex gap-4">
                              {
                                   postInfo.image &&
                                   <div onClick={() => setIsOpenLightBox(true)} className="flex items-center gap-2 py-2 px-4 bg-sky-600 rounded-lg text-white font-semibold cursor-pointer hover:bg-sky-700 trasition duration-300">
                                        <span><FaImage /></span> See post's image
                                   </div>
                              }
                              <div onClick={() => handleOpenFileBrowser()} className="flex items-center gap-2 py-2 px-4 bg-red-600 rounded-lg text-white font-semibold cursor-pointer hover:bg-red-700 trasition duration-300">
                                   <span><MdOutlineFileUpload /></span> Select new image
                              </div>
                              <input type='file' id='file'
                                   onChange={handleChooseFile}
                                   ref={inputFile}
                                   style={{ display: 'none' }}
                              />
                         </div>
                         <Lightbox
                              plugins={[Download]}
                              open={isOpenLightBox}
                              close={() => setIsOpenLightBox(false)}
                              slides={[
                                   {
                                        src: `${postInfo.image}`,
                                        alt: "image 1",
                                        width: 3840,
                                        height: 2560,
                                   }
                              ]}
                         />
                    </div>
               </Modal>
          </>
     )
};

export default AddPostModal;
