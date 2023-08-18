import { useSelector } from 'react-redux';
import RepoItem from './RepoItem';
import {FC, ReactElement} from "react";

const Repos:FC = ():ReactElement => {
  const repos:[] = useSelector((state:any) => state.popular.repos);
  const error:string | null = useSelector((state:any) => state.popular.error);
  return error ? (
    <p>{error}</p>
  ) : (
    <ul className="repos">
      {!repos.length ? (
        <p>Ooops...</p>
      ) : (
        repos.map((repo:any, index:number) => {
          return (
            <RepoItem
              key={repo.id}
              index={index}
              avatar={repo.owner.avatar_url}
              link={repo.html_url}
              name={repo.name}
              login={repo.owner.login}
              stargazers_count={repo.stargazers_count}
            />
          );
        })
      )}
    </ul>
  );
};

export default Repos;
