import React from 'react';

const Tabs = ({ tabs, active, setActive }) => {
    return (
        <div className="flex justify-center space-x-4">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-colors
            ${active === tab.id
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                        }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
