import axios from "axios";

const id = "YOUR_CLIENT_ID";
const sec = "YOUR_SECRET_ID";
const params = `?client_id=${id}?client_secret=${sec}`;

const handleError = (error) => console.log(error);

const getProfile = async (username) => {
  const user = await axios.get(`https://api.github.com/users/${username}`);
  return user.data;
};

const getRepos = (username) => {
  return axios.get(
    `https://api.github.com/users/${username}/repos${params}&per_page=100`
  );
};

const getStarCount = (repos) => {
  return repos.data.reduce((count, repo) => count + repo.stargazers_count, 0);
};

const calculateScore = (profile, repos) => {
  const followers = profile.followers;
  const totalStars = getStarCount(repos);
  return followers * 3 + totalStars;
};

const getUserData = async (player) => {
  const data = await Promise.all([getProfile(player), getRepos(player)]);
  const [profile, repos] = data;
  return {
    profile: profile,
    score: calculateScore(profile, repos),
  };
};

const sortPlayers = (players) => players.sort((a, b) => b.score - a.score);

export const fetchPopularRepos = async (language) => {
  const encodeURI = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );
  try {
    const response = await axios.get(encodeURI);
    return response.data.items;
  } catch (error) {
    return handleError(error);
  }
};

export const battle = async (players) => {
  try {
    const players_1 = await axios.all(players.map(getUserData));
    return sortPlayers(players_1);
  } catch (error) {
    return handleError(error);
  }
};
