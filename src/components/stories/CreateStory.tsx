import { useRef, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaEarthAmericas, FaLock, FaRegCircleCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { createStory } from "../../services/Entities/StoryService";
import { uploadVideo } from "../../services/Entities/VideoService";
import { StoryPrivacy, StoryRequest } from "../../services/Types/Story";
import avt from '../../assets/me1.jpg';


const CreateStory = () => {
    const navigate = useNavigate();
    const [privacy, setPrivacy] = useState(StoryPrivacy.PUBLIC);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [story, setStory] = useState<string>("");
    const [content, setContent] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const inputFile = useRef<HTMLInputElement | null>(null);
    
    const privacyOptions = [
        { value: StoryPrivacy.PUBLIC, label: "Công khai", icon: <FaEarthAmericas /> },
        { value: StoryPrivacy.FRIENDS, label: "Bạn bè", icon: <FaUserFriends /> },
        { value: StoryPrivacy.PRIVATE, label: "Riêng tư", icon: <FaLock /> },
    ];

    const currentPrivacy = privacyOptions.find((opt) => opt.value === privacy);

    const handleOpenFileBrowser = () => {
        inputFile.current?.click();
    }
    const handleChooseFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setSelectedFile(file);
            setStory(URL.createObjectURL(event.target.files[0]));
        } else {
            setStory("");
            setSelectedFile(null);
        }
    };

    const handleSaveFile = async () => {
        console.log('Selected file:', selectedFile);
        if (selectedFile) {
            try {
                // Upload video lên Cloudinary
                const uploadedData = await uploadVideo(selectedFile);
                console.log(uploadedData);
                console.log('Uploaded video URL:', uploadedData.secure_url);

                // Tạo request để lưu vào database
                const storyRequest: StoryRequest = {
                    userId: 3,
                    url: uploadedData.secure_url,
                    content: content,
                    privacy: privacy,
                };

                const storyResponse = await createStory(storyRequest);
                console.log('story saved:', storyResponse);

                // Đóng modal và reset trạng thái
                setSuccessMessage('story đã được đăng tải thành công!');
                setStory("");
            } catch (error) {
                console.error('Error during file upload or story save:', error);
                alert('Có lỗi xảy ra khi đăng video. Vui lòng thử lại!');
            }
        } else {
            alert('Vui lòng chọn một video để đăng.');
        }
    };

    const handleChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    };

    const handleClose = () => {
        navigate(-1);
    };

    return (
        <div className="fixed inset-0 bg-[#18191A] bg-opacity-100 flex z-50">
            {/* Sidebar */}
            <div className="w-1/3 p-4 overflow-y-auto bg-[#242526]">
                <button onClick={handleClose} className="text-white text-2xl top-4 left-6 rounded-full p-2 bg-[#18191A] hover:bg-zinc-700">
                    <IoMdClose />
                </button>
                <div className="flex gap-2 items-center justify-between">
                    <h2 className="text-white text-2xl font-bold mt-6 mb-4">Tin của bạn</h2>
                    {/* Custom Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="text-md text-white w-32 bg-[#434343] hover:bg-[#4e4e4e] rounded-lg border px-2 py-1 cursor-pointer flex items-center justify-center gap-2"
                        >
                            {currentPrivacy?.icon}
                            <span>{currentPrivacy?.label}</span>
                        </button>

                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-[#434343] rounded-lg shadow-lg z-10">
                                {privacyOptions.map((option) => (
                                    <div
                                        key={option.value}
                                        onClick={() => {
                                            setPrivacy(option.value);
                                            setDropdownOpen(false);
                                        }}
                                        className="px-4 py-2 cursor-pointer hover:bg-[#4e4e4e] flex items-center gap-2 text-white"
                                    >
                                        {option.icon}
                                        <span>{option.label}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            </div>

            {/* Story Content */}
            <div className="relative w-full h-full flex justify-center items-center border border-black rounded-xl">
                {/* Modal Body */}
                {/* {
                    openEditPanel
                        ?  */}
                        <div className="bg-gray-500 rounded-lg p-4 text-white">
                            <div className="flex justify-start items-center gap-2 ml-5 mt-4">
                                <img src={avt}
                                    className="rounded-[100%] text-base h-10 w-10 "
                                    alt="error" />
                                <div className="">
                                    <span className="font-bold">Ahn Linhh</span>
                                </div>
                            </div>
                            <div className="px-6 py-2 w-[100%] h-full">
                                <input id="message" className="block border-none h-[20px] bg-transparent focus:outline-none py-3.5 w-full text-md text-white rounded-lg "
                                    placeholder="Write your thoughts here..."
                                    value={content}
                                    onChange={handleChangeContent}></input>
                                <div className="relative border border-sky-600 mt-2 border-dashed h-[250px] flex justify-center">
                                    <img
                                        className="object-contain w-[100%]"
                                        src={story} alt="error" />
                                </div>
                                <div className="flex gap-4 pt-8 font-bold">
                                    <button className="px-4 py-2 bg-amber-400 rounded-lg w-60 hover:bg-yellow-500 transition duration-200 text-white"
                                        onClick={() => handleOpenFileBrowser()}
                                    >Chọn video</button>
                                    <input type='file' accept="video/*" id='file'
                                        onChange={handleChooseFile}
                                        ref={inputFile}
                                        style={{ display: 'none' }}
                                    />
                                    <button
                                        onClick={() => handleSaveFile()}
                                        className="px-4 py-2 bg-sky-500 rounded-lg w-60 hover:bg-sky-600 transition duration-200 text-white">Save</button>
                                </div>
                            </div>
                        </div>
                        
                {/* //         : <div className="p-4 flex flex-col mt-28 items-center justify-center gap-2">
                //             <PiYoutubeLogoThin className="text-7xl" />
                //             <span className="text-[18px]">Create your storys here</span>
                //             <button
                //                 className="px-4 py-2 bg-sky-600 text-sm font-bold hover:bg-sky-700 transition duration-200 rounded-2xl text-white"
                //                 onClick={() => handleOpenFileBrowser()}
                //             >
                //                 Select from computer
                //             </button>
                //             <input type='file' accept="video/*" id='file'
                //                 onChange={handleChooseFile}
                //                 ref={inputFile}
                //                 style={{ display: 'none' }}
                //             />
                //         </div>
                // } */}
                {successMessage && (
                    <div className="flex flex-row self-center items-center justify-center gap-2 mt-2 p-2 bg-white text-2xl text-blue-400 rounded-lg">
                        <span>{successMessage}</span>
                        {successMessage ? <FaRegCircleCheck /> : <></>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreateStory;