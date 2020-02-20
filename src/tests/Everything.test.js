import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import reducers from '../reducers';
import Everything from '../components/Everything';

const store = createStore(reducers, applyMiddleware(thunk));

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<Everything store={store} />).dive();

describe('Everything component', () => {
  it('starts with headlines of []', () => {
    const newsState = wrapper.props().headlines;
    expect(newsState).toEqual([]);
  });
  it('starts with a backgroud of ui text loader', () => {
    const backgroundState = wrapper.props().background;
    expect(backgroundState).toEqual('ui text loader');
  });
  it('starts with a loaded of loaded-api', () => {
    const loadedState = wrapper.props().loaded;
    expect(loadedState).toEqual('loaded-api');
  });
  it('starts with a loading of loaded-api', () => {
    const loadingState = wrapper.props().loading;
    expect(loadingState).toEqual('loaded-api');
  });
  it('starts with a forSearch of hide-app', () => {
    const forSearchState = wrapper.props().forSearch;
    expect(forSearchState).toEqual('hide-app');
  });
});
