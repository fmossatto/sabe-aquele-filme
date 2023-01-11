import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <header className={styles.navbar}>
            <ul>
                <li>Home</li>
                <li>Filmes</li>
                <li>User</li>
            </ul>
        </header>
    );
};

export default NavBar;
