import ActorAvatar from 'components/Filmes/ActorAvatar';
import MovieBanner from 'components/Filmes/MovieBanner';
import SectionTitle from 'components/Filmes/SectionTitle';
import styles from './Filmes.module.scss';

import image from 'assets/Tenacious.jpg';
import MovieCards from 'components/MovieCards';
import { useEffect, useState } from 'react';

const Filmes = () => {
    const [movies, setMovies] = useState([]);

    const atores = [
        {
            id: 1,
            name: 'Jack Black',
            role: 'JB',
            image: '/images/JB.jpg',
        },
        {
            id: 2,
            name: 'Kyle Gass',
            role: 'KG',
            image: '/images/KG.jpg',
        },
        {
            id: 3,
            name: 'JR Reed',
            role: 'Lee',
            image: '/images/Lee.jpg',
        },
        {
            id: 4,
            name: 'Ronnie James Dio',
            role: 'Dio',
            image: '/images/Dio.jpg',
        },
        {
            id: 5,
            name: 'Paul F. Tompkins',
            role: 'Open Mic Host',
            image: '/images/Paul.jpg',
        },
        {
            id: 6,
            name: 'Troy Gentile',
            role: "Lil' JB",
            image: '/images/Troy.jpg',
        },
        {
            id: 7,
            name: 'Troy Gentile',
            role: "Lil' JB",
            image: '/images/Troy.jpg',
        },
        {
            id: 8,
            name: 'Troy Gentile',
            role: "Lil' JB",
            image: '/images/Troy.jpg',
        },
        {
            id: 9,
            name: 'Troy Gentile',
            role: "Lil' JB",
            image: '/images/Troy.jpg',
        },
    ];

    const relatedMovies = [
        {
            id: 1,
            name: 'Tenacious D',
        },
        {
            id: 1,
            name: 'Tenacious D',
        },
        {
            id: 1,
            name: 'Tenacious D',
        },
        {
            id: 1,
            name: 'Tenacious D',
        },
        {
            id: 1,
            name: 'Tenacious D',
        },
    ];

    let api = process.env.REACT_APP_TMDB_API_KEY;

    const url = `https://api.themoviedb.org/3/movie/2179?api_key=${api}&language=pt-BR`;

    async function buscar() {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
        setMovies(data);
    }

    useEffect(() => {
        buscar();
    }, []);

    return movies ? (
        <main className={styles.filmes}>
            <MovieBanner movie={movies} />

            <div className={styles.pageContainer}>
                <SectionTitle title="Elenco" />
                <div className={styles.actorList}>
                    {atores.map((ator) => (
                        <ActorAvatar
                            key={ator.id}
                            name={ator.name}
                            role={ator.role}
                            image={ator.image}
                        />
                    ))}
                </div>

                <SectionTitle title="Veja Também" />

                <div className={styles.recommendedMovies}>
                    {relatedMovies.map((movie, index) => (
                        <MovieCards
                            name="Tenacious D: Uma Dupla Infernal"
                            release="2006"
                            image={image}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </main>
    ) : (
        <p>loading</p>
    );
};

export default Filmes;
