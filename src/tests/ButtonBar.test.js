import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import reducers from '../reducers';
import ButtonBar from '../components/ButtonBar';

const store = createStore(reducers, applyMiddleware(thunk));

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<ButtonBar store={store} />).dive();

describe('ButtonBar component', () => {
  it('Should show text', () => {
    const text = wrapper.dive().find('button');
    expect(text.text()).toBe('Load more');
  });
  it('should show cards when button is clicked', () => {
    const button = wrapper.dive().find('button');
    button.simulate('click', { preventDefault: jest.fn() });
    const showState = wrapper.props().setShow;
    expect(showState).toEqual(false);
  });
  it('starts with a show of false', () => {
    const showState = wrapper.props().setShow;
    expect(showState).toEqual(false);
  });
});
