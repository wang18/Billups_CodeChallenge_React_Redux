import React from 'react';
import {Grid, Image} from 'semantic-ui-react'
import RockImage from '../../images/rock.jpg';
import PaperImage from '../../images/paper.jpg';
import ScissorsImage from '../../images/scissors.jpg';
import SpockImage from '../../images/spock.jpg';
import LizardImage from '../../images/lizard.jpg';


const AiChoice = () => {
    return (
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <Image src={RockImage} size='small'/>
                </Grid.Column>
                <Grid.Column>
                    <Image src={PaperImage} size='small'/>
                </Grid.Column>
                <Grid.Column>
                    <Image src={ScissorsImage} size='small'/>
                </Grid.Column>
                <Grid.Column>
                    <Image src={LizardImage} size='small'/>
                </Grid.Column>
                <Grid.Column>
                    <Image src={SpockImage} size='small'/>
                </Grid.Column>
            </Grid.Row>
        </Grid>);
}

export default AiChoice;