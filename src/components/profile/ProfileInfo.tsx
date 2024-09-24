// src/components/ProfileInfo.tsx

import React from 'react';

interface ProfileInfoProps {
    profileImage: string;
    username: string;
    posts: number;
    followers: number;
    following: number;
    bio: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ profileImage, username, posts, followers, following, bio }) => {
    return (
        <div className="flex flex-row items-center p-4 bg-white rounded-lg shadow-md w-[90%] ms-[-6%]">
            <img
                src={profileImage}
                alt={`${username}'s profile`}
                className="w-36 h-36 rounded-full object-cover ms-5 mb-4 me-5"
            />
            <div className='flex flex-col items-center'>
                <h2 className="text-xl font-semibold">{username}</h2>
                <div className="flex space-x-8 my-4">
                    <div className="text-center">
                        <p className="font-bold">{posts}</p>
                        <p className="text-gray-500">Posts</p>
                    </div>
                    <div className="text-center">
                        <p className="font-bold">{followers}</p>
                        <p className="text-gray-500">Followers</p>
                    </div>
                    <div className="text-center">
                        <p className="font-bold">{following}</p>
                        <p className="text-gray-500">Following</p>
                    </div>
                </div>
                <p className="text-center text-gray-700">{bio}</p>
            </div>

        </div>
    );
};

export default ProfileInfo;
