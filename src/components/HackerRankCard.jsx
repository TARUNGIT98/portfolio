import React from 'react';
import badges from '../data/hackerrank_badges';
import { motion } from 'framer-motion';
import { FaCode, FaPython } from 'react-icons/fa';

const iconMap = {
    'Problem Solving': <FaCode className="text-green-600" />,
    Python: <FaPython className="text-blue-500" />,
};

const HackerRankCard = () => {
    return (
        <motion.div
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-md text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                HackerRank Badges
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Hit on the badges to get redirected to my profile.!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
                {badges.map((badge) => (
                    <a
                        key={badge.name}
                        href={badge.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center bg-white dark:bg-gray-900 p-3 rounded-lg shadow-sm hover:shadow-md transition hover:scale-105 w-28"
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
                    </a>
                ))}
            </div>
        </motion.div>
    );
};

export default HackerRankCard;
