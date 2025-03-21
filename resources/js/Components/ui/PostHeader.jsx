import { MoreHorizontal } from "lucide-react";
import Avatar from "./Avatar";

export default function PostHeader({ username, avatar, time }) {
    return (
        <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-3">
                <Avatar src={avatar} alt={username} size="40px" />
                <div>
                    <p className="font-semibold">{username}</p>
                    <p className="text-gray-500 text-sm">{time} ago</p>
                </div>
            </div>
            <MoreHorizontal className="text-gray-500 cursor-pointer" />
        </div>
    );
}
