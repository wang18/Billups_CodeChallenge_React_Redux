import React from 'react';
import {Form, Button, Grid, Menu, Checkbox, Label, Card, Divider, Image, Segment, Icon} from 'semantic-ui-react';
import InlineError from "../messages/InlineError";
import PropType from 'prop-types';
import AEUrl from '../../images/AE.png';
import DogUrl from '../../images/dog.png';
import FlashUrl from '../../images/flash.png';

class PlayerSettingForm extends React.Component {
    state = {
        data: {
            pName: '',
            AiName: ''
        },
        loading: false,
        errors: {},
        activeItem:''
    };

    onChange = (e) => {
        console.log(e.target.value);
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});
        console.log('what? ', this.state.data);
        if (Object.keys(errors).length === 0) {
            this.setState({loading: true});
            this.props
                .submit(this.state.data)
                .catch(err =>
                    this.setState({errors: err.response.data.errors, loading: false})
                );
        }
    }

    validate = (data) => {
        const errors = {};
        if (!data.pName) errors.pName = "Your name can't be blank";
        if (!data.AiName) errors.AiName = "Please pick a opponent";
        return errors;
    }

    handleItemClick = (e, { name }) => {
        this.setState({
            activeItem: name,
            data: {
                ...this.state.data,
                AiName: name
        } });
    };

    render() {
        const {data, errors, loading, activeItem} = this.state;
        const leftPartStyle={'background-color':"#ffe3fb"};
        const midPartStyle={'background-color':"#eae7ff"};
        const rightPartStyle={'background-color':"#fbfdef"};
        return (
            <Form onSubmit={this.onSubmit} loading={loading}>
                <Grid columns='equal'>
                    <Grid.Row>
                        <Grid.Column width={5} style={leftPartStyle} >
                            <Form.Field error={!!errors.pName}>
                                <Label size="large" htmlFor="pName" color='red' ribbon>Your Name</Label>
                                <input type="text"
                                       id="pName"
                                       name="pName"
                                       placeholder="player name"
                                       value={data.pName}
                                       onChange={this.onChange}
                                />
                                {errors.pName && <InlineError text={errors.pName}/>}
                            </Form.Field>

                        </Grid.Column>
                        <Grid.Column width={4} style={midPartStyle} >
                            <Segment color="blue" textAlign='center'>
                                <Icon name="spy" size="huge" />
                                {data.pName}
                            </Segment>
                            <Segment color="green" textAlign='center'>
                                V.S.
                            </Segment>
                            <Segment color="red" textAlign='center'>
                                <Icon name="users" size="huge" />

                                {data.AiName}
                            </Segment>


                            {errors.AiName && <InlineError text={errors.AiName}/>}
                        </Grid.Column>
                        <Grid.Column width={7} style={rightPartStyle}>
                            <Label size="large" color='red' ribbon="right">Pick AI</Label>
                            <Grid >
                                <Grid.Column width={4}>

                                    <Menu fluid vertical tabular>
                                        <Menu.Item name='Albert' active={activeItem === 'Albert'} onClick={this.handleItemClick} size='huge' />
                                        <Menu.Item name='Dog' active={activeItem === 'Dog'} onClick={this.handleItemClick} />
                                        <Menu.Item name='Flash' active={activeItem === 'Flash'} onClick={this.handleItemClick} />
                                    </Menu>
                                </Grid.Column>

                                <Grid.Column stretched width={12}>
                                    <Segment>
                                        {(activeItem === 'Albert') && (<Image src={AEUrl} size='small'/>)}
                                        {(activeItem === 'Dog') && (<Image src={DogUrl} size='small'/>)}
                                        {(activeItem === 'Flash') && (<Image src={FlashUrl} size='small'/>)}
                                    </Segment>
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Button animated>
                                <Button.Content visible>Let's Play</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='rocket' />
                                </Button.Content>
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Form>
        );
    }
}

PlayerSettingForm.propTypes = {
    submit: PropType.func.isRequired
};

export default PlayerSettingForm;