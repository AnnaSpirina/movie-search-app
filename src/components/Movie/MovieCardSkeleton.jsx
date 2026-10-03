import styles from "./MovieCardSkeleton.module.css";

function MovieCardSkeleton(){
    return (
        <div className={styles.card} aria-hidden="true">
            <div className={`${styles.block} ${styles.poster}`}></div>
            <div className={`${styles.block} ${styles.title}`}></div>
            <div className={`${styles.block} ${styles.type}`}></div>
        </div>
    )
}

export default MovieCardSkeleton;