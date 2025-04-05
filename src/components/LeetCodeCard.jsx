import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const LeetCodeCard = ({ username }) => {
    const [data, setData] = useState(null);
    const [totalSolved, setTotalSolved] = useState(0);
    const [error, setError] = useState(null);

    const COLORS = {
        Easy: '#34D399',   // green
        Medium: '#FBBF24', // yellow
        Hard: '#EF4444',   // red
    };

    const fetchLeetCodeStats = async () => {
        try {
            const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
            const json = await res.json();

            if (json.status === 'success' || json.totalSolved >= 0) {
                const chartData = [
                    { name: 'Easy', value: json.easySolved },
                    { name: 'Medium', value: json.mediumSolved },
                    { name: 'Hard', value: json.hardSolved },
                ];
                setData(chartData);
                setTotalSolved(json.totalSolved);
            } else {
                throw new Error('Invalid response');
            }
        } catch (err) {
            console.error('Failed to fetch LeetCode stats:', err);
            setError('Failed to load LeetCode stats.');
        }
    };

    useEffect(() => {
        fetchLeetCodeStats();
    }, [username]);

    return (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-md text-center" data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white flex justify-center items-center gap-2">
                🧠 LeetCode Stats
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                Total Solved: <span className="font-bold text-blue-600 dark:text-blue-400">{totalSolved}</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                via public REST API
            </p>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            {data ? (
                <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={90}
                            innerRadius={50}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            ) : (
                !error && <p className="text-sm text-gray-400">Loading stats...</p>
            )}
        </div>
    );
};

export default LeetCodeCard;