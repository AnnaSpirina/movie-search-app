import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

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
        <div>
            <button type="button" disabled={page <= 1} onClick={() => goToPage(page - 1)}>
                ‹ Назад
            </button>
            <span>{page} из {totalPages}</span>
            <button type="button" disabled={page >= totalPages} onClick={() => goToPage(page + 1)}>
                Вперёд ›
            </button>
        </div>
    )
}

export default Pagination;