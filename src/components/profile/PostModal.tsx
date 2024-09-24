// PostModal.tsx
import React, { useState } from 'react';

interface Comment {
  id: number;
  username: string;
  text: string;
}

interface PostModalProps {
  imageUrl: string;
  altText: string;
  content: string;
  likes: number;
  comments: Comment[];
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ imageUrl, altText, content, likes, comments, onClose }) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(likeCount + (isLiked ? -1 : 1));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
      <div className="relative flex bg-white max-w-4xl w-full h-5/6 rounded-lg overflow-hidden">
        {/* Hình ảnh bên trái */}
        <div className="w-2/3 bg-black flex items-center justify-center">
          <img
            src={imageUrl}
            alt={altText}
            className="w-auto h-auto max-h-full max-w-full object-contain"
          />
        </div>

        {/* Thông tin bài post bên phải */}
        <div className="w-1/3 p-4 flex flex-col justify-between">
          {/* Nội dung post */}
          <div>
            <p className="text-lg font-semibold mb-4">{content}</p>
          </div>

          {/* Nút like */}
          <div className="flex items-center mb-4">
            <button
              onClick={handleLike}
              className={`mr-2 text-2xl ${isLiked ? 'text-red-500' : 'text-gray-500'}`}
            >
              {isLiked ? '❤️' : '🤍'}
            </button>
            <span className="text-lg">{likeCount} likes</span>
          </div>

          {/* Danh sách bình luận */}
          <div className="flex-1 overflow-y-auto mb-4">
            <h3 className="font-bold mb-2">Comments</h3>
            {comments.map((comment) => (
              <div key={comment.id} className="mb-2">
                <span className="font-semibold">{comment.username}:</span> {comment.text}
              </div>
            ))}
          </div>

          {/* Nút đóng */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-black text-3xl font-bold"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
