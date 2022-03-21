export const fetchEth = async () => {
  const resp = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`
  );
  const data = await resp.json();
  return data;
};
