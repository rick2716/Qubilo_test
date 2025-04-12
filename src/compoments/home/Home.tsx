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

interface Filters {
    status: string;
    gender: string;
    species: string;
    type: string;
}

const Home = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [filters, setFilters] = useState<Filters>({
        status: '',
        gender: '',
        species: '',
        type: '',
    });
    const [pageIndex, setPageIndex] = useState(0);
    const [totalCharacters, setTotalCharacters] = useState(0);

    const charactersPerPage = 9;

    const isFiltering = Object.values(filters).some((val) => val.trim() !== '');

    // toma el total de personajes
    useEffect(() => {
        if (!isFiltering) {
            fetch('https://rickandmortyapi.com/api/character')
                .then((res) => res.json())
                .then((data) => {
                    setTotalCharacters(data.info.count);
                });
        }
    }, [isFiltering]);

    // Fetch de los personajes por filtro o ID
    useEffect(() => {
        const fetchCharacters = async () => {
            if (isFiltering) {
                let baseUrl = 'https://rickandmortyapi.com/api/character/?';
                Object.entries(filters).forEach(([key, value]) => {
                    if (value.trim()){
                        baseUrl += `${key}=${encodeURIComponent(value)}&`;
                    } 
                });

                try {
                    const firstRes = await fetch(baseUrl);
                    const firstData = await firstRes.json();

                    if (!firstData.results || !firstData.info) {
                        setCharacters([]);
                        setTotalCharacters(0);
                        return;
                    }

                    const totalPages = firstData.info.pages;
                    const allPagesUrls = [];

                    for (let i = 1; i <= totalPages; i++) {
                        allPagesUrls.push(`${baseUrl}page=${i}`);
                    }

                    const allResponses = await Promise.all(allPagesUrls.map((url) => fetch(url)));
                    const allJsons = await Promise.all(allResponses.map((res) => res.json()));

                    const allCharacters = allJsons.flatMap((data) => data.results);

                    setTotalCharacters(allCharacters.length);
                    const start = pageIndex * charactersPerPage;
                    const end = start + charactersPerPage;
                    setCharacters(allCharacters.slice(start, end));
                } catch (err) {
                    console.error('Error cargando personajes con filtros:', err);
                }
            } else {
                // Modo normal por ID
                const startId = pageIndex * charactersPerPage + 1;
                const ids: number[] = [];

                for (let i = 0; i < charactersPerPage; i++) {
                    ids.push(startId + i);
                }

                try {
                    const res = await fetch(`https://rickandmortyapi.com/api/character/${ids.join(',')}`);
                    const data = await res.json();
                    setCharacters(Array.isArray(data) ? data : [data]);
                } catch (err) {
                    console.error('Error cargando por ID:', err);
                }
            }
        };

        fetchCharacters();
    }, [filters, pageIndex, isFiltering]);

    const handleFilterChange = (field: keyof Filters, value: string) => {
        setPageIndex(0); 
        setFilters((prev) => ({ ...prev, [field]: value }));
    };

    const handlePrev = () => {
        if (pageIndex > 0){
            setPageIndex((prev) => prev - 1);
        } 
    };

    const handleNext = () => {
        const maxPages = Math.ceil(totalCharacters / charactersPerPage);
        if (pageIndex < maxPages - 1){
            setPageIndex((prev) => prev + 1);
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
                    <SidebarFilter filters={filters} onChange={handleFilterChange} />
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
                        <button className="nav-btn" onClick={handlePrev} disabled={pageIndex === 0}>
                            Anterior
                        </button>
                        <button
                            className="nav-btn"
                            onClick={handleNext}
                            disabled={(pageIndex + 1) * charactersPerPage >= totalCharacters}
                        >
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
