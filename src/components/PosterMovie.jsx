import { useState } from "react";
import { NO_IMAGE_URL } from "../utils/constants";

function PosterMovie({className, src, loading="auto"}){
    const [hasImageError, setHasImageError] = useState(false);
    const posterUrl = (hasImageError || src === "N/A" || !src) ? NO_IMAGE_URL : src;

    return (
        <img src={posterUrl} className={className} loading={loading} alt="" onError={() => setHasImageError(true)}/>
    );
}

export default PosterMovie;