import { Heart, MessageCircle, RefreshCcw } from "lucide-react";

export default function PostActions({ likes, comments }) {
    return (
        <div className="flex items-center space-x-3 text-gray-500">
            <button className="flex items-center space-x-1 hover:text-gray-900">
                <Heart className="w-5 h-5" /> <span>{likes}</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-gray-900">
                <MessageCircle className="w-5 h-5" /> <span>{comments}</span>
            </button>
            <button className="flex items-center hover:text-gray-900">
                <RefreshCcw className="w-5 h-5" />
            </button>
        </div>
    );
}
