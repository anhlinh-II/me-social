import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const ImageSlider = ({ urls }: { urls: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!urls || urls.length === 0) {
        return <>{console.log("No image to display")}</>;
    }

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? urls.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === urls.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleImageError = (index: number) => {
        // Xử lý khi ảnh lỗi
        console.log(`Image at index ${index} failed to load.`);
    };

    return (
        <div className="relative w-full">
            {urls.length > 1 ? (
                <>
                    {urls[currentIndex] ? (
                        <div className='max-h-[800px] max-w-full bg-black flex items-center justify-center'>
                            <img
                                src={urls[currentIndex]}
                                className="max-h-full max-w-full rounded object-fit cursor-pointer"
                                alt="Post"
                                onError={() => handleImageError(currentIndex)}
                            />
                        </div>
                    ) : (
                        <div className="flex justify-center items-center w-full h-64 bg-gray-200">
                            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-600"></div>
                        </div>
                    )}

                    {/* Nút bấm chuyển ảnh */}
                    <button
                        onClick={handlePrevious}
                        className="absolute top-1/2 left-2 transform rounded-full border border-white bg-gray-400 text-white p-2 opacity-80 hover:bg-gray-500"
                    >
                        <IoIosArrowBack />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-2 transform rounded-full border border-white bg-gray-400 text-white p-2 opacity-80 hover:bg-gray-500"
                    >
                        <IoIosArrowForward />
                    </button>
                </>
            ) : (
                <>
                    {urls[currentIndex] ? (
                        <div className='max-h-[800px] max-w-full bg-black flex items-center justify-center'>
                            <img
                                src={urls[currentIndex]}
                                className="max-h-full max-w-full rounded object-fit cursor-pointer"
                                alt="Post"
                                onError={() => handleImageError(currentIndex)}
                            />
                        </div>
                    ) : (
                        <div className="flex justify-center items-center w-full h-64 bg-gray-200">
                            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-600"></div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default ImageSlider;
