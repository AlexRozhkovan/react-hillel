import {FC, memo, ReactElement} from 'react';

interface IProps {
    avatar: string;
    userName: string;
    children: ReactElement;
}

const PlayerPreview: FC<IProps> = memo(
    ({avatar, userName, children}: IProps): ReactElement => {
        return (
            <div>
                <div className="column">
                    <img className="avatar" src={avatar} alt="Avatar"/>
                    <h2 className="username">@{userName}</h2>
                </div>
                {children}
            </div>
        );
    }
);

export default PlayerPreview;
