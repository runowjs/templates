/**
 * token key
 */
const TOKEN_KEY = import.meta.env.VITE_TOKEN_KEY;

/**
 * get token
 */
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

/**
 * save token
 * use jwt type
 * @param token
 */
export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, `Bearer ${token}`);
};

/**
 * delete token
 */
export const delToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

/**
 * check token
 */
export const hasToken = () => {
  return !!localStorage.getItem(TOKEN_KEY);
};
