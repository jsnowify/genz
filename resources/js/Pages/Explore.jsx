import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ImagePost from "@/components/ImagePost";

const imagePosts = [
    {
        id: 1,
        image: "https://i.pinimg.com/736x/2a/9d/bf/2a9dbfd0e14604ab3bb159f08ccda258.jpg",
        caption: "Beautiful sunset view! ☀️",
    },
    {
        id: 2,
        image: "https://i.pinimg.com/736x/e3/55/5c/e3555caee5b5a78a00934db65feb4102.jpg",
        caption: "City lights at night ✨",
    },
    {
        id: 3,
        image: "https://i.pinimg.com/736x/49/32/66/4932660d0a509560ff6a4b5ba9a16b57.jpg",
        caption: "Chilling with a good book 📖",
    },
];

export default function Explore() {
    return (
        <AuthenticatedLayout>
            <Head title="Explore" />
            <div className="max-w-lg mx-auto p-4 space-y-6">
                {imagePosts.map((post) => (
                    <ImagePost key={post.id} post={post} />
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
