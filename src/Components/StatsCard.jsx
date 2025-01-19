import './StatsCard.css'

const statsData = [
    { value: '10+', label: 'Years' },
    { value: '62+', label: 'Countries' },
    { value: '90%', label: 'Repeat Clients' },
    { value: '320+', label: 'Customers' },
    { value: '35+', label: 'Technocrats' }
];

const StatsCard = () => {
    return (
        <div className="stats-section">
            <h2 className="section-title">
                <h2 className="highlight">Excellence</h2>
                
               <h3>Accomplishments that keep us going</h3> 
            </h2>
            <div className="stats-grid">
                {statsData.map((stat, index) => (
                    <div key={index} className="stats-card">
                        <h3>{stat.value}</h3>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsCard;
