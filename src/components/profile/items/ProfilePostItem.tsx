// PostItem.tsx
import React, { useState } from 'react';
import { FaComment, FaHeart } from 'react-icons/fa6';
import { formatNumberWithUnit } from '../../../utils/FormatNumber';

interface PostItemProps {
	id: number;
	imageUrl: string;
	altText: string;
	likeNum: number;
	commentNum: number;
	onClick: () => void;
}

const PostItem: React.FC<PostItemProps> = ({ imageUrl, altText, likeNum, commentNum, onClick }) => {
	const [imageError, setImageError] = useState<boolean>(false);
	const [isHovered, setIsHovered] = useState<boolean>(false);

	const handleImageError = () => {
		setImageError(true);
	};
	return (
		<div className="w-full h-80 relative bg-gray-200 overflow-hidden cursor-pointer" 
			onClick={onClick}
			onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
			{imageError ? (
				<div className="flex justify-center items-center w-full h-full bg-gray-200">
					<div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-600"></div>
				</div>
			) : (
				
				  <img
					  src={imageUrl}
					  className="w-full h-full object-cover"
					  alt={altText}
					  onError={handleImageError}
				  />
			)}
			{isHovered && (
				<div className='absolute inset-0 flex items-center justify-center z-10'>
					<div className="absolute inset-0 bg-black opacity-40"></div>
					<div className='flex flex-row gap-8 text-white text-xl z-20'>
						<div className='flex flex-row items-center justify-center gap-2'>
							<FaHeart />
							{formatNumberWithUnit(likeNum)}
						</div>
						<div className='flex flex-row items-center justify-center gap-2'>
							<FaComment />
							{formatNumberWithUnit(commentNum)}
						</div>
					</div>
				</div>
            )}
		</div>
	);
};

export default PostItem;
