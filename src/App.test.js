import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ManageGuest from './components/ManageGuests/ManageGuests';

configure({adapter: new Adapter()});

describe('App js onAdd function', () => {
  it('should return 4', () => {
    const appComp = shallow(<App/>);
    expect(appComp.instance().onAdd(1,3)).toBe(4);
  });
});

describe('App js onAdd function', () => {
  it('should return 4', () => {
    const wrapper = shallow(<ManageGuest/>);
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
