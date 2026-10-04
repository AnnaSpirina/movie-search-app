import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

function NotFoundPage() {
    return (
        <div className={styles.notFoundPage}>
            <span className={styles.code}>404</span>
            <h1>Страница не найдена</h1>
            <Link to="/" className="button button-purple">На главную</Link>
        </div>
    )
}

export default NotFoundPage