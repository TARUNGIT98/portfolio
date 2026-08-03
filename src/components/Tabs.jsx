import "../styles/tabs.css";

const Tabs = ({ tabs, active, setActive }) => {
    return (
        <div className="tabs" role="tablist">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    role="tab"
                    aria-selected={active === tab.id}
                    className={active === tab.id ? "tab is-active" : "tab"}
                    onClick={() => setActive(tab.id)}
                >
                    {tab.label}
                    {tab.count != null && <span className="tab-count">{tab.count}</span>}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
