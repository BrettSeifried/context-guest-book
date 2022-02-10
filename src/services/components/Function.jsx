import useGithubData from '../../hooks/githubData';
import './function.css';

export default function Entry({ entry: { name, message } }) {
  const { userName, image, link, repo } = useGithubData(name);

  return (
    <div>
      <div className="profile_header">
        <a href={link}>
          <img src={image} alt={name}></img>
          <h3>{userName}</h3>
          <h4>Repos: {repo}</h4>
        </a>
      </div>
      <p>{message}</p>
    </div>
  );
}
