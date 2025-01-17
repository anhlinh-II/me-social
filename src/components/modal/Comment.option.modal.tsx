import React, { useState } from "react";
import { message, Spin } from "antd";
import { deleteComment } from "../../services/CommentService";
import { useUser } from "../../utils/CustomHook";

interface IProps {
     show: boolean;
     setShow: React.Dispatch<React.SetStateAction<boolean>>;
     data: {
          commentId: number;
          userId: number;
     };
     setToggleDelete:  React.Dispatch<React.SetStateAction<boolean>>
}

const CommentOptionModal = (props: IProps) => {
     const { show, setShow, data, setToggleDelete } = props;

     const [isLoading, setIsLoading] = useState(false);
     const user = useUser();

     const handleDeleteComment = async (commentId: number) => {
          setIsLoading(true); // Start loading
          try {
               const response = await deleteComment(commentId);
               if (response && response.code === 1000) {
                    setToggleDelete((prev) => !prev);
                    setShow(false);
                    message.success("Xóa bình luận thành công");
               } else {
                    message.error("Đã xảy ra lỗi khi xóa bình luận.");
               }
          } catch (error) {
               message.error("Đã xảy ra lỗi. Vui lòng thử lại sau.");
               console.error(error);
          } finally {
               setIsLoading(false); // Stop loading
          }
     };

     if (!show) return null; // Prevent rendering when modal is not shown

     return (
          <div
               id="small-modal"
               tabIndex={-1}
               className="fixed bg-black/50 inset-0 z-50 w-full h-full flex justify-center items-center p-4 overflow-x-hidden overflow-y-auto"
          >
               <div className="relative w-[40%] max-w-md max-h-full">
                    {/* Modal content */}
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
                                   <span className="border-gray-400 py-6 border-b cursor-pointer w-full text-center hover:bg-gray-100 p-2">
                                        Chỉnh sửa
                                   </span>
                              </>
                         ) : (
                              <>
                                   <span className="border-gray-400 py-6 border-b cursor-pointer w-full text-center hover:bg-gray-100 p-2 text-red-600">
                                        Báo cáo
                                   </span>
                              </>
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
     );
};

export default CommentOptionModal;
