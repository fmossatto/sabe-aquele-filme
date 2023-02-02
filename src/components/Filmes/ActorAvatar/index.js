import styles from './ActorAvatar.module.scss';

const ActorAvatar = ({ name, role, image }) => {
    return (
        <div className={styles.actorAvatar}>
            <div className={styles.imageContainer}>
                <img src={image} alt={`foto do ator ${name}`} />
            </div>
            <div className={styles.actorInfo}>
                <p>{name}</p>
                <span>{role}</span>
            </div>
        </div>
    );
};

export default ActorAvatar;
