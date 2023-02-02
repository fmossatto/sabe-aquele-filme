import styles from './MovieCards.module.scss';

const MovieCards = ({ name, image, release }) => {
    return (
        <div className={styles.movieCard}>
            <div className={styles.imageContainer}>
                <img src={image} alt={`capa do filme ${name}`} />
            </div>
            <button>Ver Página</button>
        </div>
    );
};

export default MovieCards;
