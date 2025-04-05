import { motion } from 'framer-motion';
import { FaCode, FaPython } from 'react-icons/fa';
import badges from '../data/hackerrank_badges';

const iconMap = {
    'Problem Solving': <FaCode className="text-lg text-green-600" />,
    Python: <FaPython className="text-lg text-blue-500" />,
};

const Coding = () => {
    return (
        <section className="py-16 px-4 md:px-16 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all">
            {/* Title */}
            <h2 className="text-4xl font-bold mb-4 text-black dark:text-white text-center">
                🧑‍💻 Coding
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-10 text-center text-sm md:text-base">
                My journey of solving coding challenges and improving my problem-solving skills.
            </p>

            {/* NeetCode Card */}
            <div className="w-full max-w-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-md mb-8 text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">NeetCode Progress</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Practicing daily to sharpen Data Structures and Algorithms.
                </p>
                <a
                    href="https://neetcode.io/practice/TarunSirapurapu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    🚀 View My NeetCode
                </a>
            </div>

            {/* LeetCode Card */}
            <div className="w-full max-w-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-md mb-8 text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">LeetCode Profile</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Solving real interview questions and refining algorithmic thinking.
                </p>
                <a
                    href="https://leetcode.com/u/TarunSirapurapu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
                >
                    🧠 View My LeetCode
                </a>
            </div>

            {/* HackerRank Card */}
            <div className="w-full max-w-4xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
                    HackerRank Badges
                </h3>

                {/* Animated Badge Grid */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                >
                    {badges.map((badge) => (
                        <motion.a
                            key={badge.name}
                            href={badge.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center bg-white dark:bg-gray-900 p-3 rounded-lg shadow-sm hover:shadow-md transition hover:scale-105 w-28"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <img
                                src={badge.badge}
                                alt={badge.name}
                                className="w-12 h-12 object-contain mb-1"
                            />
                            <div className="flex items-center justify-center gap-1 text-xs font-medium text-gray-900 dark:text-white text-center">
                                {iconMap[badge.name] || null}
                                {badge.name}
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Coding;
