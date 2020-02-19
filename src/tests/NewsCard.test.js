import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NewsCard from '../components/NewsCard';

const store = createStore(reducers, applyMiddleware(thunk));

Enzyme.configure({ adapter: new Adapter() })
const wrapper = shallow(<NewsCard store={store}/>).dive();

describe('NewsCard component', () => {
    it('starts with headlines of []', () => {
        const newsState = wrapper.props().headlines
        expect(newsState).toEqual([]);
    })
    /*it('Should show text', () => {
        const text = wrapper.dive().find('Link.article-link');
        expect(text.text()).toBe('Read full article');
    })*/
})