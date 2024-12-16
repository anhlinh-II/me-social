import { useState } from "react";
import PostModal from "./PostModal";
import StoryItem from "./items/ProfileStoryItem";
import { PiPlusLight } from "react-icons/pi";
import { Link } from "react-router-dom";

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
    commentNum: number;
    comments: Comment[];
}

export interface ProfileStoryProps {
    stories: Story[];
}

const ProfileStory: React.FC<ProfileStoryProps> = ({ stories }) => {
    const [selectedPost, setSelectedPost] = useState<Story | null>(null);

    const handlePostClick = (story: Story) => {
        setSelectedPost(story);
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
    };

    const Stories = [
        (
            <Link key="createReel" to={`/stories/create`}>
                <div className="w-20 h-20 bg-gray-200 overflow-hidden cursor-pointer p-6 border rounded-full border-black relative group">
                    <div className="absolute inset-0 bg-cover bg-center filter blur-sm" style={{ backgroundImage: "url('/camera.jpg')", backgroundPosition: "center bottom" }}></div>
                    <div className="relative h-full p-4 flex flex-col items-center justify-center z-10 transition-transform duration-300 transform group-hover:scale-105">
                        <div className='p-2 rounded-full border border-white'>
                            <PiPlusLight className="text-4xl text-white" />
                        </div>
                    </div>
                </div>
            </Link>
		),
            ...stories.map(story => (
                <StoryItem
                    key={story.id}
                    posterUrl={story.posterUrl}
                    altText={story.altText}
                    content={story.content}
                    onClick={() => handlePostClick(story)}
                />
            ))
    ];

    return (
        <div className="relative self-start ms-[5%]">
            <div className="flex flex-row items-start gap-12 p-4 w-[100%]">
                {Stories}
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

export default ProfileStory;