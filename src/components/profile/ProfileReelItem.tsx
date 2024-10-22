
import React, { useState } from 'react';

interface ReelItemProps {
  altText: string;
  posterUrl: string; 
  onClick: () => void;
}

const ReelItem: React.FC<ReelItemProps> = ({ posterUrl, altText, onClick }) => {
  const [imageError, setImageError] = useState<boolean>(false);

    const handleImageError = () => {
        setImageError(true);
    };
  return (
    <div className="w-full h-72 bg-gray-200 overflow-hidden cursor-pointer" onClick={onClick}>
      {imageError ? (
                <div className="flex justify-center items-center w-full h-full bg-gray-200">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-600"></div>
                </div>
            ) : (
                <img
                    src={posterUrl}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    alt={altText}
                    onError={handleImageError}
                />
            )}
    </div>
  );
};

export default ReelItem;
