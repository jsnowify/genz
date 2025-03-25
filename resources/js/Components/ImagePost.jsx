import { Heart, MessageCircle, Repeat } from "lucide-react";
import { useState } from "react";

export default function ImagePost({ post }) {
    const [liked, setLiked] = useState(false);
    const [countLike, setCountLike] = useState(0);

    const toggleLike = () => {
        if (liked) {
            setCountLike((prev) => prev - 1);
        } else {
            setCountLike((prev) => prev + 1);
        }
        setLiked(!liked);
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow-md">
            {/* User Info */}
            <div className="flex items-center space-x-2 mb-2">
                <img
                    src="https://i.pinimg.com/736x/53/0e/a5/530ea5e591b2fafddcb939a1c9dd4ecb.jpg"
                    alt="User"
                    className="w-10 h-10 rounded-full"
                />
                <div>
                    <p className="font-semibold text-gray-800">snowi</p>
                    <p className="text-xs text-gray-500">2h ago</p>
                </div>
            </div>
            {/* Image */}
            <img src={post.image} alt="Post" className="w-full rounded-lg" />
            {/* Caption */}
            {post.caption && (
                <p className="mt-2 text-gray-800">{post.caption}</p>
            )}
            {/* Icons Section */}
            <div className="flex items-center space-x-4 mt-3 text-gray-600">
                {/* Like Button */}
                <div
                    className="flex items-center space-x-1 cursor-pointer"
                    onClick={toggleLike}
                >
                    <Heart
                        size={20}
                        className={liked ? "text-red-500 fill-red-500" : ""}
                    />
                    <span>{countLike}</span>
                </div>
                {/* Comment Icon */}
                <div className="flex items-center space-x-1">
                    <MessageCircle size={20} />
                    <span>10</span>
                </div>
                {/* Repost Icon */}
                <div className="flex items-center space-x-1">
                    <Repeat size={20} />
                </div>
            </div>
        </div>
    );
}
