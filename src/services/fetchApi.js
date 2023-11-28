const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-8aJkQDzgukDWqCZ5ru9W1Aya";
const getCoins = async (page, currenc) => {
  const res = await fetch(
    `${BASE_URL}/coins/markets?vs_currency=${currenc}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
};
const searchCoins = async (query) => {
  const res = await fetch(
    `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`,
    { cache: "no-cache" }
  );
  const data = await res.json();
  return data.coins;
};
const chartCoins = (coin) =>
  `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=5&x_cg_demo_api_key=${API_KEY}`;

export { getCoins, searchCoins, chartCoins };
