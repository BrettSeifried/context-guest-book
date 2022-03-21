import useGithubData from '../../hooks/githubData';
import './function.css';

export default function Entry({ entry: { name, message } }) {
  const { userName, image, link, repo } = useGithubData(name);

  return (
    <div>
      <div className="profile_header">
        <a href={link}>
          <img src={image} alt={name}></img>
          <div className="profile_title">
            <h3>{userName}</h3>
            <p>Repos: {repo}</p>
          </div>
        </a>
      </div>
      <p>{message}</p>
    </div>
  );
}
