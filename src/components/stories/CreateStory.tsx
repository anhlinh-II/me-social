import { useRef, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaEarthAmericas, FaLock, FaRegCircleCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { createStory } from "../../services/Entities/StoryService";
import { uploadVideoStory } from "../../services/Entities/VideoService";
import { StoryPrivacy, StoryRequest } from "../../services/Types/Story";
import avt from '../../assets/me1.jpg';
import { PiPlusLight } from "react-icons/pi";


const CreateStory = () => {
    const navigate = useNavigate();
    const [privacy, setPrivacy] = useState(StoryPrivacy.PUBLIC);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [story, setStory] = useState<string>("");
    const [content, setContent] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isExitModalOpen, setIsExitModalOpen] = useState(false);
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
    const handleChooseFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setSelectedFile(file);
            const videoUrl = URL.createObjectURL(file);

            const videoElement = document.createElement("video");
            videoElement.src = videoUrl;
            videoElement.crossOrigin = "anonymous";
            videoElement.muted = true;

            videoElement.onloadeddata = () => {
                videoElement.currentTime = 1;
            };

            videoElement.onseeked = () => {
                const canvas = document.createElement("canvas");
                canvas.width = videoElement.videoWidth;
                canvas.height = videoElement.videoHeight;
                const ctx = canvas.getContext("2d");

                if (ctx) {
                    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
                    const thumbnailUrl = canvas.toDataURL("image/png");
                    setStory(thumbnailUrl);
                }
                videoElement.remove();
            };
        } else {
            setStory("");
            setSelectedFile(null);
        }
    };

    const handleSaveFile = async () => {
        console.log('Selected file:', selectedFile);
        if (selectedFile) {
            try {
                const uploadedData = await uploadVideoStory(selectedFile, 3);
                console.log(uploadedData);
                console.log('Uploaded video URL:', uploadedData.secure_url);

                const storyRequest: StoryRequest = {
                    userId: 3,
                    url: uploadedData.secure_url,
                    content: content,
                    privacy: privacy,
                };

                const storyResponse = await createStory(storyRequest);
                console.log('story saved:', storyResponse);

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
        <div className="fixed inset-0 bg-[#18191A] bg-opacity-100 flex z-40">
            {/* Sidebar */}
            <div className="w-1/3 p-4 overflow-y-auto bg-[#242526]">
                <button onClick={() => 
                    {
                        if(!selectedFile) {
                            handleClose();
                        }
                        else setIsExitModalOpen(true);

                    }} className="text-white text-2xl top-4 left-6 rounded-full p-2 bg-[#18191A] hover:bg-zinc-700">
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
                <div className="flex justify-start items-center gap-6 mt-4 pb-4 border-b border-gray-600">
                    <img src={avt}
                        className="rounded-[100%] text-base h-16 w-16"
                        alt="error" />
                    <div className="">
                        <span className="font-bold text-white">Ahn Linhh</span>
                    </div>
                </div>
            </div>

            {/* Story Content */}
            <div className="relative w-full h-full flex justify-center items-center border border-black rounded-xl">
                {/* Modal Body */}
                <div className="bg-[#242526] rounded-lg p-4 text-white">

                    <div className="px-6 py-2 w-[100%] h-full">
                        <input id="message" className="block border-none h-[20px] bg-transparent focus:outline-none p-1 py-3.5 w-full text-md text-white rounded-lg "
                            placeholder="Hãy chia sẻ về tin của bạn..."
                            value={content}
                            onChange={handleChangeContent}>
                        </input>
                        {!selectedFile && (
                            <div key="createReel" className="w-full h-[450px] mt-2 bg-gray-200 rounded-lg overflow-hidden cursor-pointer p-6 border border-gray-500 relative group"
                                onClick={() => handleOpenFileBrowser()}>
                                <div className="absolute inset-0 bg-cover bg-center filter blur-sm" style={{ backgroundImage: "url('/gta6.jpg')", backgroundPosition: "center bottom" }}></div>
                                <div className="relative h-full p-4 pt-12 border border-white flex flex-col gap-y-4 items-center justify-center z-10 transition-transform duration-300 transform group-hover:scale-105">
                                    <p className="text-xl text-center text-white" style={{
                                        textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                                    }}>Chia sẻ với mọi người video của bạn!</p>
                                    <div className='flex flex-col items-center justify-center gap-2 px-4 py-2'>
                                        <div className='p-2 rounded-full border border-white'>
                                            <PiPlusLight className="text-4xl text-white" />
                                        </div>
                                        <p className='text-white text-2xl'>Tạo Reel</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {selectedFile && (
                            <div className="relative bg-[#18191A] rounded-lg border border-gray-700 mt-2 h-[450px] flex justify-center">
                                <img
                                    className="object-contain w-[100%]"
                                    src={story} alt="error" />
                            </div>
                        )}
                        <div className="flex gap-4 pt-8 font-bold">
                            <button onClick={() => 
                                {
                                    if(!selectedFile) {
                                        handleClose();
                                    }
                                    else setIsExitModalOpen(true);
            
                                }} className="text-white top-4 left-6 rounded-lg px-4 py-2 w-32 bg-[#3A3B3C] hover:bg-zinc-700">
                                Bỏ
                            </button>
                            <button className="px-4 py-2 bg-amber-400 rounded-lg w-60 hover:bg-yellow-500 transition duration-200 text-white"
                                onClick={() => handleOpenFileBrowser()}
                            >Chọn video</button>
                            <input type='file' accept="video/*" id='file'
                                onChange={handleChooseFile}
                                ref={inputFile}
                                style={{ display: 'none' }}
                            />
                            {selectedFile && (
                                <button
                                    onClick={() => handleSaveFile()}
                                    className="px-4 py-2 bg-sky-500 rounded-lg w-60 hover:bg-sky-600 transition duration-200 text-white">Chia sẻ lên tin</button>
                            )}
                        </div>
                    </div>
                </div>

                {successMessage && (
                    <div className="flex flex-row self-center items-center justify-center gap-2 mt-2 p-2 bg-white text-2xl text-blue-400 rounded-lg">
                        <span>{successMessage}</span>
                        {successMessage ? <FaRegCircleCheck /> : <></>}
                    </div>
                )}
            </div>
            {isExitModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-[#242526] p-6 rounded-lg w-[550px] relative">
                    <button onClick={() => setIsExitModalOpen(false)} className="text-black text-xl absolute top-4 right-6 rounded-full p-2 bg-blue-400 hover:bg-blue-300">
                        <IoMdClose />
                    </button>
                    <h3 className="text-lg text-center text-white font-semibold mb-4 pb-4 border-b border-gray-500">Bỏ tin này?</h3>
                    <p className="text-white">Bạn có chắc chắn là bỏ tin này không? Hệ thống sẽ không lưu tin này của bạn.</p>
                    <div className="flex gap-4 justify-end mt-4 w-full">
                    <button
                        onClick={() => setIsExitModalOpen(false)}
                        className="bg-gray-800 text-blue-600 p-2 px-4 rounded-lg w-fit hover:bg-gray-700"
                    >
                        Tiếp tục chỉnh sửa tin</button>
                    <button
                        onClick={handleClose}
                        className="bg-blue-500 text-white p-2 px-4 rounded-lg w-24 hover:bg-blue-600"
                    >
                        Bỏ</button>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
};

export default CreateStory;