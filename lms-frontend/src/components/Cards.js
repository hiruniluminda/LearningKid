import React from 'react';

const StatsCard = ({ title, value }) => (
    <div className="stats-card">
        <h3>{title}</h3>
        <p>{value}</p>
    </div>
);

const Cards = () => {
    const stats = [
        { title: 'Students', value: '1,000' },
        { title: 'Lessons', value: '121' },
        { title: 'Quizes', value: '24' },
        { title: 'Growing', value: '20%' },
    ];

    return (
        <div className="cards-container">
            {stats.map((stat, index) => (
                <StatsCard key={index} title={stat.title} value={stat.value} />
            ))}
        </div>
    );
};

export default Cards;