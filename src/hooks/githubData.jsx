import { useEffect, useState } from 'react';
import { fetchGithub } from '../services/route';

export function useGithubData() {
  const [info, setInfo] = useState();
  //   const [userName, setUserName] = useState('');
  //   const [image, setImage] = useState('');
  //   const [link, setLink] = useState('');

  useEffect(() => {
    async function getProfile() {
      const profile = await fetchGithub();
      console.log('profile');
      setInfo(profile.login);
      //   setUserName(profile.userName);
      //   setImage(profile.avatar_url);
      //   setLink(profile.url);
    }
    getProfile();
  }, []);

  return { info };
}
