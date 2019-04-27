import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ManageGuest from './components/ManageGuests/ManageGuests';
import Staff from './pages/Staff/Staff';
import CheckIn from './pages/CheckIn/Checkin';

configure({adapter: new Adapter()});

describe('Manage Guest component with guests as empty string', () => {
  it('should return 0', () => {
    const wrapper = shallow(<ManageGuest />);
    const guestState = wrapper.state().guests;
    expect(guestState.length).toEqual(0);
  });
});

describe('Manage Guest snapshot', () => {
  it('Snapshot', () => {
    const tree = renderer.create(<ManageGuest />).toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});

describe('Staff component should render Manage component if user is signed in', () => {
  it('One Manage Component', () => {
    const wrapper = shallow(<Staff />);
    const numOfComponents = wrapper.find('ManageGuest');
    
    expect(numOfComponents.length).toEqual(1);
  });
});

describe('Check In title', () => {
  it('Check In', () => {
    const wrapper = shallow(<CheckIn />);
    const text = wrapper.find('h1.checkin-page-title').text();
    
    expect(text).toBe('Check In');
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
