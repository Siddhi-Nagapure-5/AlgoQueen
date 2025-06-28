// 📍 src/pages/MyLinks.jsx
import React from "react";
import { SiLeetcode, SiCodeforces, SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import { motion } from "framer-motion";

const profiles = [
    {
        name: "LeetCode",
        url: "https://leetcode.com/achievement_50",
        icon: <SiLeetcode className="text-3xl text-black" />,
        color: "from-yellow-300 to-yellow-500 text-black",
    },
    {
        name: "Codeforces",
        url: "https://codeforces.com/profile/achievement.50",
        icon: <SiCodeforces className="text-3xl text-white" />,
        color: "from-blue-500 to-blue-800 text-white",
    },
    {
        name: "CodeChef",
        url: "https://www.codechef.com/users/achievement_50",
        icon: <SiCodechef className="text-3xl text-white" />,
        color: "from-gray-700 to-gray-900 text-white",
    },
    {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/user/siddhiq8ui/",
        icon: <SiGeeksforgeeks className="text-3xl text-white" />,
        color: "from-green-500 to-green-700 text-white",
    },
];

const MyLinks = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center p-3 relative overflow-hidden">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-extrabold mb-4 text-center  tracking-tight z-10 p-5"
            >
                👑 <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">AlgoQueen</span>👑 
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-gray-300 mb-10 text-center z-10"
            >
                Crafted by <span className="text-pink-400 font-bold">Siddhi Nagapure</span>
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl z-10">
                {profiles.map((profile, index) => (
                    <motion.a
                        key={index}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center justify-between px-6 py-5 rounded-2xl shadow-2xl bg-gradient-to-br ${profile.color} transition-all duration-300 backdrop-blur-md hover:shadow-pink-500/40`}
                    >
                        <div className="flex items-center gap-4">
                            {profile.icon}
                            <span className="text-xl font-bold tracking-wide">{profile.name}</span>
                        </div>
                        <span className="text-sm italic underline">Visit</span>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default MyLinks;
