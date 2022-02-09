//function Entry ({ entry: { name, message }}) {

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchGithub } from '../route';

// actual message name and message
export default function Entry({ entry: { name, message } }) {
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
  }, []);

  return (
    <div>
      <a href={link}>
        <img src={image} alt={name}></img>
        <h2>{userName}</h2>
        <h3>Repos: {repo}</h3>
      </a>
      <p>{message}</p>
    </div>
  );
}
