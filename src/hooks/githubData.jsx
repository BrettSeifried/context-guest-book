import { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import { fetchGithub } from '../services/apiData/route';

export default function useGithubData() {
  const [userName, setUserName] = useState('');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');
  const [repo, setRepo] = useState('');
  const { user } = useUser();

  useEffect(() => {
    async function getProfile() {
      const profile = await fetchGithub(user);
      setUserName(user);
      setImage(profile.avatar_url);
      setLink(profile.html_url);
      setRepo(profile.public_repos);
    }
    getProfile();
  }, [user]);

  return { userName, image, link, repo };
}
