import { Heart, MessageCircle } from "lucide-react";

export default function RantPost({
    avatar,
    username,
    time,
    content,
    likes,
    comments,
}) {
    return (
        <div className="bg-white p-4 rounded-xl shadow-md">
            {/* User Info */}
            <div className="flex items-center space-x-2 mb-2">
                <img
                    src={avatar}
                    alt={username}
                    className="w-10 h-10 rounded-full"
                />
                <div>
                    <p className="font-semibold text-gray-800">{username}</p>
                    <p className="text-xs text-gray-500">{time} ago</p>
                </div>
            </div>

            {/* Rant Content */}
            <p className="text-gray-700 mb-3">{content}</p>

            {/* Actions */}
            <div className="flex items-center space-x-4 text-gray-600">
                <button className="flex items-center space-x-1">
                    <Heart size={20} />
                    <span>{likes}</span>
                </button>
                <div className="flex items-center space-x-1">
                    <MessageCircle size={20} />
                    <span>{comments}</span>
                </div>
            </div>
        </div>
    );
}
