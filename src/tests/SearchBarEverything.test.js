import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBarEverything from '../components/SearchBarEverything';

const store = createStore(reducers, applyMiddleware(thunk));

Enzyme.configure({ adapter: new Adapter() })
const wrapper = shallow(<SearchBarEverything store={store}/>).dive();

describe('SearchBarEverything component', () => {
    it('starts with a term home of "" ', () => {
        const termState = wrapper.props().termHome
        expect(termState).toEqual('');
    })
    it('starts with a term everything of "" ', () => {
        const termState = wrapper.props().termEverything
        expect(termState).toEqual('');
    })
    it('starts with a selected of option1', ()=>{
        const showState = wrapper.props().selectedOption
        expect(showState).toEqual('option1');
    })
})