import React, { useState } from 'react';
import Tabs from '../components/Tabs';
import LeetCodeCard from '../components/LeetCodeCard';
import NeetCodeCard from '../components/NeetCodeCard';
import HackerRankCard from '../components/HackerRankCard';

const CodingPage = () => {
    const [activeTab, setActiveTab] = useState('leetcode');

    return (
        <section className="bg-white min-h-screen flex items-center justify-center py-20" id="coding">
            <div className="container-card w-full">
                <h2 className="section-heading">My Coding Progress</h2>

                <p className="text-gray-600 text-center text-lg mb-12 max-w-3xl mx-auto" data-aos="fade-up">
                    This section reflects my journey across LeetCode, NeetCode, and HackerRank.
                    Real-time stats, charts, and challenges I've tackled along the way.
                </p>

                {/* Tabs Section */}
                <div className="w-full mb-8" data-aos="fade-up" data-aos-delay="200">
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