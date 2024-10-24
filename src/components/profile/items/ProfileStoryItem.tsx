
import React, { useState } from 'react';

interface StoryItemProps {
	altText: string;
	posterUrl: string;
	content: string;
	onClick: () => void;
}

const StoryItem: React.FC<StoryItemProps> = ({ posterUrl, altText, content, onClick }) => {
	const [imageError, setImageError] = useState<boolean>(false);

	const handleImageError = () => {
		setImageError(true);
	};
	return (
		<div className="flex flex-col items-center justify-center cursor-pointer" onClick={onClick}>
			<div className='w-20 h-20 overflow-hidden rounded-full border border-black'>
			{imageError ? (
				<div className="flex justify-center items-center w-full h-full bg-gray-200">
					<div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-600"></div>
				</div>
			) : (
				<img
					src={posterUrl}
					className="w-full h-full object-cover"
					alt={altText}
					onError={handleImageError}
				/>
			)}
			</div>
			
			<div className='text-md font-serif'>{content}</div>
		</div>
	);
};

export default StoryItem;
