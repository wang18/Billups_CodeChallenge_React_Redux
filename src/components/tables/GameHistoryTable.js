import React from 'react';
import {Table, Header, Icon} from 'semantic-ui-react';
import _ from 'lodash';

class GameHistoryTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            oldGames: this.props.oldGames
        };
    }

    componentWillReceiveProps(nextProps) {
        const sortedResult = this.sortResultByWinningRate(nextProps.oldGames).reverse();
        const partSortedResult = sortedResult.length < 11 ? sortedResult : sortedResult.splice(0, 10);
        this.setState({
            oldGames: partSortedResult
        });
    }

    sortResultByWinningRate = (result) =>
        _.sortBy(result, ['rate']);

    render() {
        const {oldGames} = this.state;
        return (
            <div>
                <Header as='h2' textAlign='center'>
                    <Icon name='university'/>
                        Scoreboard
                </Header>
                <Table celled selectable>
                    <Table.Header>
                        <Table.Row color='black' key='black'>
                            <Table.HeaderCell>Rank</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Winning Rate</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            oldGames.map((eachGame, i) => {
                                    return (
                                        <Table.Row key={i + 1}>
                                            <Table.Cell>{i + 1}.</Table.Cell>
                                            <Table.Cell>{eachGame.players}</Table.Cell>
                                            <Table.Cell>{eachGame.rate}%</Table.Cell>
                                        </Table.Row>);
                                }
                            )}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}


export default GameHistoryTable;