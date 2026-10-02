import { useState, useEffect } from "react";

export function useFetch(fetchFn){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!fetchFn) return;

        let ignore = false;
        const load = async () => {
            setLoading(true);
            setError(null);
            try{
                const result = await fetchFn();
                if (!ignore) setData(result);
            } catch (err){
                if (!ignore) setError(err.message);
            } finally{
                if (!ignore) setLoading(false);
            }
        }
        load();

        return () => {
            ignore = true;
        }
    }, [fetchFn]);

    return { data, loading, error };
}