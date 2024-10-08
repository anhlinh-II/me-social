import { Form, Input, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Option } from "antd/es/mentions";
import { useState } from "react";
import { FaImage } from "react-icons/fa6";
import Lightbox from "yet-another-react-lightbox";
import { Download } from "yet-another-react-lightbox/plugins";

interface IProps {
     show: boolean;
     setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IGroupInfo {
     id: number;
     groupName: string;
     createdAt: string;
     updatedAt: string;
     admins: string[];
     members: string[];
     posts: number[];
     mode: string;
     description: string;
     image: string;
}

const groupInfo: IGroupInfo = {
     id: 1,
     groupName: "Anh Linh fanclub",
     createdAt: "3/10/2024",
     updatedAt: "4/10/2024",
     admins: ["anh linh", "tien luc"],
     members: ["anh linh", "tien luc", "hai ninh"],
     posts: [1, 23, 3535, 1231],
     mode: "PUBLIC",
     description: "this is a group of people who are big fan of Anh Linh",
     image: "https://scontent.fhan8-1.fna.fbcdn.net/v/t39.30808-6/454373468_122139931490271357_53862221086868218_n.jpg?stp=dst-jpg_s720x720&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEe6YjCJENMlXcACeDuYfexO9JOtIEqpo470k60gSqmjlflvYzjDdLgLXEhXEB5uCW5iR-bI-DcnL6Jz6ROcfLc&_nc_ohc=tSzju19ub2gQ7kNvgFq9TVx&_nc_ht=scontent.fhan8-1.fna&_nc_gid=AGJVwhkERc7kICd4aYrtXNk&oh=00_AYBDpKnObtCUFJ9Ew27b6RcLATsiqCTKLyIkwtq72y537g&oe=670176DF",
}

const ViewGroupModal = ({ show, setShow }: IProps) => {
     // const [groupInfo, setGroupInfo] = useState<IGroupInfo>(groupInitialInfo);
     const [isOpenLightBox, setIsOpenLightBox] = useState<boolean>(false);

     

     return (
          <>
               <Modal
                    title="View group details"
                    centered
                    open={show}
                    onOk={() => setShow(false)}
                    onCancel={() => setShow(false)}
                    cancelButtonProps={{ style: { display: 'none' } }}
                    okButtonProps={{ style: { padding: "16px 24px", marginRight: "10px", maxHeight: "80%" } }}
                    styles={{ body: { maxHeight: '60%', overflowY: "auto" }, }}
                    width={1000}
               >
                    <div className="flex flex-col w-full">
                         <Form
                              className="flex gap-4 w-full justify-between"
                              layout="horizontal"
                              initialValues={groupInfo}
                         >
                              <Form.Item className="w-1/2" label="ID" name="id">
                                   <Input readOnly value={groupInfo.id} />
                              </Form.Item>
                              <Form.Item className="w-1/2" label="Group name" name="groupName">
                                   <Input readOnly value={groupInfo.groupName} />
                              </Form.Item>
                         </Form>
                         <Form
                              className="flex gap-4 w-full justify-between"
                              layout="horizontal"
                              initialValues={groupInfo}
                         >
                              <Form.Item className="w-1/2" label="Updated at" name="updatedAt">
                                   <Input disabled value={groupInfo.updatedAt} />
                              </Form.Item>
                              <Form.Item className="w-1/2" label="Created at" name="createdAt">
                                   <Input disabled value={groupInfo.createdAt} />
                              </Form.Item>
                         </Form>
                         <Form
                              className="flex gap-4 w-full justify-between"
                              layout="horizontal"
                              initialValues={groupInfo}
                         >
                              <Form.Item className="w-1/2" label="Admins" name="admins">
                                   <Select>
                                        <Option>hello</Option>
                                        <Option>hi</Option>
                                   </Select>
                              </Form.Item>
                              <Form.Item className="w-1/2" label="Members" name="members">
                                   <Select>
                                        <Option>hello</Option>
                                        <Option>hi</Option>
                                   </Select>
                              </Form.Item>
                         </Form>
                         <Form
                              className="flex gap-4 w-full justify-between"
                              layout="horizontal"
                              initialValues={groupInfo}
                         >
                              <Form.Item className="w-1/2" label="Posts" name="posts">
                                   <Select value={groupInfo.posts}>
                                        <Option>hello</Option>
                                        <Option>hi</Option>
                                   </Select>
                              </Form.Item>
                              <Form.Item className="w-1/2" label="Mode" name="mode">
                                   <Select>
                                        <Option>hello</Option>
                                        <Option>hi</Option>
                                   </Select>
                              </Form.Item>
                         </Form>
                         <Form
                              className="flex gap-4 w-full justify-between"
                              layout="horizontal"
                              initialValues={groupInfo}
                         >
                              <Form.Item className="w-full" label="Description" name="description">
                                   <TextArea rows={2} value={groupInfo.description} />
                              </Form.Item>
                         </Form>
                         <div>
                         <div onClick={() => setIsOpenLightBox(true)} className="flex w-fit items-center gap-2 py-2 px-4 bg-sky-600 rounded-lg text-white font-semibold cursor-pointer hover:bg-sky-700 trasition duration-300">
                              <span><FaImage /></span> See group's image
                         </div>
                         <Lightbox
                              plugins={[Download]}
                              open={isOpenLightBox}
                              close={() => setIsOpenLightBox(false)}
                              slides={[
                                   {
                                        src: `${groupInfo.image}`,
                                        alt: "image 1",
                                        width: 3840,
                                        height: 2560,
                                   }
                              ]}
                         />
                         </div>
                    </div>
               </Modal>
          </>
     )
};

export default ViewGroupModal;
