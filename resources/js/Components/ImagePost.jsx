import { Heart, MessageCircle, Repeat } from "lucide-react";
import { useState } from "react";

export default function ImagePost({ post }) {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow-md">
            {/* User Info */}
            <div className="flex items-center space-x-2 mb-2">
                <img
                    src="https://i.pinimg.com/736x/90/f4/1d/90f41d8637e0c4172bec1a407f5814df.jpg"
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
            {/* Icons Section (Aligned Left) */}
            <div className="flex items-center space-x-4 mt-3 text-gray-600">
                <div
                    className="flex items-center space-x-1 cursor-pointer"
                    onClick={toggleLike}
                >
                    <Heart
                        size={20}
                        className={liked ? "text-red-500 fill-red-500" : ""}
                    />
                    <span>45</span>
                </div>
                <div className="flex items-center space-x-1">
                    <MessageCircle size={20} />
                    <span>10</span>
                </div>
                <div className="flex items-center space-x-1">
                    <Repeat size={20} />
                </div>
            </div>
        </div>
    );
}
