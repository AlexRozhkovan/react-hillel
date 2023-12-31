import {useSelector} from 'react-redux';
import PlayerPreview from './PlayerPreview';
import {FC, memo, ReactElement} from 'react';

interface IProps {
    player: string;
}

const Profile: FC<IProps> = memo(({player}: IProps): ReactElement => {
    const info = useSelector((state: any) => state.result[player].profile);
    return (
        <PlayerPreview userName={info.login} avatar={info.avatar_url}>
            <ul className="space-list-items">
                {info.name && <li>Name: {info.name}</li>}
                {info.location && <li>Location: {info.location}</li>}
                {info.company && <li> Company: {info.company}</li>}
                <li>Followers: {info.followers}</li>
                <li>Following: {info.following}</li>
                <li>Public Repos: {info.public_repos}</li>
                {info.blog && (
                    <li>
                        Site:
                        <a href={info.blog}> {info.blog}</a>
                    </li>
                )}
            </ul>
        </PlayerPreview>
    );
});

export default Profile;
