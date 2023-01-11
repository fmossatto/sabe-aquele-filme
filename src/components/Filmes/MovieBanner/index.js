import styles from './MovieBanner.module.scss';
import cover from 'assets/Tenacious.jpg';

import { BiTime } from 'react-icons/bi';

const MovieBanner = () => {
    return (
        <section className={styles.movieBanner}>
            <div className={styles.movieInfo}>
                <div className={styles.imageContainer}>
                    <img src={cover} alt="Capa do filme" />
                    <button>Marcar como Assistido</button>
                </div>
                <div className={styles.movieDataContainer}>
                    <h1>Tenacious D: Uma dupla infernal</h1>
                    <div className={styles.movieData}>
                        <span>2006</span>
                        <span>
                            <BiTime />
                            1h 34m
                        </span>
                        <span>Estados Unidos</span>
                    </div>
                    <ul className={styles.movieGenres}>
                        <li>Comédia</li>
                        <li>Música</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MovieBanner;
