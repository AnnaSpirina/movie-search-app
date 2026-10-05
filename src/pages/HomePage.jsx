import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { searchMovies } from '../utils/api';
import MovieList from '../components/Movie/MovieList';
import MovieFilters from '../components/Movie/MovieFilters';
import { PAGE_SIZE } from '../utils/constants';
import Pagination from '../components/UI/Pagination';
import styles from './HomePage.module.css';
import HomeGuide from '../components/Home/HomeGuide';

function HomePage() {
    const [searchParams] = useSearchParams();
    const qValue = searchParams.get('q');
    const typeValue = searchParams.get('type');
    const yearValue = searchParams.get('y');
    const pageValue = searchParams.get('page');

    const fetchMovies = useCallback(
        () => searchMovies({text: qValue, type: typeValue, year: yearValue, page: pageValue}),
        [qValue, typeValue, yearValue, pageValue]
    )

    const { data, loading, error } = useFetch(qValue ? fetchMovies : null);

    if (!qValue) return <HomeGuide />;

    const movies = data?.movies ?? [];
    const total = data?.totalResults ?? 0;

    const searchContent = () => {
        if (loading) return <MovieList loading={true} />;
        if (error) return <div>{error}</div>;
        return <MovieList movies={movies} />
    }
    
    return (
        <div>
            <MovieFilters />
            <div className='header-page'>
                <h1>Результаты поиска</h1>
                {(!loading && !error) && <div className={styles.findDiv}>Найдено: <span className={styles.totalFind}>{total}</span></div>}
            </div>
            {searchContent()}
            {(!loading && !error && total > PAGE_SIZE) && <Pagination total={total}/>}
        </div>
    );
}

export default HomePage