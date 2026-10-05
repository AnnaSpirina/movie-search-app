import styles from "./MovieDetailsSkeleton.module.css";

const PLOT_LINES = [100, 100, 95, 60];
const GENRES_COUNT = 3;
const ACTORS_COUNT = 5;
const DETAILS_COUNT = 4;

function MovieDetailsSkeleton(){
    return (
        <div className={styles.container} aria-hidden="true">
            <div className={styles.information}>
                <div className={`${styles.block} ${styles.poster}`}></div>
                <div className={styles.description}>
                    <div className={`${styles.block} ${styles.title}`}></div>
                    <div className={`${styles.block} ${styles.parameter}`}></div>
                    <div className={`${styles.block} ${styles.rating}`}></div>
                    <div className={styles.plot}>
                        {PLOT_LINES.map((width, i) => (
                            <div key={i} className={`${styles.block} ${styles.line}`} style={{ width: `${width}%` }}></div>
                        ))}
                    </div>
                    <div className={styles.genres}>
                        {Array.from({ length: GENRES_COUNT }, (_, i) => (
                            <div key={i} className={`${styles.block} ${styles.genre}`}></div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <div className={`${styles.block} ${styles.sectionTitle}`}></div>
                <div className={styles.actors}>
                    {Array.from({ length: ACTORS_COUNT }, (_, i) => (
                        <div key={i} className={styles.actor}>
                            <div className={`${styles.block} ${styles.avatar}`}></div>
                            <div className={`${styles.block} ${styles.actorName}`}></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.details}>
                {Array.from({ length: DETAILS_COUNT }, (_, i) => (
                    <div key={i} className={styles.detailsRow}>
                        <div className={`${styles.block} ${styles.detailsLabel}`}></div>
                        <div className={`${styles.block} ${styles.detailsValue}`}></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieDetailsSkeleton;
