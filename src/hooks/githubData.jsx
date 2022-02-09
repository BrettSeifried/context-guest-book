import { useEffect, useState } from 'react';
import { apiData } from '../services/route';

export function useGithubData() {
  const [info, setInfo] = useState();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    async function getProfile() {
      const profile = await apiData();
      console.log('profile', profile);
      setInfo(profile);
    }
    getProfile();
  }, []);

  return { info };
}
