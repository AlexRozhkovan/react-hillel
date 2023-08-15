import { memo } from "react";

const RepoItem = memo(
  ({ index, avatar, link, name, login, stargazers_count }) => (
    <li className="repo-item">
      <div className="repo-rank">#{index + 1}</div>
      <ul>
        <li>
          <img className="avatar" src={avatar} alt="Avatar" />
        </li>
        <li>
          <a href={link} target="_blank" rel="noreferrer">
            {name}
          </a>
        </li>
        <li>@{login}</li>
        <li>{stargazers_count}</li>
      </ul>
    </li>
  )
);

export default RepoItem;
