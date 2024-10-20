import React from 'react';
import { useState } from 'react';
import Cards from '../Components/Cards';


const Home = () => {
    const [name, setName] = useState("Areeb");
    const [inputValue, setInputValue] = useState("");

    const click = () => {
        setName(inputValue);
        setInputValue("");
    };

    const songs = [
        {
            title: "Tokyo Ghoul",
            imageUrl: "/tg.jpg",
            link: "/play/Tokyo Ghoul"
        },
        {
            title: "Spy Family",
            imageUrl: "/spyfam.jpg",
            link: "/play/Spy Family"
        },
        {
            title: "Kaguya Sama",
            imageUrl: "/ks.jpg",
            link: "/play/Kaguya Sama"
        },
        {
            title: "Mashle",
            imageUrl: "/mashle.jpg",
            link: "/play/Mashle"
        },
    ];

    return (
        <div className="flex flex-col items-center bg-orange-200 text-gray-700 min-h-screen overflow-hidden">
            <h1 className="font-cherry heading mt-32">AnimeTiles</h1>
            <p className="font-cherry text-xl sub-heading">アニメタイルズ</p>
            <div className="flex items-center mt-20 mb-4">
                <label
                    className="text-brown-700 font-cherry font-extralight text-xl mr-4"
                    htmlFor="nameInput"
                >
                    Name:-
                </label>
                <input
                    id="nameInput"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="text-lg font-cherry bg-transparent border-b-2 border-b-orange-300 focus:outline-none focus:border-brown-900 text-gray-700 w-64"
                />
            </div>
            <button
                className="mt-8 px-6 py-2 bg-orange-700 text-white rounded font-cherry hover:bg-brown-800 transition"
                type="button"
                onClick={click}
            >
                Submit
            </button>
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
        </div>
    );
}

export default Home;
