export async function apiData() {
  const resp = await fetch('https://api.github.com/zen');
  const data = await resp.json();
  return data;
}

export const fetchGithub = async (login) => {
  const resp = await fetch(`https://api.github.com/users/${login}`);
  const data = await resp.json();
  return data;
};
