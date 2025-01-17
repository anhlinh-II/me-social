import React, { useState } from "react";
import { message, Spin, Modal, Input } from "antd";
import { deleteComment, editComment } from "../../services/CommentService";
import { useUser } from "../../utils/CustomHook";

interface IProps {
     show: boolean;
     setShow: React.Dispatch<React.SetStateAction<boolean>>;
     data: {
          commentId: number;
          userId: number;
          content?: string; // Include the current comment content
     };
     setData: React.Dispatch<React.SetStateAction<{
          commentId: number;
          userId: number;
          content: string;
     }>>
     setToggleDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommentOptionModal = (props: IProps) => {
     const { show, setShow, data, setData, setToggleDelete } = props;

     const [isLoading, setIsLoading] = useState(false);
     const [showEditModal, setShowEditModal] = useState(false);

     const user = useUser();

     const handleDeleteComment = async (commentId: number) => {
          setIsLoading(true);
          try {
               const response = await deleteComment(commentId);
               if (response && response.code === 1000) {
                    setShow(false);
                    message.success("Xóa bình luận thành công");
                    setToggleDelete((prev) => !prev);
               } else {
                    message.error("Đã xảy ra lỗi khi xóa bình luận.");
               }
          } catch (error) {
               message.error("Đã xảy ra lỗi. Vui lòng thử lại sau.");
               console.error(error);
          } finally {
               setIsLoading(false);
          }
     };

     const handleEditComment = async () => {
          const response = await editComment({id: data.commentId, content: data.content})

          if (response && response.code === 1000) {
               message.success("Chỉnh sửa bình luận thành công");
               setShowEditModal(false);
               setToggleDelete((prev) => !prev);
               setShow(false)
          }

     };

     const handleCancle = () => {
          setShowEditModal(false)
     }



     if (!show) return null;

     return (
          <>
               <div
                    id="small-modal"
                    tabIndex={-1}
                    className="fixed bg-black/50 inset-0 z-50 w-full h-full flex justify-center items-center p-4 overflow-x-hidden overflow-y-auto"
               >
                    <div className="relative w-[40%] max-w-md max-h-full">
                         <div className="relative bg-white rounded-lg shadow flex flex-col border items-center font-semibold overflow-hidden">
                              {isLoading ? (
                                   <div className="py-6 flex justify-center items-center w-full">
                                        <Spin tip="Đang xử lý..." />
                                   </div>
                              ) : Number(user.id) === data.userId ? (
                                   <>
                                        <span
                                             className="border-gray-400 py-6 border-b cursor-pointer w-full text-center hover:bg-gray-100 p-2 text-red-600"
                                             onClick={() => handleDeleteComment(data.commentId)}
                                        >
                                             Xóa
                                        </span>
                                        <span
                                             className="border-gray-400 py-6 border-b cursor-pointer w-full text-center hover:bg-gray-100 p-2"
                                             onClick={() => setShowEditModal(true)}
                                        >
                                             Chỉnh sửa
                                        </span>
                                   </>
                              ) : (
                                   <span className="border-gray-400 py-6 border-b cursor-pointer w-full text-center hover:bg-gray-100 p-2 text-red-600">
                                        Báo cáo
                                   </span>
                              )}
                              <span
                                   className="border-gray-400 py-6 border-b cursor-pointer w-full text-center hover:bg-gray-100 p-2"
                                   onClick={() => setShow(false)}
                              >
                                   Hủy
                              </span>
                         </div>
                    </div>
               </div>

               {/* Edit Modal */}
               <Modal
                    title="Chỉnh sửa bình luận"
                    open={showEditModal}
                    onOk={handleEditComment}
                    onCancel={() => handleCancle()}
                    okText="Lưu"
                    cancelText="Hủy"
               >
                    <Input.TextArea
                         className="w-full outline-none resize-none rounded-md"
                         rows={1}
                         placeholder="Add a comment..."
                         value={data.content}
                         onChange={(e) =>
                              setData((prev) => ({
                                   ...prev,
                                   content: e.target.value,
                              }))
                         }
                    />
               </Modal>
          </>
     );
};

export default CommentOptionModal;
