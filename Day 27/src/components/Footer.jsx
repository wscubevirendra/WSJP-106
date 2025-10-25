import React, { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;
        // placeholder for real submission
        setSent(true);
        setTimeout(() => {
            setEmail("");
            setSent(false);
        }, 3000);
    };

    return (
        <footer className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                    {/* Brand + about */}
                    <div className="flex-1 min-w-0">
                        <a href="#" className="inline-flex items-center gap-3">
                            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-amber-400 to-red-400 flex items-center justify-center">
                                {/* simple fork+leaf logo */}
                                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                    <path d="M8 2v7"></path>
                                    <path d="M12 2v7"></path>
                                    <path d="M8 11v9"></path>
                                    <path d="M12 11v9"></path>
                                    <path d="M6 5s-2 1-2 4 2 4 2 4"></path>
                                    <path d="M18 6c0 3-3 4-3 4"></path>
                                </svg>
                            </div>
                            <span className="font-semibold text-lg">RecipeRoost</span>
                        </a>
                        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                            Simple, seasonal recipes and helpful tips for joyful cooking. Browse curated collections, save favorites, and cook with confidence.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            <a href="#" aria-label="Facebook" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.09 5.66 21.29 10.44 22v-7.03H8.08v-2.9h2.36V9.41c0-2.33 1.39-3.61 3.52-3.61 1.02 0 2.08.18 2.08.18v2.29h-1.17c-1.15 0-1.5.71-1.5 1.44v1.72h2.56l-.41 2.9h-2.15V22C18.34 21.29 22 17.09 22 12.07z"/>
                                </svg>
                            </a>
                            <a href="#" aria-label="Instagram" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zM12 7.5A4.5 4.5 0 1 0 12 16.5 4.5 4.5 0 0 0 12 7.5zM18.5 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                </svg>
                            </a>
                            <a href="#" aria-label="Pinterest" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 3.02 8.14 7.11 9.24-.1-.78-.2-1.99.04-2.85.21-.88 1.37-5.61 1.37-5.61s-.35-.7-.35-1.73c0-1.62.94-2.83 2.11-2.83.99 0 1.47.74 1.47 1.63 0 .99-.63 2.47-.96 3.84-.27 1.15.58 2.09 1.71 2.09 2.05 0 3.63-2.16 3.63-5.27 0-2.76-1.99-4.69-4.83-4.69-3.29 0-5.22 2.47-5.22 5.02 0 .99.38 2.04.86 2.62.09.11.1.21.08.33-.09.36-.29 1.15-.33 1.31-.05.21-.17.26-.39.16-1.45-.67-2.36-2.8-2.36-4.5 0-3.67 2.67-7.04 7.71-7.04 4.05 0 7.2 2.88 7.2 6.73 0 4.02-2.53 7.24-6.03 7.24-1.18 0-2.28-.62-2.66-1.35 0 0-.61 2.33-.76 2.9-.27 1.02-1.02 2.04-1.52 2.84C10.28 23.84 11.13 24 12 24c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-6">
                        <div>
                            <h4 className="font-semibold mb-3">Recipes</h4>
                            <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-300">
                                <li><a href="#" className="hover:underline">Breakfast</a></li>
                                <li><a href="#" className="hover:underline">Lunch</a></li>
                                <li><a href="#" className="hover:underline">Dinner</a></li>
                                <li><a href="#" className="hover:underline">Desserts</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-3">Collections</h4>
                            <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-300">
                                <li><a href="#" className="hover:underline">30-min Meals</a></li>
                                <li><a href="#" className="hover:underline">Vegan & Plant-Based</a></li>
                                <li><a href="#" className="hover:underline">Gluten Free</a></li>
                                <li><a href="#" className="hover:underline">Family Favorites</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-3">Company</h4>
                            <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-300">
                                <li><a href="#" className="hover:underline">About</a></li>
                                <li><a href="#" className="hover:underline">Contact</a></li>
                                <li><a href="#" className="hover:underline">Contribute</a></li>
                                <li><a href="#" className="hover:underline">Careers</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="flex-1 min-w-[200px]">
                        <h4 className="font-semibold">Join our newsletter</h4>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Weekly recipes, tips, and seasonal menus — no spam.</p>

                        <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
                            <label htmlFor="footer-email" className="sr-only">Email</label>
                            <input
                                id="footer-email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                required
                                className="flex-1 px-3 py-2 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
                            />
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-md text-sm transition-colors"
                            >
                                {sent ? "Sent" : "Subscribe"}
                            </button>
                        </form>

                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                            By subscribing you agree to our <a href="#" className="underline">privacy policy</a>.
                        </p>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-100 dark:border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <p>© {new Date().getFullYear()} RecipeRoost. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:underline">Terms</a>
                        <a href="#" className="hover:underline">Privacy</a>
                        <a href="#" className="hover:underline">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}