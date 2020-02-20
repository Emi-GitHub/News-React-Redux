import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import reducers from '../reducers';
import LoadMore from '../components/LoadMore';

const store = createStore(reducers, applyMiddleware(thunk));

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<LoadMore store={store} />).dive();

describe('LoadMore component', () => {
  it('starts with a headlines []', () => {
    const showState = wrapper.props().headlines;
    expect(showState).toEqual([]);
  });
});
