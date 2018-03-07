async function getProfile(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);

  return response.json(); //axios converts it to json for us. "fetch" doesn't
}

async function getRepos(username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);

  return response.json();
}

function getStarCount(repos) {
  //to get a total count of the player's stars
  return repos.reduce(
    (count, { stargazers_count }) => count + stargazers_count,
    0
  );
}
//Initially it was repos.data.items, produced by axios that wrapped the data
//in the data property but fetch does not do that so we can proceed to omit
//the data property from repos.data.reduce to just repos.reduce

function calculateScore({ followers }, repos) {
  //well it's in the name...
  return followers * 3 + getStarCount(repos);
}

function handleError(error) {
  //in case I don't get anything back
  console.warn(error);
  console.log(error.response);
  return null;
}

async function getUserData(player) {
  const [profile, repos] = await Promise.all([
    getProfile(player),
    getRepos(player)
  ]);

  return {
    profile,
    score: calculateScore(profile, repos)
  };
}

function sortPlayers(players) {
  return players.sort((a, b) => b.score - a.score);
}

export async function battle(players) {
  const results = await Promise.all(players.map(getUserData)).catch(
    handleError
  );

  return results === null ? results : sortPlayers(results);
}

export async function fetchPopularRepos() {
  const encodedURI = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );

  const response = await fetch(encodedURI).catch(handleError);

  const repos = await response.json();

  return repos.items;
}
