import React, { useEffect } from "react";
import { Head, usePage, router } from "@inertiajs/react";

export default function Welcome() {
    const { auth } = usePage().props;

    useEffect(() => {
        if (auth?.user) {
            router.visit("/home"); // Redirect to home if logged in
        }
    }, [auth]);

    return (
        <>
            <Head title="Welcome" />
            <div className="flex items-center justify-center min-h-screen bg-white text-black">
                <div className="text-center px-6 sm:px-12 max-w-lg">
                    <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                        Welcome to GenZ
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Connect, share, and explore the world of trends and
                        ideas.
                    </p>
                    <div className="mt-6">
                        <button
                            onClick={() => router.visit("/login")}
                            className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
