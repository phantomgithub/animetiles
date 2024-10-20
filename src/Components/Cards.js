import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ title, imageUrl, link }) => {
    return (
        <div className="relative w-64 h-40 m-4 overflow-hidden rounded-lg shadow-lg">
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                <Link 
                    to={link} 
                    className="flex items-center justify-center h-full w-full text-white text-lg font-bold bg-black bg-opacity-50 hover:bg-opacity-70 transition"
                >
                    {title}
                </Link>
            </div>
        </div>
    );
};

export default Cards;
