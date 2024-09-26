// PostGrid.tsx
import React, { useState } from 'react';
import PostItem from './PostItem';
import PostModal from './PostModal';

interface Comment {
  id: number;
  username: string;
  text: string;
}

interface Post {
  id: number;
  imageUrl: string;
  altText: string;
  content: string;
  likes: number;
  comments: Comment[];
}

interface PostGridProps {
  posts: Post[];
}

const PostGrid: React.FC<PostGridProps> = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-1 p-4 w-[84%] ms-[-8%]">
        {posts.map(post => (
          <PostItem 
            key={post.id} 
            imageUrl={post.imageUrl} 
            altText={post.altText} 
            onClick={() => handlePostClick(post)} 
          />
        ))}
      </div>

      {selectedPost && (
        <PostModal 
          imageUrl={selectedPost.imageUrl}
          altText={selectedPost.altText}
          content={selectedPost.content}
          likes={selectedPost.likes}
          comments={selectedPost.comments}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default PostGrid;
