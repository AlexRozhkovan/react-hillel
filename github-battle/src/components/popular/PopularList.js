import { memo } from "react";

const PopularList = memo(({ repos }) => (
  <ul className="popular-list">
    {!repos.length ? (
      <p>Ooops...</p>
    ) : (
      repos.map((repo, index) => {
        return (
          <li key={repo.id} className="popular-item">
            <div className="popular-rank">#{index + 1}</div>
            <ul>
              <li>
                <img
                  className="avatar"
                  src={repo.owner.avatar_url}
                  alt="Avatar"
                />
              </li>
              <li>
                <a href={repo.html_url} target="_blank">
                  {repo.name}
                </a>
              </li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count}</li>
            </ul>
          </li>
        );
      })
    )}
  </ul>
));

export default PopularList;
