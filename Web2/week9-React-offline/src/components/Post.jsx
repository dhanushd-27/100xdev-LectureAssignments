import React, { useState } from 'react';

const Post = () => {
const user = {
    name: 'John Smith',
    jobTitle: 'Frontend Developer',
    avatar: '/vite.svg', // Path to the avatar in the public folder
};

const content = "Excited to announce my latest project launch!";
const [likes, setLikes] = useState(15);
const [commentsCount, setCommentsCount] = useState(8);
const [liked, setLiked] = useState(false);

const handleLike = () => {
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
};

return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 bg-white shadow">
    <div className="flex items-center mb-3">
        <img src={user.avatar} alt={`${user.name}'s avatar`} className="w-10 h-10 rounded-full mr-3" />
        <div>
        <h4 className="font-semibold text-slate-600">{user.name}</h4>
        <p className="text-gray-500">{user.jobTitle}</p>
        </div>
    </div>
    <div className="mb-3 text-slate-700">
        <p>{content}</p>
    </div>
    <div className="flex justify-between">
        <button 
            onClick={handleLike} 
            className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition">
            {liked ? 'Unlike' : 'Like'} ({likes})
            </button>
            <button className="bg-gray-200 text-gray-800 rounded-md px-4 py-2 hover:bg-gray-300 transition">
            Comment ({commentsCount})
        </button>
    </div>
    </div>
);
};

export default Post;
