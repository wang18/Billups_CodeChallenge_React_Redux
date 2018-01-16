import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import expect from 'expect';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import createStoreWithMiddleware from './store/index';
Enzyme.configure({ adapter: new Adapter() });
import TopNavigation from './components/navBar/TopNavigation';
import LandingPage from './components/pages/LandingPage';
import GamePage from './components/pages/GamePage';

describe('App Component',() =>{
    const store = createStoreWithMiddleware();
    const context = {store};

  it('renders without exploding',()=>{
    expect( shallow(
        <App />
        ).length
    ).toEqual(1);
  });

  it('renders TopNavigation',()=>{
      expect( shallow(
          <TopNavigation />
          ).length
      ).toEqual(1);
  });
it('renders LandingPage',()=>{
      expect( shallow(
          <LandingPage />,{context}
          ).length
      ).toEqual(1);
  });
it('renders GamePage',()=>{
      expect( shallow(
          <GamePage />, {context}
          ).length
      ).toEqual(1);
  });


});