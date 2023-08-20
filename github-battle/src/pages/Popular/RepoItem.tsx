import {FC, memo, ReactElement} from 'react';

interface IProps {
    index: number,
    avatar: string,
    link: string,
    name: string,
    login: string,
    stargazers_count: number
}

const RepoItem: FC<IProps> = memo(
    ({index, avatar, link, name, login, stargazers_count}: IProps): ReactElement => {
        return (
            <li className="repo-item">
                <div className="repo-rank">#{index + 1}</div>
                <ul>
                    <li>
                        <img className="avatar" src={avatar} alt="Avatar"/>
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
        );
    }
);

export default RepoItem;
