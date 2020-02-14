import { combineReducers } from 'redux';
import { headlines } from './ArticlesReducer';
import { selectedArticle } from './ArticlesReducer';
import { termHome } from './ArticlesReducer';
import { termEverything } from './ArticlesReducer';
import { background } from './UiReducer';
import { loaded } from './UiReducer';
import { loading } from './UiReducer';
import { forSearch } from './UiReducer';
import { forHeader } from './UiReducer';
import { setShow } from './ShowReducer';
import { showEverything } from './ShowReducer';

const radio1 = (state = true, action) => {
    switch(action.type) {
        case 'RADIO_1': return true;
        case 'RADIO_2': return false;
        case 'RADIO_3': return false;
        default: return state;
    }
}
const radio2 = (state = false, action) => {
    switch(action.type) {
        case 'RADIO_1': return false;
        case 'RADIO_2': return true;
        case 'RADIO_3': return false;
        default: return state;
    }
}
const radio3 = (state = false, action) => {
    switch(action.type) {
        case 'RADIO_1': return false;
        case 'RADIO_2': return false;
        case 'RADIO_3': return true;
        default: return state;
    }
}

export default combineReducers ({
    headlines,
    selectedArticle,
    termHome,
    termEverything,
    showEverything,
    setShow,
    background,
    loaded,
    loading,
    forSearch,
    forHeader,
    radio1,
    radio2,
    radio3,
})