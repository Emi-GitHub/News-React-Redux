import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import reducers from '../reducers';
import NewsCard from '../components/NewsCard';

const store = createStore(reducers, applyMiddleware(thunk));

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<NewsCard store={store} />).dive();

describe('NewsCard component', () => {
  it('starts with headlines of []', () => {
    const newsState = wrapper.props().headlines;
    expect(newsState).toEqual([]);
  });
});
