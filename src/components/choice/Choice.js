import React from 'react';
import {Grid, Image, Button} from 'semantic-ui-react'
import RockImage from '../../images/rock.jpg';
import PaperImage from '../../images/paper.jpg';
import ScissorsImage from '../../images/scissors.jpg';
import SpockImage from '../../images/spock.jpg';
import LizardImage from '../../images/lizard.jpg';
import PropTypes from 'prop-types';

class Choice extends React.Component {

    pickAChoice=(data)=>{
        this.props.pick(data);
    }

    render() {
        return (
            <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column className="formatedButton">
                    <Button  color='orange' animated='fade' onClick={()=>this.pickAChoice("Rock")} >
                        <Button.Content visible >
                            <Image src={RockImage} size='small'/>
                        </Button.Content>
                        <Button.Content hidden>
                            Rock
                        </Button.Content>
                    </Button>
                </Grid.Column>
                <Grid.Column className="formatedButton">
                    <Button color="yellow" animated='fade' onClick={()=>this.pickAChoice("Paper")} >
                        <Button.Content visible>
                            <Image src={PaperImage} size='small'/>
                        </Button.Content>
                        <Button.Content hidden>
                            Paper
                        </Button.Content>
                    </Button>

                </Grid.Column >
                <Grid.Column className="formatedButton">
                    <Button color="olive" animated='fade' onClick={()=>this.pickAChoice("Scissors")} >
                        <Button.Content visible>
                            <Image src={ScissorsImage} size='small'/>
                        </Button.Content>
                        <Button.Content hidden>
                            Scissors
                        </Button.Content>
                    </Button>

                </Grid.Column>
                <Grid.Column className="formatedButton">
                    <Button color="green" animated='fade' onClick={()=>this.pickAChoice("Lizard")} >
                        <Button.Content visible>
                            <Image src={LizardImage} size='small'/>
                        </Button.Content>
                        <Button.Content hidden>
                            Lizard
                        </Button.Content>
                    </Button>

                </Grid.Column>
                <Grid.Column className="formatedButton">
                    <Button color="violet" animated='fade' onClick={()=>this.pickAChoice("Spock")} >
                        <Button.Content visible>
                            <Image src={SpockImage} size='small'/>
                        </Button.Content>
                        <Button.Content hidden>
                            Spock
                        </Button.Content>
                    </Button>

                </Grid.Column>
            </Grid.Row>
        </Grid>);
    }

}
Choice.propTypes={
    pick:PropTypes.func.isRequired
}

export default Choice;