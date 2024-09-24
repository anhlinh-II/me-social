// PostItem.tsx
import React from 'react';

interface PostItemProps {
  imageUrl: string;
  altText: string;
  onClick: () => void;
}

const PostItem: React.FC<PostItemProps> = ({ imageUrl, altText, onClick }) => {
  return (
    <div className="w-full h-72 bg-gray-200 rounded-lg overflow-hidden cursor-pointer" onClick={onClick}>
      <img 
        src={imageUrl} 
        alt={altText} 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default PostItem;
