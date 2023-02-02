import styles from './MovieBanner.module.scss';

import { BiTime, BiListUl } from 'react-icons/bi';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';

const MovieBanner = ({ movie }) => {
    const cover = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const backgroundImage = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

    return (
        <section
            className={styles.movieBanner}
            style={{ backgroundImage: 'url(' + backgroundImage + ')' }}
        >
            <div className={styles.movieInfo}>
                <div className={styles.imageContainer}>
                    <img src={cover} alt="Capa do filme" />
                    <button>Marcar como Assistido</button>
                </div>
                <div className={styles.movieDataContainer}>
                    <h1>{movie.title}</h1>

                    <article>
                        <p>{movie.overview}</p>
                    </article>

                    <div className={styles.movieData}>
                        <span>{movie.release_date ? movie.release_date.substring(0, 4) : ''}</span>
                        <span>
                            <BiTime />
                            {`${Math.trunc(movie.runtime / 60)}h ${movie.runtime % 60}m`}
                        </span>
                        <ul className={styles.movieGenres}>
                            {movie.genres &&
                                movie.genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MovieBanner;
