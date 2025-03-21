import { Head, Link, usePage } from "@inertiajs/react";

export default function Welcome() {
    const { auth } = usePage().props; // Get authentication data from Inertia props

    if (auth?.user) {
        // If user is logged in, redirect to dashboard
        window.location.href = route("dashboard");
        return null;
    }

    return (
        <>
            <Head title="Welcome" />
            <div className="flex min-h-screen items-center justify-center bg-white text-black">
                <div className="text-center">
                    <h1 className="text-6xl font-extrabold tracking-wide">
                        GenZ
                    </h1>
                    <p className="mt-3 text-lg text-gray-600">
                        A new way to connect, create, and share.
                    </p>
                    <div className="mt-6 space-x-4">
                        <Link
                            href={route("register")}
                            className="px-6 py-3 text-lg font-medium bg-black text-white rounded-lg transition hover:bg-gray-900"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
