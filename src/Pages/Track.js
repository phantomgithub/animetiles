import React from 'react';
import Cards from '../Components/Cards'; 

const Track = () => {
    const songs = [
        {
            title: "Song 1",
            imageUrl: "https://via.placeholder.com/300", // Replace with actual image URLs
            link: "https://example.com/song1"
        },
        {
            title: "Song 2",
            imageUrl: "https://via.placeholder.com/300", // Replace with actual image URLs
            link: "https://example.com/song2"
        },
        {
            title: "Song 3",
            imageUrl: "https://via.placeholder.com/300", // Replace with actual image URLs
            link: "https://example.com/song3"
        },
        {
            title: "Song 4",
            imageUrl: "https://via.placeholder.com/300", // Replace with actual image URLs
            link: "https://example.com/song4"
        },
    ];

    return (
        <div className='flex justify-center items-center flex-wrap p-4'>
            {songs.map((song, index) => (
                <Cards 
                    key={index} 
                    title={song.title} 
                    imageUrl={song.imageUrl} 
                    link={song.link} 
                />
            ))}
        </div>
    );
}

export default Track;
