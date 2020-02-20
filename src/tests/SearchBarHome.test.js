import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import reducers from '../reducers';
import SearchBarHome from '../components/SearchBarHome';

const store = createStore(reducers, applyMiddleware(thunk));

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<SearchBarHome store={store} />).dive();

describe('SearchBarHome component', () => {
  it('starts with a term of "" ', () => {
    const termState = wrapper.props().termHome;
    expect(termState).toEqual('');
  });
  it('starts with a show of false', () => {
    const showState = wrapper.props().showEverything;
    expect(showState).toEqual(false);
  });
  it('should change show when button is clicked', () => {
    const button = wrapper.dive().find('span');
    button.simulate('click', { preventDefault: jest.fn() });
    const showState = wrapper.props().showEverything;
    expect(showState).toEqual(false);
  });
});
