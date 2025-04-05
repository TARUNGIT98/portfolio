// src/pages/CodingPage.jsx
import React, { useState } from 'react';
import Tabs from '../components/Tabs';
import LeetCodeCard from '../components/LeetCodeCard';
import NeetCodeCard from '../components/NeetCodeCard';
import HackerRankCard from '../components/HackerRankCard';

const CodingPage = () => {
    const [activeTab, setActiveTab] = useState('leetcode');

    return (
        <section className="home-container bg-white px-6 py-20 md:py-28" id="coding">
            <div className="home-content max-w-6xl mx-auto flex flex-col gap-16" data-aos="fade-right">

                {/* Heading Section */}
                <div className="text-left">

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-2">
                        My <span className="text-blue-700">Coding Progress</span>
                    </h1>

                    <p className="text-gray-600 text-base max-w-xl mb-8">
                        This section reflects my journey across LeetCode, NeetCode, and HackerRank.
                        Real-time stats, charts, and challenges I've tackled along the way — all in one interactive dashboard.
                    </p>
                </div>

                {/* Tabs Section */}
                <div className="w-full" data-aos="fade-up" data-aos-delay="200">
                    <Tabs
                        active={activeTab}
                        setActive={setActiveTab}
                        tabs={[
                            { id: 'leetcode', label: 'LeetCode' },
                            { id: 'neetcode', label: 'NeetCode' },
                            { id: 'hackerrank', label: 'HackerRank' },
                        ]}
                    />
                </div>

                {/* Content Section */}
                <div className="w-full" data-aos="fade-up" data-aos-delay="400">
                    {activeTab === 'leetcode' && <LeetCodeCard username="TarunSirapurapu" />}
                    {activeTab === 'neetcode' && <NeetCodeCard username="TarunSirapurapu" />}
                    {activeTab === 'hackerrank' && <HackerRankCard />}
                </div>
            </div>
        </section>
    );
};

export default CodingPage;
