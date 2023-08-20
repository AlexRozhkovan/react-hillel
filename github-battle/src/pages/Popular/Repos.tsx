import {useSelector} from 'react-redux';
import RepoItem from './RepoItem';
import {FC, ReactElement} from "react";
import {RootState} from "../../redux/store";

interface Repo {
    id: number;
    owner: {
        avatar_url: string;
        login: string;
    };
    html_url: string;
    name: string;
    stargazers_count: number;
}

const Repos: FC = (): ReactElement => {
    const repos: Repo[] = useSelector((state: RootState) => state.popular.repos);
    const error: string | null = useSelector((state: RootState) => state.popular.error);
    return error ? (
        <p>{error}</p>
    ) : (
        <ul className="repos">
            {!repos.length ? (
                <p>Oops...</p>
            ) : (
                repos.map((repo: any, index: number) => {
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
