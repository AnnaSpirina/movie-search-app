export function formatList(list) {
  if (!list) return [];

  return list.split(/\s*,\s*/).filter(item => item.length > 0 && item !== 'N/A');
}