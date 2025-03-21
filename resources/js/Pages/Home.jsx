import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Home() {
    return (
        <AuthenticatedLayout>
            <Head title="Home" />
            <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white text-black">
                {/* Hero Section */}
                <div className="max-w-3xl text-center">
                    <h1 className="text-4xl font-extrabold sm:text-5xl text-black">
                        Welcome to{" "}
                        <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                            GenZ
                        </span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        A modern platform to connect, rant, explore, and stay
                        updated.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex gap-4">
                    <a
                        href="/rant"
                        className="px-6 py-3 text-lg font-medium rounded-lg shadow-md bg-black text-white hover:bg-gray-900 transition"
                    >
                        Start Ranting
                    </a>
                    <a
                        href="/explore"
                        className="px-6 py-3 text-lg font-medium rounded-lg shadow-md bg-gray-200 text-black hover:bg-gray-300 transition"
                    >
                        Explore
                    </a>
                </div>

                {/* Features Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center w-full max-w-5xl">
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-black">
                            Express Yourself
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Rant freely and let your voice be heard.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-black">
                            Stay Updated
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Explore trending topics and discussions.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-black">
                            Connect
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Engage with the GenZ community.
                        </p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
