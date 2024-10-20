import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const Play = () => {
    const { songName } = useParams();
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.src = `/videos/${songName}.mp4`; 
            videoRef.current.play().catch((error) => {
                console.error("Error playing video:", error);
            });
        }
    }, [songName]);

    return (
        <div className="relative min-h-screen bg-orange-200 text-gray-700">
            <video 
                ref={videoRef} 
                className="absolute top-0 left-0 w-full h-full object-cover" 
                autoPlay 
                loop 
                muted 
            />
        </div>
    );
};

export default Play;
