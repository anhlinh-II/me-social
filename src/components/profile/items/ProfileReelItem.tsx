
import React, { useState } from 'react';
import { FaComment, FaHeart, FaPlay } from 'react-icons/fa6';
import { formatNumberWithUnit } from '../../../utils/FormatNumber';

interface ReelItemProps {
	altText: string;
	posterUrl: string;
	views: number;
	likeCount: number;
	commentCount: number;
	onClick: () => void;
}

const ReelItem: React.FC<ReelItemProps> = ({ posterUrl, altText, views, likeCount, commentCount, onClick }) => {
	const [imageError, setImageError] = useState<boolean>(false);
	const [isHovered, setIsHovered] = useState<boolean>(false);

	const handleImageError = () => {
		setImageError(true);
	};
	return (
		<div className="w-56 h-96 relative bg-gray-200 overflow-hidden cursor-pointer" 
			onClick={onClick}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
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
			{isHovered ? (
				<div className='absolute inset-0 flex items-center justify-center z-10'>
					<div className="absolute inset-0 bg-black opacity-40"></div>
					<div className='flex flex-row gap-8 text-white text-xl z-20'>
						<div className='flex flex-row items-center justify-center gap-2'>
							<FaHeart />
							{formatNumberWithUnit(likeCount)}
						</div>
						<div className='flex flex-row items-center justify-center gap-2'>
							<FaComment />
							{formatNumberWithUnit(commentCount)}
						</div>
					</div>
				</div>
            ) : (
			<div className='absolute inset-0 flex flex-row gap-2 top-2 left-2 text-white'>
				<FaPlay className='mt-2'/>
				<p className='text-xl'>{formatNumberWithUnit(views)}</p>
			</div>
			)}
		</div>
	);
};

export default ReelItem;