import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Recipe website Header component (JSX + Tailwind CSS)
 * Place this file as src/components/Card.jsx (or rename to Header.jsx)
 *
 * Features:
 * - Logo + title
 * - Responsive nav links
 * - Search input
 * - "Submit Recipe" CTA
 * - Mobile menu toggle
 * - Lightweight, accessible markup
 */

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [query, setQuery] = useState("");

    const nav = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Collections", href: "#" },
        { name: "Contact", href: "/contact" },
    ];

    const onSearchSubmit = (e) => {
        e.preventDefault();
        // Replace with real handler or prop callback
        alert(`Searching for: ${query}`);
    };

    return (
        <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Left: Logo */}
                    <div className="flex items-center gap-3">
                        <a href="#" className="flex items-center gap-2">
                            {/* Simple chef hat logo */}
                            <svg
                                className="w-9 h-9 text-rose-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M6 11a4 4 0 0 1 8 0h1a3 3 0 0 1 0 6H5a3 3 0 0 1 0-6h1z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M10 6a3 3 0 0 1 6 0 5 5 0 0 1-5 5 5 5 0 0 1-1-9z"
                                    fill="currentColor"
                                    opacity="0.9"
                                />
                            </svg>
                            <span className="font-semibold text-lg text-slate-900 dark:text-slate-100">
                                CookBook
                            </span>
                        </a>
                    </div>

                    {/* Center: Search (hidden on very small screens) */}
                    <div className="hidden sm:flex sm:flex-1 sm:justify-center">
                        <form
                            onSubmit={onSearchSubmit}
                            className="w-full max-w-xl"
                            role="search"
                        >
                            <div className="relative text-slate-600 dark:text-slate-300">
                                <span className="absolute inset-y-0 left-3 flex items-center">
                                    <svg
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M21 21l-4.35-4.35"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <circle
                                            cx="11"
                                            cy="11"
                                            r="6"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                        />
                                    </svg>
                                </span>
                                <input
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="w-full bg-slate-100 dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 text-slate-900 dark:text-slate-100 rounded-full py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-rose-400"
                                    placeholder="Search recipes, ingredients, cuisines..."
                                    aria-label="Search recipes"
                                />
                            </div>
                        </form>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-3">
                        <nav className="hidden sm:flex items-center gap-3 text-sm">
                            {nav.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-slate-700 dark:text-slate-300 hover:text-rose-500 px-2 py-1 rounded"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        <button
                            type="button"
                            className="hidden sm:inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium px-3 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-400"
                        >
                            <svg
                                className="w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M12 5v14M5 12h14"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Submit Recipe
                        </button>

                        {/* Mobile menu toggle */}
                        <button
                            type="button"
                            onClick={() => setMobileOpen((s) => !s)}
                            className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-300 focus:outline-none"
                            aria-expanded={mobileOpen}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? (
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M6 18L18 6M6 6l12 12"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M4 6h16M4 12h16M4 18h16"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile panel */}
            {mobileOpen && (
                <div className="sm:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <div className="px-4 pt-3 pb-4 space-y-3 max-w-7xl mx-auto">
                        <form onSubmit={onSearchSubmit} role="search">
                            <div className="relative text-slate-600 dark:text-slate-300">
                                <span className="absolute inset-y-0 left-3 flex items-center">
                                    <svg
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M21 21l-4.35-4.35"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <circle
                                            cx="11"
                                            cy="11"
                                            r="6"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                        />
                                    </svg>
                                </span>
                                <input
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="w-full bg-slate-100 dark:bg-slate-800 placeholder-slate-400 dark:placeholder-slate-500 text-slate-900 dark:text-slate-100 rounded-full py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-rose-400"
                                    placeholder="Search recipes, ingredients..."
                                    aria-label="Search recipes"
                                />
                            </div>
                        </form>

                        <div className="space-y-1">
                            {nav.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 rounded text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <button className="w-full mt-1 inline-flex justify-center items-center gap-2 bg-rose-500 text-white py-2 rounded-full">
                                Submit Recipe
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}