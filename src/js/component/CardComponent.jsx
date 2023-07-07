import React from 'react';

export const CardComponent = ({ prideCards }) => {
    return (
        <>
            <div className="d-flex flex-wrap justify-content-evenly container">
                {prideCards.map(card => (
                    <div className="card mb-3" style={{ width: "20rem" }} key={card.id}>
                        <label className="bg-warning">
                            <h5 className="p-2 pt-3">GAY PRIDE 2023</h5>
                        </label>
                        <img src={card.url} alt="Gay pride Spain pictures" />

                        <div className="card-body">
                            <h5 className="card-title p-2 rounded">{card.title}</h5>
                            <h6 className="card-title p-2 rounded fst-italic">{card.author}</h6>
                            <p className="card-text">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};