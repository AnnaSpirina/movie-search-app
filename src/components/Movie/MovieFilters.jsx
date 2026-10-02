import { useSearchParams } from "react-router-dom";

function MovieFilters(){
    const [searchParams, setSearchParams] = useSearchParams();
    const type = searchParams.get("type") ?? '';

    const handleChange = (event) => {
        const params = new URLSearchParams(searchParams);
        const value = event.target.value;

        if (value){
            params.set("type", value);
        } else{
            params.delete("type");
        }

        setSearchParams(params);
    }

    return(
        <select value={type} onChange={handleChange} aria-label="Тип">
            <option value="">Все типы</option>
            <option value="movie">Фильмы</option>
            <option value="series">Сериалы</option>
            <option value="episode">Эпизоды</option>
        </select>
    )
}

export default MovieFilters;