import React from "react";
import './cardStyle.css';

interface CardProps {
    imageSrc: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    type?: string;
    origin: string;
    id: number;
}

const Card: React.FC<CardProps> = ({ imageSrc, name, status, species, gender, type, origin, id }) => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-image">
                    <img src={imageSrc} alt={name} />
                </div>

                <div className="card-details">
                    <div className="card-detail-row">
                        <h3>Number#</h3>
                        <p>{id}</p>
                    </div>
                    <div className="card-detail-row">
                        <h3>Name</h3>
                        <p>{name}</p>
                    </div>
                    <div className="card-detail-row">
                        <h3>Status</h3>
                        <p>{status}</p>
                    </div>
                    <div className="card-detail-row">
                        <h3>Species</h3>
                        <p>{species}</p>
                    </div>
                    <div className="card-detail-row">
                        <h3>Gender</h3>
                        <p>{gender}</p>
                    </div>
                    <div className="card-detail-row">
                        <h3>Type</h3>
                        {type ? <p>{type}</p> : <p>No type assing</p>}
                    </div>
                    <div className="card-detail-row last">
                        <h3>Origin</h3>
                        <p>{origin}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
