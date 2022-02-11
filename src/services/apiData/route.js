export const fetchGithub = async (login) => {
  const resp = await fetch(`https://api.github.com/users/${login}`);
  const data = await resp.json();
  return data;
};
