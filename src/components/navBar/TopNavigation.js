import React from 'react';
import {Menu, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const TopNavigation = () => (
    <Menu color='grey' inverted secondary pointing>
        <Menu.Item as={Link} to="/"><Icon size="large" name='bar'/>Rock Paper Scissors Lizard Spock</Menu.Item>
    </Menu>
);


export default TopNavigation;