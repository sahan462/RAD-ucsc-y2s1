import React from 'react';

const Card = ({ title, content }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

const CardList = ({ cards }) => {
    return (
        <div>
            <h1>Card List</h1>
            {cards.map((card, index) => (
                <Card key={index} title={card.title} content={card.content} />
            ))}
        </div>
    );
};

export default CardList;
