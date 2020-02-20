import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import reducers from '../reducers';
import SearchBarArticle from '../components/SearchBarArticle';

const store = createStore(reducers, applyMiddleware(thunk));

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<SearchBarArticle store={store} />).dive();

describe('SearchBarArticle component', () => {
  it('starts with a term of "" ', () => {
    const termState = wrapper.props().termHome;
    expect(termState).toEqual('');
  });
  it('starts with a show of false', () => {
    const showState = wrapper.props().showEverything;
    expect(showState).toEqual(false);
  });
});
