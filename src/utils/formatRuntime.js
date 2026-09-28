export function formatRuntime(runtimeStr) {
    if (!runtimeStr) return '';

    const match = runtimeStr.toLowerCase().match(/(\d+)\s*min/);
    if (!match) return runtimeStr;

    const totalMinutes = Number(match[1]);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours === 0) return `${minutes} мин`;
    if (minutes === 0) return `${hours} ч`;
    return `${hours} ч ${minutes} мин`;
}