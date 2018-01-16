import React from 'react';
import PropTypes from 'prop-types';
import {Message, Icon, Label} from 'semantic-ui-react'

class ResultPlayers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: this.props.message,
            myOpt: this.props.myOpt,
            aiOpt: this.props.aiOpt,
            pName: this.props.pName,
            AiName: this.props.AiName,
            MyImage: this.props.MyImage,
            AiImage: this.props.AiImage
        };
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            message: nextProps.message,
            myOpt: nextProps.myOpt,
            aiOpt: nextProps.aiOpt,
            pName: nextProps.pName,
            AiName: nextProps.AiName,
            MyImage: nextProps.MyImage,
            AiImage: nextProps.AiImage
        });
    }

    chooseColor = (msg) => {
        switch (msg) {
            case "Tie! Play Again...":
                return 'green';
            case  "You Won!!!":
                return 'blue';
            case "You Lost...":
                return "red";
            default :
                return 'teal';
        }
    };

    findToolIcon = (opt) => {
        const tools = ['hand rock', 'hand paper', 'hand scissors', 'hand lizard', 'hand spock', 'wait'];
        switch (opt) {
            case "Rock":
                return tools[0];
            case  "Paper":
                return tools[1];
            case "Scissors":
                return tools[2];
            case "Lizard":
                return tools[3];
            case "Spock":
                return tools[4];
            default :
                return tools[5];
        }
    };

    createMessage = (myOpt, aiOpt, pName, AiName, MyImage, AiImage, color) => {
        const myOptMsg = this.findToolIcon(myOpt);
        const aiOptMsg = this.findToolIcon(aiOpt);
        const finalMsg = (
            <div >
                <Label image color={color}>
                    <img alt="myImg" src={MyImage}/>
                    {pName}
                </Label>
                <Icon name="arrow right"/>
                <Icon size='big' name={myOptMsg}/>
                <Icon size='large' name="trophy"/>
                <Icon size='big' name={aiOptMsg}/>
                <Icon name="arrow left"/>
                <Label image color={color}>
                    <img alt="aiImg" src={AiImage}/>
                    {AiName}
                </Label>
            </div>


        );
        return finalMsg;
    };

    render() {
        const {message, myOpt, aiOpt, pName, AiName, MyImage, AiImage} = this.state;
        const color = this.chooseColor(message);
        const currentMsg = this.createMessage(myOpt, aiOpt, pName, AiName, MyImage, AiImage, color);
        return (
            <Message  color={color}>
                {currentMsg}
            </Message>
        );
    }
}

ResultPlayers.propTypes={
    message: PropTypes.string.isRequired,
    myOpt: PropTypes.string,
    aiOpt: PropTypes.string,
    pName: PropTypes.string.isRequired,
    AiName: PropTypes.string.isRequired,
    MyImage: PropTypes.string.isRequired,
    AiImage: PropTypes.string.isRequired
}

export default ResultPlayers;