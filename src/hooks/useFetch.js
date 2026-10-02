import { useState, useEffect } from "react";

export function useFetch(fetchFn){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            setError(null);
            try{
                const result = await fetchFn();
                setData(result);
            } catch (err){
                setError(err.message);
            } finally{
                setLoading(false);
            }
        }
        load();
    }, [fetchFn]);

    return { data, loading, error };
}