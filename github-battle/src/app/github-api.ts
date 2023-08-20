import axios, {AxiosResponse} from 'axios';

const id: string = 'YOUR_CLIENT_ID';
const sec: string = 'YOUR_SECRET_ID';
const params: string = `?client_id=${id}?client_secret=${sec}`;

const handleError = (error: unknown) => console.log(error);

interface UserProfile {
    login: string;
    followers: number;
}

const getProfile = async (username: string): Promise<UserProfile> => {
    const user: AxiosResponse<UserProfile> = await axios.get(
        `https://api.github.com/users/${username}`
    );
    return user.data;
};

const getRepos = async (username: string): Promise<any> =>
    await axios.get(
        `https://api.github.com/users/${username}/repos${params}&per_page=100`
    );

const getStarCount = (repos: AxiosResponse<any[]>): number =>
    repos.data.reduce(
        (count: number, repo: any) => count + repo.stargazers_count,
        0
    );

const calculateScore = (
    profile: UserProfile,
    repos: AxiosResponse<any[]>
): number => {
    const followers: number = profile.followers;
    const totalStars: number = getStarCount(repos);
    return followers + totalStars;
};

interface PlayerData {
    profile: UserProfile;
    score: number;
}

const getUserData = async (player: string): Promise<PlayerData> => {
    const data: [UserProfile, any] = await Promise.all([
        getProfile(player),
        getRepos(player),
    ]);
    const [profile, repos] = data;
    return {
        profile: profile,
        score: calculateScore(profile, repos),
    };
};

const sortPlayers = (players: PlayerData[]) =>
    players.sort((a: PlayerData, b: PlayerData) => b.score - a.score);

export const fetchPopularRepos = async (language: string): Promise<any> => {
    const encodeURI: string = window.encodeURI(
        `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
    );
    try {
        const response: AxiosResponse = await axios.get(encodeURI);
        return response.data.items;
    } catch (error: unknown) {
        return handleError(error);
    }
};

export const battle = async (players: string[]): Promise<any> => {
    try {
        const battlePlayers: PlayerData[] = await axios.all(
            players.map(getUserData)
        );
        return sortPlayers(battlePlayers);
    } catch (error: unknown) {
        return handleError(error);
    }
};
