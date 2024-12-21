interface IProps {
     show: boolean;
     setShow: React.Dispatch<React.SetStateAction<boolean>>;
     handleOnclickUpdate: () => void;
     handleOnclickRemove: () => void;
}

const UpdateAvatarModal = (props: IProps) => {
     const { show, setShow, handleOnclickUpdate, handleOnclickRemove } = props;

     if (!show) return;
     return (
          <div id="small-modal" tabIndex={-1} className="fixed bg-black/50 inset-0 z-50 w-full h-full flex justify-center items-center p-4 overflow-x-hidden overflow-y-auto">
               <div className="relative w-[40%] max-w-md max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow flex flex-col border items-center font-semibold overflow-hidden">
                         <span className="border-gray-400 py-6 border-b cursor-pointer w-full text-center hover:bg-gray-100 p-2">Change Profile Photo</span>
                         <span className="border-gray-400 py-3 border-b cursor-pointer w-full text-center hover:bg-gray-100 p-1 text-sky-600" onClick={() => handleOnclickUpdate()}>Update Photo</span>
                         <span className="border-gray-400 py-3 border-b cursor-pointer w-full text-center hover:bg-gray-100 p-1 text-red-600" onClick={() => handleOnclickRemove()}>Remove Current Photo</span>
                         <span className="border-gray-400 py-3 border-b cursor-pointer w-full text-center hover:bg-gray-100 p-1" onClick={() => setShow(false)}>Cancel</span>
                    </div>
               </div>
          </div>
     )
};

export default UpdateAvatarModal;
