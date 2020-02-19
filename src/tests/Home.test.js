import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../components/Home';
import "regenerator-runtime/runtime";

const store = createStore(reducers, applyMiddleware(thunk));

Enzyme.configure({ adapter: new Adapter() })
const wrapper = shallow(<Home store={store}/>).dive();

describe('Home component', () => {
    it('Should show text', () => {
        const text = wrapper.dive().find('div.header-top');
        expect(text.text()).toBe('Top headlines');
    })
    it('starts with a news of []', () => {
        const headlinesState = wrapper.props().headlines
        expect(headlinesState).toEqual([]);
    })
    it('starts with a backgroud of ui text loader', () => {
        const backgroundState = wrapper.props().background
        expect(backgroundState).toEqual('ui text loader');
    })
    it('starts with a loaded of loaded-api', () => {
        const loadedState = wrapper.props().loaded
        expect(loadedState).toEqual('loaded-api');
    })
    it('starts with a loading of ui active inverted dimmer', () => {
        const loadingState = wrapper.props().loading
        expect(loadingState).toEqual('loaded-api');
    })
    it('starts with a forSearch of hide-app', () => {
        const forSearchState = wrapper.props().forSearch
        expect(forSearchState).toEqual('hide-app');
    })
    it('starts with a forHeader of hide-app', () => {
        const forHeaderState = wrapper.props().forHeader
        expect(forHeaderState).toEqual('hide-app');
    })
})