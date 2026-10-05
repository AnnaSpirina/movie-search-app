import { Link } from "react-router-dom";
import styles from "./HomeGuide.module.css";

const STEPS = [
    {
        title: "Найдите фильм",
        text: "Введите название в строке поиска вверху. Ищите на английском, база OMDb хранит оригинальные названия.",
    },
    {
        title: "Уточните результаты",
        text: "Отфильтруйте найденное по типу (фильм, сериал, эпизод) и году выхода.",
    },
    {
        title: "Откройте подробности",
        text: "Нажмите на карточку, чтобы увидеть описание, рейтинг IMDb, жанры и актёров.",
    },
    {
        title: "Сохраните в избранное",
        text: "Нажмите на сердечко. Список избранного сохранится, даже если закрыть браузер.",
    },
];

const EXAMPLES = ["Batman", "The Matrix", "Harry Potter", "Interstellar", "Friends"];

function HomeGuide(){
    return (
        <section className={styles.guide}>
            <div className={styles.intro}>
                <h1 className={styles.title}>Как пользоваться КиноГидом</h1>
                <p className={styles.subtitle}>Ищите фильмы и сериалы, смотрите подробности и собирайте свою коллекцию.</p>
            </div>

            <ol className={styles.steps}>
                {STEPS.map((step, i) => (
                    <li key={step.title} className={styles.step}>
                        <span className={styles.number} aria-hidden="true">{i + 1}</span>
                        <h2 className={styles.stepTitle}>{step.title}</h2>
                        <p className={styles.stepText}>{step.text}</p>
                    </li>
                ))}
            </ol>

            <div className={styles.examples}>
                <span className={styles.examplesLabel}>Попробуйте:</span>
                {EXAMPLES.map((example) => (
                    <Link
                        key={example}
                        to={`/?${new URLSearchParams({ q: example })}`}
                        className={styles.example}
                    >
                        {example}
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default HomeGuide;
