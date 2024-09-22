import React from "react";
import { PiYoutubeLogoThin } from "react-icons/pi";

interface IProps {
     show: boolean;
     setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateReelModal = (props: IProps) => {
     const { show, setShow } = props;

     return (
          <>
               {
                    show &&
                    <div className="modal-overlay fixed inset-0 bg-black/50 z-50" onClick={() => setShow(false)}>
                         <div
                              id="medium-modal"
                              className="fixed inset-0 z-50 flex items-center justify-center"
                              onClick={(e) => e.stopPropagation()} // Để tránh modal bị đóng khi click vào chính modal
                         >
                              <div className="relative w-full max-w-lg bg-white h-[500px] rounded-lg shadow-lg p-4">

                                   {/* Modal Header */}
                                   <div className="flex items-center justify-between p-4 border-b">
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
                                   <div className="p-4 flex flex-col mt-20 items-center justify-center gap-2">
                                        <PiYoutubeLogoThin className="text-7xl" />
                                        <span className="text-[18px]">Create your reels here</span>
                                        <button className="px-4 py-2 bg-sky-600 text-sm font-bold hover:bg-sky-700 transition duration-200 rounded-2xl text-white">
                                             Select from computer
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>
               }
          </>
     );
};

export default CreateReelModal;
