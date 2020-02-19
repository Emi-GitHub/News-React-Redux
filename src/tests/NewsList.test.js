import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NewsList from '../components/NewsList';

const store = createStore(reducers, applyMiddleware(thunk));

Enzyme.configure({ adapter: new Adapter() })
const wrapper = shallow(<NewsList store={store}/>).dive();

describe('NewsList component', () => {
    it('starts with headlines of []', () => {
        const newsState = wrapper.props().headlines
        expect(newsState).toEqual([]);
    })
})