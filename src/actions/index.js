import {PLAYERS_SAVED, GAME_HISTORY_SAVED, SCOREDBOARD_RESETTED} from './constants';

export const savePlayersToLocal = (data) => {
    var players = JSON.parse(localStorage.getItem('players'));
    players.names = (data);
    localStorage.setItem('players', JSON.stringify(players));
    return new Promise((resolve, reject) => {
        resolve(data);
    })
}

export const playersSaved = (users) => ({
    type: PLAYERS_SAVED,
    users
});

export const savePlayers = (data) => (dispatch) =>
    savePlayersToLocal(data).then((user) => dispatch(playersSaved(user)));

export function initSetting() {
    localStorage.clear();
    localStorage.setItem('players', JSON.stringify({
        names: ''
    }));
    localStorage.setItem('gamesHistory', JSON.stringify({
        games: []
    }));
}


export const saveGameHistoryToLocal = (data) => {
    let gamesHistory = JSON.parse(localStorage.getItem('gamesHistory'));
    let tmpGames = gamesHistory.games;
    let find = true;
    tmpGames.map(e => {
        if (e.players === data.players) {
            find = false;
            e.games = data.games;
            e.rate = data.rate;
        }
    });
    if (find) {
        tmpGames.push(data);
        gamesHistory.games = tmpGames;
        localStorage.setItem('gamesHistory', JSON.stringify(gamesHistory));
        return new Promise((resolve, reject) => {
            resolve(tmpGames);
        });
    }else{
        gamesHistory.games = tmpGames;
        localStorage.setItem('gamesHistory', JSON.stringify(gamesHistory));
        return new Promise((resolve, reject) => {
            resolve(tmpGames);
        });
    }
}

export const GameHistorySaved = (gamesData) => ({
    type: GAME_HISTORY_SAVED,
    gamesData
});

export const saveGameHistory = (game) => (dispatch) =>
    saveGameHistoryToLocal(game).then((gamesData) => dispatch(GameHistorySaved(gamesData)));

export const scoreboardReseted = () =>({
    type: SCOREDBOARD_RESETTED
});

export const resetScoreBoardToLocal=()=> {
    let gamesHistory = JSON.parse(localStorage.getItem('gamesHistory'));
    let tmpGames = [];
    gamesHistory.games = tmpGames;
    localStorage.setItem('gamesHistory', JSON.stringify(gamesHistory));
    return new Promise((resolve, reject) => {
        resolve(gamesHistory.games);
    });
}

export const resetScoreboard =()=>(dispatch) =>
    resetScoreBoardToLocal().then(() => dispatch(scoreboardReseted()));
