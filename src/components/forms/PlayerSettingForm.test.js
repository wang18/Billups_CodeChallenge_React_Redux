import React from 'react';
import ReactDOM from 'react-dom';
import PlayerSettingForm from './PlayerSettingForm';
import expect from 'expect';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import createStoreWithMiddleware from '../../store/index';
Enzyme.configure({ adapter: new Adapter() });

describe('Player Setting Form Component tests',() =>{
    const store = createStoreWithMiddleware();
    const context = {store};

    it('renders Player Setting Form without exploding',()=>{
        expect( shallow(
            <PlayerSettingForm submit={()=>{}}/>,
            ).length
        ).toEqual(1);
    });

    it('Click let"s Play button without players" names', () => {
        const wrapper = mount(<PlayerSettingForm submit={()=>{}} />);
        expect(wrapper.find('button.button').length).toEqual(1);
    });

   it('Select AI', () => {
        const wrapper = mount(<PlayerSettingForm submit={()=>{}} />);
        wrapper.find('a.item').at(0).simulate('click');
        expect(wrapper.find('div.red').at(1).text()).toEqual('Albert');
    });

});