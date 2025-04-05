import React from 'react';
import { motion } from 'framer-motion';

const NeetCodeCard = ({ username }) => {
    return (
        <motion.div
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-md text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                NeetCode Progress
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Currently grinding DSA patterns to level up 🚀
            </p>

            {/* Mock Stats – replace manually for now */}
            <div className="flex justify-center gap-6 text-sm font-medium text-gray-800 dark:text-gray-100 mb-6">
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-inner">
                    Solved: <span className="font-bold text-green-600">42</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-inner">
                    Easy/Med/Hard: <span className="font-bold text-yellow-500">28 / 20 / 4</span>
                </div>
            </div>

            <a
                href={`https://neetcode.io/practice/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                🚀 View My NeetCode
            </a>
        </motion.div>
    );
};

export default NeetCodeCard;
