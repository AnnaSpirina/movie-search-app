import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
import { getPageNumbers } from "../../utils/getPageNumbers";
import styles from "./Pagination.module.css";

function Pagination({total, page: pageProp}){
    const [searchParams, setSearchParams] = useSearchParams();
    const page = pageProp ?? Number(searchParams.get("page") ?? 1);
    const totalPages = Math.ceil(total / PAGE_SIZE);

    const goToPage = (newPage) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', newPage);
        setSearchParams(params);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return(
        <div className={styles.pagination}>
            <button className={styles.buttonPagination} type="button" disabled={page <= 1} onClick={() => goToPage(page - 1)}>
                ‹ Назад
            </button>
            {
                getPageNumbers(page, totalPages).map((p, i) => 
                    p === '...' ?
                    <span className={`${styles.buttonPagination} ${styles.numberPagination}`} key={`dots-${i}`}>...</span> :
                    <button className={`${styles.buttonPagination} ${styles.numberPagination}`} key={p} type="button" onClick={() => goToPage(p)} aria-current={p === page ? 'page' : undefined}>
                        {p}
                    </button>
                )
            }
            <button className={styles.buttonPagination} type="button" disabled={page >= totalPages} onClick={() => goToPage(page + 1)}>
                Вперёд ›
            </button>
        </div>
    )
}

export default Pagination;