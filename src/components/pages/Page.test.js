import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';
import GamePage from './GamePage';
import expect from 'expect';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import createStoreWithMiddleware from '../../store/index';
Enzyme.configure({ adapter: new Adapter() });
import PlayerSettingForm from '../forms/PlayerSettingForm';

describe('Page Component tests',() =>{
    const store = createStoreWithMiddleware();
    const context = {store};

    it('renders LandingPage without exploding',()=>{
        expect( shallow(
            <LandingPage />,{context}
            ).length
        ).toEqual(1);
    });

    it('renders GamePage without exploding',()=>{
        expect( shallow(
            <GamePage />,{context}
            ).length
        ).toEqual(1);
    });



    /* it('renders Back to Dashboard correctly',()=>{
         const wrapper = shallow(<GamePage />,{context});
         //wrapper.find('button').at(0).simulate('click');
         expect(wrapper.find('button').at(0).text()).toEqual('Back To Dashboard');
     });*/
});


