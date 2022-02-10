import { useEffect, useState } from 'react';
import { fetchGithub } from '../services/route';

export default function useGithubData(name) {
  const [userName, setUserName] = useState('');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');
  const [repo, setRepo] = useState('');

  useEffect(() => {
    async function getProfile() {
      const profile = await fetchGithub(name);
      setUserName(profile.name);
      setImage(profile.avatar_url);
      setLink(profile.html_url);
      setRepo(profile.public_repos);
    }
    getProfile();
  }, [name]);

  return { userName, image, link, repo };
}
