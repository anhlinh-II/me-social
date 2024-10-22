import { useState } from "react";
import PostModal from "./PostModal";
import StoryItem from "./ProfileStoryItem";

interface Comment {
    id: number;
    username: string;
    text: string;
}

interface Story {
    id: number;
    videoUrl: string;
    posterUrl: string; 
    altText: string;
    content: string;
    likes: number;
    comments: Comment[];
}

interface StoryGridProps {
    stories: Story[];
}

const StoryGrid: React.FC<StoryGridProps> = ({ stories }) => {
    const [selectedPost, setSelectedPost] = useState<Story | null>(null);

    const handlePostClick = (story: Story) => {
        setSelectedPost(story);
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
    };

    return (
        <div className="relative">
            <div className="grid grid-cols-3 gap-1 p-4 w-[100%]">
                {stories.map(story => (
                    <StoryItem
                        key={story.id}
                        posterUrl={story.posterUrl}
                        altText={story.altText}
                        onClick={() => handlePostClick(story)}
                    />
                ))}
            </div>

            {selectedPost && (
                <PostModal
                    imageUrl={selectedPost.videoUrl}
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

export default StoryGrid;