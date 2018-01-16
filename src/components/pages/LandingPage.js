import React from 'react';
import PlayerSettingForm from '../forms/PlayerSettingForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {initSetting, savePlayers} from '../../actions/index';
import {Grid, List} from 'semantic-ui-react';

class LandingPage extends React.Component{

    componentWillMount() {
        if ((localStorage.getItem('players') == null)||
            (localStorage.getItem('gamesHistory') == null) ) {
            initSetting();
        }
    }

    submit = (data) =>
        this.props.savePlayers(data)
            .then(()=>this.props.history.push('/game'));


    render(){
        const divBkColor={'backgroundColor':"#dff0ff", 'padding':'10px 10px'};

        return(
            <div style={divBkColor}>
                <h1>Dashboard</h1>
                <Grid>
                    <Grid.Column width={8} as='h4'>
                        Rock, Paper, Scissors, Lizard, Spock is a game of chance that expands. It is first used to settle a dispute about what to watch on TV between Sheldon and Raj in "The Lizard-Spock Expansion".
                        <br/>
                        <br/>
                        The game is an expansion on the game Rock, Paper, Scissors. Each player picks a variable and reveals it at the same time. The winner is the one who defeats the others. In a tie, the process is repeated until a winner is found. Almost always, the boys will all pick Spock at the same time and tie over and over again.
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <List size="large">
                            <List.Item icon='hand scissors' content='Scissors cuts Paper' />
                            <List.Item icon='hand paper' content='Paper covers Rock' />
                            <List.Item icon='hand rock' content='Rock crushes Lizard' />
                            <List.Item icon='hand lizard' content='Lizard poisons Spock' />
                            <List.Item icon='hand spock' content='Spock smashes Scissors' />
                        </List>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <List size="large">
                            <List.Item icon='hand scissors' content='Scissors decapitates Lizard' />
                            <List.Item icon='hand lizard' content='Lizard eats Paper' />
                            <List.Item icon='hand paper' content='Paper disproves Spock' />
                            <List.Item icon='hand spock' content='Spock vaporizes Rock' />
                            <List.Item icon='hand rock' content='Rock crushes Scissors' />
                        </List>
                    </Grid.Column>
                </Grid>
                <PlayerSettingForm submit={this.submit} />
            </div>
        );
    }
}

LandingPage.propTypes={
    savePlayers:PropTypes.func.isRequired
};

export default connect(null, {savePlayers})(LandingPage);