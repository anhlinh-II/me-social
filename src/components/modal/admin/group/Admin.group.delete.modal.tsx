interface IProps {
     show: boolean;
     setShow:  React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteGroupModal = (props: IProps) => {
     const handleDecline = () => {
          props.setShow(false);
     };

     const handleAccept = () => {
          props.setShow(false);
     };

     return (
          props.show && (
               <div id="small-modal" tabIndex={-1} className="fixed bg-black/50 inset-0 z-50 w-full h-full flex justify-center items-center p-4 overflow-x-hidden overflow-y-auto">
                    <div className="relative w-full max-w-md max-h-full">
                         {/* <!-- Modal content --> */}
                         <div className="relative bg-white rounded-lg shadow">
                              {/* <!-- Modal header --> */}
                              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                                   <h3 className="text-xl font-medium text-black">
                                        Delete user
                                   </h3>
                                   <button onClick={() => props.setShow(false)} type="button" className="text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                   </button>
                              </div>
                              {/* <!-- Modal body --> */}
                              <div className="p-4 md:p-5 space-y-4">
                                   <p className="text-base leading-relaxed text-black">
                                        Are you sure you want to delete the group <strong>Anh Linh Fan club</strong>? This action will delete all the information of this post forever.
                                   </p>
                              </div>
                              {/* <!-- Modal footer --> */}
                              <div className="flex gap-4 items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                                   <button type="button" className="transition duration-300 py-2.5 px-5 bg-red-500 text-white  ms-3 text-sm font-medium focus:outline-none rounded-lg border border-gray-200 hover:bg-red-700 focus:z-10 focus:ring-4 focus:ring-gray-100" onClick={handleDecline}>
                                        Decline
                                   </button>
                                   <button type="button" className="transition duration-300 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={handleAccept}>
                                        I accept
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          )
     );
};

export default DeleteGroupModal;
