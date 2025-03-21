import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import RantPost from "@/components/RantPost";

export default function Rant() {
    const posts = [
        {
            id: 1,
            username: "frieren",
            avatar: "https://i.pinimg.com/736x/27/8f/db/278fdb966f903e1f6fab15ab07b17db7.jpg",
            time: "12h",
            content: "I miss you Himmel 😓",
            likes: 26,
            comments: 1,
        },
        {
            id: 2,
            username: "snowi",
            avatar: "https://i.pinimg.com/736x/53/0e/a5/530ea5e591b2fafddcb939a1c9dd4ecb.jpg",
            time: "5h",
            content: "I love you sa isa dyan 😘",
            likes: 45,
            comments: 10,
        },
    ];

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-white">Rant</h2>}
        >
            <Head title="Rant" />
            <div className="max-w-2xl mx-auto space-y-4">
                {posts.map((post) => (
                    <RantPost key={post.id} {...post} />
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
