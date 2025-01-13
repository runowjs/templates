/**
 * get formatted title
 * @param current
 */
export function title(current: string) {
  return [current, import.meta.env.VITE_APP_NAME].join(' - ');
}
