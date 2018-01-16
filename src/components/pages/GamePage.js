import React from 'react';
import {Grid, Card, Button, Icon, Label} from 'semantic-ui-react'
import AEUrl from '../../images/AE.png';
import DogUrl from '../../images/dog.png';
import FlashUrl from '../../images/flash.png';
import MyImage from '../../images/myImage.png';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ChoiceSection from '../choice/Choice';
import AiChoice from '../choice/AiChoice';
import {PlayGame} from '../../utils/gameRules';
import {saveGameHistory, resetScoreboard} from '../../actions/index';
import GameHistoryTable from '../tables/GameHistoryTable';
import {Link} from 'react-router-dom';
import ResultMessage from '../messages/resaultMessage';
import ResultPlayers from '../messages/ResultPlayers';

class GamePage extends React.Component {

    state = {
        data: this.props.players,
        gamesHistory: {
            player: this.props.players.pName,
            games: [],
            win: 0,
            lost: 0,
            tie: 0,
            rate: 0
        },
        AiChoice: "",
        currentGame: {},
        message: "Let's play...",
        allGames: JSON.parse(localStorage.getItem('gamesHistory')).games
    }

    componentWillMount() {
        const {games} = JSON.parse(localStorage.getItem('gamesHistory'));
        games.map(e => {
            if (e.players === this.props.players.pName) {
                this.setState({
                    ...this.state,
                    data: this.props.players,
                    gamesHistory: {
                        ...this.state.gamesHistory,
                        player: this.props.players.pName,
                        win: e.games.win,
                        lost: e.games.lost,
                        tie: e.games.tie,
                        rate: e.rate
                    }
                });
            }
        });
    }

    componentDidMount() {
        const {names} = JSON.parse(localStorage.getItem('players'));
        if (!this.state.data.pName) {
            if (!names.pName) {
                this.props.history.push('/');
            } else {
                const {games} = JSON.parse(localStorage.getItem('gamesHistory'));
                games.map(e => {
                    if (e.players === names.pName) {
                        this.setState({
                            ...this.state,
                            data: names,
                            gamesHistory: {
                                ...this.state.gamesHistory,
                                player: names.pName,
                                win: e.games.win,
                                lost: e.games.lost,
                                tie: e.games.tie,
                                rate: e.rate
                            }
                        });
                    }
                });
            }
        }
        this.randomPick();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            allGames: nextProps.allGames
        });
    }

    findAiImg = (name) => {
        switch (name) {
            case 'Albert':
                return AEUrl;
            case 'Dog':
                return DogUrl;
            case 'Flash':
                return FlashUrl;
            default:
                return MyImage;
        }
    }

    randomPick = () => {
        const options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        this.setState({
            AiChoice: options[Math.floor(Math.random() * 5)]
        });
    }

    myPick = (choice) => {
        this.randomPick();
        const {AiChoice, data, gamesHistory} = this.state;
        const game = PlayGame(choice, AiChoice, data.pName, data.AiName);
        let tmpGames = this.state.gamesHistory.games;
        tmpGames.push(game);
        let msg = '';
        let tmpresult = '';
        if (game.result === 1) {
            msg = "Tie! Play Again...";
            tmpresult = 'tie';
        } else if (game.result === 2) {
            msg = "You Won!!!";
            tmpresult = 'win';
        }
        else if (game.result === 0) {
            msg = "You Lost...";
            tmpresult = 'lost';
        }
        const tmpRate = Math.floor((gamesHistory.win) / (gamesHistory.win + gamesHistory.lost + gamesHistory.tie) * 100);
        const finalRate = tmpRate > 1 ? tmpRate : 0;
        this.setState({
            gamesHistory: {
                ...this.state.gamesHistory,
                games: tmpGames,
                [tmpresult]: this.state.gamesHistory[tmpresult] + 1,
                rate: finalRate
            },
            currentGame: game,
            message: msg
        });
        let newGame = this.state.gamesHistory;
        newGame = {
            ...newGame,
            [tmpresult]: this.state.gamesHistory[tmpresult] + 1,
            rate: finalRate
        };
        this.saveGamesHistory(this.state.data, newGame);
    }

    saveGamesHistory = (data, gamesHistory) => {
        const tmpGameRecord = {
            players: data.pName,
            games: {
                win: gamesHistory.win,
                lost: gamesHistory.lost,
                tie: gamesHistory.tie,
            },
            rate: gamesHistory.rate
        };
        this.props.saveGameHistory(tmpGameRecord);
    }

    resetScoreboard = () => {
        this.props.resetScoreboard().then(() => this.setState({
            data: this.props.players,
            gamesHistory: {
                player: this.props.players.pName,
                games: [],
                win: 0,
                lost: 0,
                tie: 0,
                rate: 0
            },
            AiChoice: "",
            currentGame: {},
            message: "Let's play...",
            allGames: JSON.parse(localStorage.getItem('gamesHistory')).games
        }));
    }

    render() {
        const {data, gamesHistory, currentGame, message, allGames} = this.state;
        return (
            <Grid celled='internally' columns='equal'>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Card
                            image={MyImage}
                            header={data.pName}
                            description='Go Ducks!'
                        />
                    </Grid.Column>
                    <Grid.Column width={10} stretched={false}>
                        <Label color='red' ribbon>{data.pName}'s </Label>
                        <ChoiceSection pick={this.myPick}/>

                        <Grid columns='equal'>
                            <Grid.Row>
                                <Grid.Column textAlign="center" width={6}>
                                    <ResultMessage message={message}/>
                                </Grid.Column>
                                <Grid.Column textAlign="center" width={10}>
                                    <ResultPlayers myOpt={currentGame.myOpt}
                                                   aiOpt={currentGame.aiOpt}
                                                   pName={data.pName}
                                                   AiName={data.AiName}
                                                   message={message}
                                                   MyImage={MyImage}
                                                   AiImage={this.findAiImg(data.AiName)}
                                    />

                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column textAlign="center">
                                    <Label size='large' color='blue'>win:{gamesHistory.win}</Label>
                                    <Label size='large' color='red'>lost:{gamesHistory.lost}</Label>
                                    <Label size='large' color='green'>tie:{gamesHistory.tie}</Label>
                                    <Label size='large' color='teal'>rate: {gamesHistory.rate}%</Label>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                        <Label color='yellow' ribbon='right'>{data.AiName}'s </Label>
                        <AiChoice/>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Card
                            image={this.findAiImg(data.AiName)}
                            header={data.AiName}
                            description='Dark side!'
                        /> </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Button animated as={Link} to="/">
                            <Button.Content visible>Back To Dashboard</Button.Content>
                            <Button.Content hidden>
                                <Icon name='left arrow'/>
                            </Button.Content>
                        </Button>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <GameHistoryTable oldGames={allGames}/>

                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Button animated='vertical' onClick={this.resetScoreboard}>
                            <Button.Content visible>Reset Scoreboard</Button.Content>
                            <Button.Content hidden>
                                <Icon name='settings'/>
                            </Button.Content>
                        </Button>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({
    players: state.currentUsers,
    allGames: state.games
});

GamePage.propTypes = {
    saveGameHistory: PropTypes.func.isRequired,
    resetScoreboard: PropTypes.func.isRequired,
    players: PropTypes.object.isRequired,
    allGames: PropTypes.array.isRequired
};

export default connect(mapStateToProps, {saveGameHistory, resetScoreboard})(GamePage);
