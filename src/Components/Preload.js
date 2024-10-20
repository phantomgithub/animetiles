import React from 'react';

const Preload = ({ gifLink }) => {
    return (
        <div className="flex items-center justify-center h-screen bg-orange-200">
            <img src={gifLink} alt="Loading..." />
        </div>
    );
};

export default Preload;
