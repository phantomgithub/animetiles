import React from 'react';

const PianoKeys = ({ keys, activeKey }) => {
    return (
        <div className="flex justify-center items-end absolute bottom-0 w-full h-40 bg-orange-200">
            {keys.map((keyObj) => (
                <div
                    key={keyObj.key}
                    className={`flex justify-center items-center w-16 h-40 mx-1 border-2 rounded-lg 
                    ${activeKey === keyObj.key ? 'bg-orange-700 text-white' : 'bg-orange-300 text-brown-700'} transition`}
                    style={{ writingMode: 'vertical-rl' }}
                >
                    {keyObj.note}
                </div>
            ))}
        </div>
    );
};

export default PianoKeys;
