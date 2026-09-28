export function formatGenres(genres) {
  if (!genres) return [];
  return genres.split(/\s*,\s*/).filter(genre => genre.length > 0);
}