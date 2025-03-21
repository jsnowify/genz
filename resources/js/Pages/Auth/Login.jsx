import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useCallback } from "react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        password: "",
        remember: false,
    });

    const submit = useCallback(
        (e) => {
            e.preventDefault();
            post(route("login"), {
                onFinish: () => reset("password"),
            });
        },
        [data, post, reset]
    );

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="max-w-sm mx-auto space-y-4">
                {/* Username Field */}
                <div>
                    <InputLabel htmlFor="username" value="Email address" />
                    <TextInput
                        id="username"
                        type="text"
                        name="username"
                        value={data.username}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("username", e.target.value)}
                    />
                    <InputError message={errors.username} className="mt-2" />
                </div>

                {/* Password Field */}
                <div>
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ml-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>

                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Forgot password?
                        </Link>
                    )}
                </div>

                {/* Login Button */}
                <PrimaryButton className="w-full" disabled={processing}>
                    Sign in
                </PrimaryButton>

                {/* Google Sign-in Button */}
                <button
                    type="button"
                    className="w-full flex items-center justify-center space-x-2 border rounded-md py-2 bg-white shadow-sm hover:bg-gray-100"
                >
                    <img
                        src="../../assets/google-icon.svg"
                        alt="Google"
                        className="w-5 h-5"
                    />
                    <span className="text-sm font-medium text-gray-700">
                        Sign in with Google
                    </span>
                </button>

                {/* Register Link */}
                <p className="text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link
                        href={route("register")}
                        className="text-blue-600 font-medium hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </form>
        </GuestLayout>
    );
}
