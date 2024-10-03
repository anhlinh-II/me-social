import { Modal, Avatar, Input, Tag } from "antd";
import avatar from "antd/es/avatar";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import { Form } from "antd";
import { CiImageOn } from "react-icons/ci";
import { FaImage } from "react-icons/fa6";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
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
}

const postInfo: IPostInfo = {
     id: "1",
     content: "hello i am anh linh and i am 20 yearsold, im currently a student at National Economics University which is know as one of the best university in vietnam when it comes to Econnomics.",
     author: "anh linh",
     createdAt: "2/3/2024",
     updatedAt: "4/3/2024",
     group: "Anh Linh Fan Club",
     totalLikes: 201,
     totalComments: 42,
     tags: ["thuy van", "thuy anh"],
     mode: "FRIEND"
}

const ViewPostModal = ({ show, setShow }: IProps) => {
     const [isOpenLightBox, setIsOpenLightBox] = useState<boolean>(false);
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
               >
                    <div className="flex flex-col items-start w-full">
                         <Form
                              className='flex justify-around items-center gap-x-4 w-full'
                              layout="horizontal"
                              initialValues={postInfo}  // Khởi tạo giá trị từ thông tin người dùng
                         >
                              <Form.Item className='w-1/2' label="ID" name="id">
                                   <Input value={postInfo.id} readOnly /> {/* Hoặc dùng disabled */}
                              </Form.Item>

                              <Form.Item className='w-1/2' label="Author" name="author">
                                   <Input value={postInfo.author} readOnly />
                              </Form.Item>
                         </Form>
                         <Form
                              className='flex justify-around items-center gap-x-4 w-full'
                              layout="horizontal"
                              initialValues={postInfo}  // Khởi tạo giá trị từ thông tin người dùng
                         >
                              <Form.Item className='w-1/2' label="Created At" name="createdAt">
                                   <Input value={postInfo.createdAt} readOnly /> {/* Hoặc dùng disabled */}
                              </Form.Item>

                              <Form.Item className='w-1/2' label="Updated At" name="updatedAt">
                                   <Input value={postInfo.updatedAt} readOnly />
                              </Form.Item>
                         </Form><Form
                              className='flex justify-around items-center gap-x-4 w-full'
                              layout="horizontal"
                              initialValues={postInfo}  // Khởi tạo giá trị từ thông tin người dùng
                         >
                              <Form.Item className='w-1/2' label="Group" name="group">
                                   <Input value={postInfo.group} readOnly /> {/* Hoặc dùng disabled */}
                              </Form.Item>

                              <Form.Item className='w-1/2' label="Tags" name="tags">
                                   <Input value={postInfo.tags} readOnly />
                              </Form.Item>
                         </Form>
                         <Form
                              className='flex justify-around items-center gap-x-4 w-full'
                              layout="horizontal"
                              initialValues={postInfo}  // Khởi tạo giá trị từ thông tin người dùng
                         >
                              <Form.Item className='w-1/2' label="Total Likes" name="totalLikes">
                                   <Input value={postInfo.totalLikes} readOnly /> {/* Hoặc dùng disabled */}
                              </Form.Item>

                              <Form.Item className='w-1/2' label="Total Comments" name="totalComments">
                                   <Input value={postInfo.totalComments} readOnly />
                              </Form.Item>
                         </Form>
                         <Form
                              className='flex justify-around items-center gap-x-4 w-full'
                              layout="horizontal"
                              initialValues={postInfo}
                         >
                              <Form.Item className='w-1/2' label="Mode" name="mode">
                                   <Input value={postInfo.mode} readOnly />
                              </Form.Item>

                              <Form.Item className='w-1/2' label="Content" name="content">
                                   <Input value={postInfo.content} readOnly />
                              </Form.Item>
                         </Form>
                         <div onClick={() => setIsOpenLightBox(true)} className="flex items-center gap-2 py-2 px-4 bg-sky-600 rounded-lg text-white font-semibold cursor-pointer hover:bg-sky-700 trasition duration-300">
                              <span><FaImage /></span> See post's image
                         </div>
                         <Lightbox
                              plugins={[Download]}
                              open={isOpenLightBox}
                              close={() => setIsOpenLightBox(false)}
                              slides={[
                                   {
                                        src: "https://scontent.fhan8-1.fna.fbcdn.net/v/t39.30808-6/454373468_122139931490271357_53862221086868218_n.jpg?stp=dst-jpg_s720x720&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEe6YjCJENMlXcACeDuYfexO9JOtIEqpo470k60gSqmjlflvYzjDdLgLXEhXEB5uCW5iR-bI-DcnL6Jz6ROcfLc&_nc_ohc=tSzju19ub2gQ7kNvgFq9TVx&_nc_ht=scontent.fhan8-1.fna&_nc_gid=AGJVwhkERc7kICd4aYrtXNk&oh=00_AYBDpKnObtCUFJ9Ew27b6RcLATsiqCTKLyIkwtq72y537g&oe=670176DF",
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

export default ViewPostModal;
