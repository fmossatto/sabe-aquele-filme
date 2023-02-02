import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <header className={styles.navbar}>
            <ul>
                <li>Home</li>
                <li>Filmes</li>
                <li>Séries</li>
            </ul>
            <div className={styles.avatar}></div>
        </header>
    );
};

export default NavBar;
