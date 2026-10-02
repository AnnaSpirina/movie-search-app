import { useSearchParams } from "react-router-dom";

const startYear = 1890;
const currentYear = new Date().getFullYear();
const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => currentYear - i
);

function MovieFilters(){
    const [searchParams, setSearchParams] = useSearchParams();
    const type = searchParams.get("type") ?? '';
    const year = searchParams.get("y") ?? '';

    const handleChange = (event) => {
        const filterName = event.target.name;
        const params = new URLSearchParams(searchParams);
        const value = event.target.value;

        if (value){
            params.set(filterName, value);
        } else{
            params.delete(filterName);
        }

        setSearchParams(params);
    }

    return(
        <div>
            <select value={type} name="type" onChange={handleChange} aria-label="Тип фильма">
                <option value="">Все типы</option>
                <option value="movie">Фильмы</option>
                <option value="series">Сериалы</option>
                <option value="episode">Эпизоды</option>
            </select>
            <select value={year} name="y" onChange={handleChange} aria-label="Год выхода">
                <option value="">Год не выбран</option>
                {years.map(y => (
                    <option key={y} value={y}>{y}</option>
                ))}
            </select>
        </div>
    )
}

export default MovieFilters;