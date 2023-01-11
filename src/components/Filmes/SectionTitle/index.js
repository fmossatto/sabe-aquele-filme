import styles from './SectionTitle.module.scss';

const SectionTitle = ({ title }) => {
    return (
        <div className={styles.sectionTitle}>
            <div className={styles.beforeSection}></div>
            <span>{title}</span>
            <div className={styles.afterSection}></div>
        </div>
    );
};

export default SectionTitle;
