import React from 'react';
import ButtonBar from '../components/ButtonBar';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
const store = createStore(reducers, applyMiddleware(thunk));

const wrapper = shallow(<ButtonBar store={store}/>).dive();

describe('ButtonBar component', () => {
    it('Should show text', () => {
        const text = wrapper.dive().find('button');
        expect(text.text()).toBe('Load more');
    })
})