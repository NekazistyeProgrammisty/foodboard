export const BASE_URL: string =
  process.env.REACT_APP_BASE_URL || '';

export const PIZZA_API_URL: string = BASE_URL.concat('/pizzas');
