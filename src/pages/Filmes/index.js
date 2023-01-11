import MovieBanner from 'components/Filmes/MovieBanner';
import SectionTitle from 'components/SectionTitle';
import styles from './Filmes.module.scss';

const Filmes = () => {
    return (
        <main className={styles.filmes}>
            <MovieBanner />
            <div className={styles.pageContainer}>
                <SectionTitle title="Sinopse" />
                <article className={styles.movieSinopse}>
                    <p>
                        Na ensolarada Venice Beach, Califórnia, a história do rock começa a mudar
                        para sempre quando um jovem e inexperiente fã chamado JB conhece um sujeito
                        preguiçoso de nome KG. Os dois se tornam amigos quase instantaneamente e
                        juntos formam o seu próprio grupo, o Tenacious D. Apesar de ter apenas dois
                        integrantes, o título de "maior banda de rock do mundo" se torna a sua maior
                        obsessão. E para transformar o seu sonho em realidade, eles precisam obter o
                        item supremo: uma palheta de guitarra mágica que é mantida em segurança num
                        imponente museu do rock & roll.
                    </p>
                </article>

                <SectionTitle title="Elenco" />
            </div>
        </main>
    );
};

export default Filmes;
