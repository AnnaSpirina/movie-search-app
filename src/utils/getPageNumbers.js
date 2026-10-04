export function getPageNumbers(current, total){
    if (total <= 7){
        return Array.from({length: total}, (_, i) => i + 1);
    }

    const pages = [1];
    const from = Math.max(2, current - 1);
    const to = Math.min(total - 1, current + 1);

    if (from > 2) pages.push('...');
    for (let p = from; p <= to; p++) pages.push(p);
    if (to < total - 1) pages.push('...');

    pages.push(total);
    return pages;
}