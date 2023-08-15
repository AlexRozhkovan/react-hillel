import { useSelector } from "react-redux";
import RepoItem from "./RepoItem";

const Repos = () => {
  const repos = useSelector((state) => state.popular.repos);
  const error = useSelector((state) => state.popular.error);

  return error ? (
    <p>{error}</p>
  ) : (
    <ul className="repos">
      {!repos.length ? (
        <p>Ooops...</p>
      ) : (
        repos.map((repo, index) => {
          return (
            <RepoItem
              key={repo.id}
              index={index}
              avatar={repo.owner.avatar_url}
              link={repo.html_url}
              name={repo.login}
              stargazers_count={repo.stargazers_count}
            />
          );
        })
      )}
    </ul>
  );
};

export default Repos;
