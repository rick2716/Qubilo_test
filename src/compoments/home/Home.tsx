import { useEffect, useState } from 'react';
import Card from '../card/Card';
import './homeStyle.css';
import SidebarFilter from '../sidebarFilter/SidebarFilter';

interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    type: string;
    origin: {
        name: string;
    };
    image: string;
}



const Home = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [totalCharacters, setTotalCharacters] = useState(0);
    const [startId, setStartId] = useState(1);

    const charactersPerPage = 9;

    const endId = Math.min(startId + charactersPerPage - 1, totalCharacters);

    // Traer el total de personajes una sola vez
    useEffect(() => {
        const fetchTotal = async () => {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character");
                const data = await response.json();
                setTotalCharacters(data.info.count);
            } catch (error) {
                console.error('Error al obtener total de personajes:', error);
            }
        };

        fetchTotal();
    }, []);

    // Cada vez que cambia el rango de IDs
    useEffect(() => {
        const fetchByIdRange = async () => {
            const ids = [];
            for (let i = 0; i < 9; i++) {
                ids.push(startId + i);
            }

            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${ids.join(",")}`);
                const data = await response.json();
                setCharacters(Array.isArray(data) ? data : [data]);
            } catch (error) {
                console.error('Error al cargar personajes por ID:', error);
            }
        };

        if (totalCharacters > 0) {
            fetchByIdRange();
        }
    }, [startId, endId, totalCharacters]);

    const handlePrev = () => {
        if (startId > 1) {
            setStartId((prev) => Math.max(prev - charactersPerPage, 1));
        }
    };

    const handleNext = () => {
        if (startId + charactersPerPage <= totalCharacters) {
            setStartId((prev) => prev + charactersPerPage);
        }
    };

    return (
        <div className="home-container">
            <div className="home-header">
                <img src="https://shop.warnerbros.co.uk/cdn/shop/files/Rick_and_Morty_Logo_Lockup_1.png?v=1697228078" alt="logo" className="header-logo" />
                <h1 className="header-title">Character List</h1>
            </div>

            <div className="home-content">
                <aside className="home-sidebar">
                    <SidebarFilter />
                </aside>
                <div className="home-main">
                    <div className="card-grid">
                        {characters.map((character) => (
                            <Card
                                key={character.id}
                                imageSrc={character.image}
                                name={character.name}
                                status={character.status}
                                species={character.species}
                                gender={character.gender}
                                type={character.type}
                                origin={character.origin.name}
                                id={character.id}
                            />
                        ))}
                    </div>
                    <div className="navigation-buttons">
                        <button className="nav-btn" onClick={handlePrev} disabled={startId === 1}>
                            Anterior
                        </button>
                        <button className="nav-btn" onClick={handleNext} disabled={endId >= totalCharacters}>
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
