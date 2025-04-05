import badges from '../data/hackerrank_badges';

const HackerRankSection = () => {
    return (
        <section className="py-12 px-4 md:px-16 flex flex-col items-center justify-center">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-1000 dark:text-white flex items-center gap-2">
                🧠 <span>HackerRank Skill Badges</span>
            </h2>

            {/* Badge Grid */}
            <div className="flex flex-wrap justify-center gap-6">
                {badges.map((badge) => (
                    <a
                        key={badge.name}
                        href={badge.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center dark:bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105 w-32"
                    >
                        <img
                            src={badge.badge}
                            alt={badge.name}
                            className="w-16 h-16 object-contain mb-2"
                        />
                        <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
                            {badge.name}
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default HackerRankSection;
