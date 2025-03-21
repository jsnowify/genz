import { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AuthenticatedLayout({ children }) {
    const { url, props } = usePage();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const username = props.auth.user.username;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <nav
                className={`fixed top-0 left-0 w-full backdrop-blur-md transition-all duration-300 ${
                    scrolled ? "shadow-md bg-white/80" : "bg-white/50"
                } z-50`}
            >
                <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-2xl font-extrabold tracking-tight"
                        onClick={() => setMenuOpen(false)}
                        prefetch
                    >
                        GenZ
                    </Link>

                    <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
                        {navLinks.map((item) => (
                            <NavItem
                                key={item.href}
                                href={item.href}
                                isActive={url === item.href}
                            />
                        ))}
                    </div>

                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
                        >
                            @{username}
                            <ChevronDown className="ml-2 h-4 w-4" />
                        </button>
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md py-2">
                                <Link
                                    href="/profile"
                                    className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    Settings
                                </Link>
                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button" // Make it behave like a button
                                    className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
                                >
                                    Logout
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={
                    menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                }
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`absolute top-16 left-0 w-full bg-white/90 shadow-lg p-4 rounded-md md:hidden ${
                    menuOpen ? "block" : "hidden"
                }`}
            >
                <div className="flex flex-col items-center space-y-3">
                    {navLinks.map((item) => (
                        <NavItem
                            key={item.href}
                            href={item.href}
                            isActive={url === item.href}
                        />
                    ))}
                </div>
            </motion.div>

            <AnimatePresence mode="wait">
                <motion.main
                    key={url}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="mt-16 px-6 py-8"
                >
                    {children}
                </motion.main>
            </AnimatePresence>
        </div>
    );
}

function NavItem({ href, isActive }) {
    const label = href.replace("/", "");
    const formattedLabel = label.charAt(0).toUpperCase() + label.slice(1);

    return (
        <Link
            href={href}
            className="relative px-4 py-2 text-gray-700 transition-all duration-300 hover:text-gray-900"
        >
            {formattedLabel || "Home"}
            {isActive && (
                <motion.div
                    layoutId="underline"
                    className="absolute left-0 bottom-0 h-1 w-full bg-gray-900 rounded-md"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
            )}
        </Link>
    );
}

const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/rant", label: "Rant" },
    { href: "/explore", label: "Explore" },
    { href: "/notification", label: "Notification" },
];
