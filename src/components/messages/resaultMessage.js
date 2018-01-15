import React from 'react';
import PropType from 'prop-types';
import {Message, Icon} from 'semantic-ui-react'

class ResultMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {msg: this.props.message};
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            msg: nextProps.message
        });
    }

    render() {
        const {msg} = this.state;
        let color = '';
        let sign='';
        switch (msg) {
            case "Tie! Play Again...":
                color = 'green';
                sign="law";
                break;
            case  "You Won!!!":
                color = 'blue';
                sign="hand victory"
                break;
            case "You Lost...":
                color = "red";
                sign="bomb";
                break;
            default :
                color = 'teal';
                sign="sign language"
                break;
        };
        return (
            <Message color={color}>
                <Icon size='big' name={sign}/>
                {msg}
            </Message>

        );
    }
}


export default ResultMessage;