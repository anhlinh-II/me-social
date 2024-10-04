import { Form, Input, Modal } from "antd";
import { useRef, useState } from "react";
import { FaImage } from "react-icons/fa6";
import { MdOutlineFileUpload } from "react-icons/md";
import Lightbox from "yet-another-react-lightbox";
import { Download } from "yet-another-react-lightbox/plugins";

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

const postInittialInfo: IPostInfo = {
     id: "1",
     content: "hello i am anh linh and i am 20 yearsold, im currently a student at National Economics University which is know as one of the best university in vietnam when it comes to Econnomics.",
     author: "anh linh",
     createdAt: "2/3/2024",
     updatedAt: "4/3/2024",
     group: "Anh Linh Fan Club",
     totalLikes: 201,
     totalComments: 42,
     tags: ["thuy van", "thuy anh"],
     mode: "FRIEND",
     image: "https://scontent.fhan8-1.fna.fbcdn.net/v/t39.30808-6/454373468_122139931490271357_53862221086868218_n.jpg?stp=dst-jpg_s720x720&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEe6YjCJENMlXcACeDuYfexO9JOtIEqpo470k60gSqmjlflvYzjDdLgLXEhXEB5uCW5iR-bI-DcnL6Jz6ROcfLc&_nc_ohc=tSzju19ub2gQ7kNvgFq9TVx&_nc_ht=scontent.fhan8-1.fna&_nc_gid=AGJVwhkERc7kICd4aYrtXNk&oh=00_AYBDpKnObtCUFJ9Ew27b6RcLATsiqCTKLyIkwtq72y537g&oe=670176DF"
}

const UpdatePostModal = ({ show, setShow }: IProps) => {
     const [isOpenLightBox, setIsOpenLightBox] = useState<boolean>(false);
     const [postInfo, setPostInfo] = useState<IPostInfo>(postInittialInfo);

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
                    title="Update post details"
                    centered
                    open={show}
                    onOk={() => setShow(false)}
                    onCancel={() => setShow(false)}
                    cancelButtonProps={{ style: { padding: "16px 24px", marginRight: "10px" } }}
                    okButtonProps={{ style: { padding: "16px 24px" } }}
                    width={1000}
                    okText={`Update`}
               >
                    <div className="flex flex-col items-start w-full">
                         <Form
                              className='flex justify-around items-center gap-x-4 w-full'
                              layout="horizontal"
                              initialValues={postInfo}  // Khởi tạo giá trị từ thông tin người dùng
                         >
                              <Form.Item className='w-1/2' label="ID" name="id">
                                   <Input value={postInfo.id} disabled /> {/* Hoặc dùng disabled */}
                              </Form.Item>

                              <Form.Item className='w-1/2' label="Author" name="author">
                                   <Input value={postInfo.author} />
                              </Form.Item>
                         </Form>
                         <Form
                              className='flex justify-around items-center gap-x-4 w-full'
                              layout="horizontal"
                              initialValues={postInfo}  // Khởi tạo giá trị từ thông tin người dùng
                         >
                              <Form.Item className='w-1/2' label="Created At" name="createdAt">
                                   <Input value={postInfo.createdAt} disabled /> {/* Hoặc dùng disabled */}
                              </Form.Item>

                              <Form.Item className='w-1/2' label="Updated At" name="updatedAt">
                                   <Input value={postInfo.updatedAt} disabled />
                              </Form.Item>
                         </Form><Form
                              className='flex justify-around items-center gap-x-4 w-full'
                              layout="horizontal"
                              initialValues={postInfo}  // Khởi tạo giá trị từ thông tin người dùng
                         >
                              <Form.Item className='w-1/2' label="Group" name="group">
                                   <Input value={postInfo.group} disabled /> {/* Hoặc dùng disabled */}
                              </Form.Item>

                              <Form.Item className='w-1/2' label="Tags" name="tags">
                                   <Input value={postInfo.tags} disabled />
                              </Form.Item>
                         </Form>
                         <Form
                              className='flex justify-around items-center gap-x-4 w-full'
                              layout="horizontal"
                              initialValues={postInfo}  // Khởi tạo giá trị từ thông tin người dùng
                         >
                              <Form.Item className='w-1/2' label="Total Likes" name="totalLikes">
                                   <Input value={postInfo.totalLikes} disabled /> {/* Hoặc dùng disabled */}
                              </Form.Item>

                              <Form.Item className='w-1/2' label="Total Comments" name="totalComments">
                                   <Input value={postInfo.totalComments} disabled />
                              </Form.Item>
                         </Form>
                         <Form
                              className='flex justify-around items-center gap-x-4 w-full'
                              layout="horizontal"
                              initialValues={postInfo}
                         >
                              <Form.Item className='w-1/2' label="Mode" name="mode">
                                   <Input name="mode" value={postInfo.mode} onChange={handleOnchange} />
                              </Form.Item>

                              <Form.Item className='w-1/2' label="Content" name="content">
                                   <Input name="content" value={postInfo.content} onChange={handleOnchange} />
                              </Form.Item>
                         </Form>
                         <div className="flex gap-4">
                              <div onClick={() => setIsOpenLightBox(true)} className="flex items-center gap-2 py-2 px-4 bg-sky-600 rounded-lg text-white font-semibold cursor-pointer hover:bg-sky-700 trasition duration-300">
                                   <span><FaImage /></span> See post's image
                              </div>
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
                         {/* <div className="max-w-md">
                         <img className="rounded-lg" src="https://scontent.fhan8-1.fna.fbcdn.net/v/t39.30808-6/454373468_122139931490271357_53862221086868218_n.jpg?stp=dst-jpg_s720x720&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEe6YjCJENMlXcACeDuYfexO9JOtIEqpo470k60gSqmjlflvYzjDdLgLXEhXEB5uCW5iR-bI-DcnL6Jz6ROcfLc&_nc_ohc=tSzju19ub2gQ7kNvgFq9TVx&_nc_ht=scontent.fhan8-1.fna&_nc_gid=AGJVwhkERc7kICd4aYrtXNk&oh=00_AYBDpKnObtCUFJ9Ew27b6RcLATsiqCTKLyIkwtq72y537g&oe=670176DF" alt="post image" />
                    </div> */}
                    </div>
               </Modal>
          </>
     )
};

export default UpdatePostModal;
