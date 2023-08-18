import axios, {AxiosResponse} from 'axios';

const id: string = 'YOUR_CLIENT_ID';
const sec: string = 'YOUR_SECRET_ID';
const params: string = `?client_id=${id}?client_secret=${sec}`;

const handleError = (error: unknown) => console.log(error);

const getProfile = async (username: string): Promise<any> => {
    const user: AxiosResponse = await axios.get(`https://api.github.com/users/${username}`);
    return user.data;
};

const getRepos = async (username: string): Promise<any> =>
    await axios.get(`https://api.github.com/users/${username}/repos${params}&per_page=100`);

const getStarCount = (repos: any): number =>
    repos.data.reduce((count: number, repo: any) =>
        count + repo.stargazers_count, 0);

const calculateScore = (profile: any, repos: any): number => {
    const followers = profile.followers;
    const totalStars = getStarCount(repos);
    return followers + totalStars;
};

const getUserData = async (player: any): Promise<any> => {
    const data = await Promise.all([getProfile(player), getRepos(player)]);
    const [profile, repos] = data;
    return {
        profile: profile,
        score: calculateScore(profile, repos),
    };
};

const sortPlayers = (players: any) => players.sort((a: any, b: any) => b.score - a.score);

export const fetchPopularRepos = async (language: string): Promise<any> => {
    const encodeURI = window.encodeURI(
        `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
    );
    try {
        const response: AxiosResponse = await axios.get(encodeURI);
        return response.data.items;
    } catch (error) {
        return handleError(error);
    }
};

export const battle = async (players: any): Promise<any> => {
    try {
        const battlePlayers = await axios.all(players.map(getUserData));
        return sortPlayers(battlePlayers);
    } catch (error: unknown) {
        return handleError(error);
    }
};
