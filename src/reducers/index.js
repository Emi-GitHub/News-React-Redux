import { combineReducers } from 'redux';

const initialHeadlines = [];
const headlines = (state = initialHeadlines, action) => {
    switch (action.type) {
        case 'FETCH_HEADLINES': return action.payload;
        default: return state;
    }
}
const initialArticle = null;
const selectedArticle = (state = initialArticle, action) => {
    switch (action.type) {
        case 'ARTICLE_SELECTED': return action.payload;
        default: return state;
    }
}
const initialShow = false;
const setShow = (state = initialShow, action) => {
    switch (action.type) {
        case 'BUTTON_CLICKED': return true;
        default: return state;
    }
}
const initialBackground = 'ui text loader';
const background = (state = initialBackground, action) => {
    switch(action.type) {
        case 'CHANGE_BACKGROUND': return 'background'
        default: return state;
    }
}
const initialLoaded = 'loaded-api';
const loaded = (state = initialLoaded, action) => {
    switch(action.type) {
        case 'CHANGE_LOADED': return 'nothing';
        default: return state;
    }
}
const initialLoading = 'loaded-api';
const loading = (state = initialLoading, action) => {
    switch(action.type) {
        case 'CHANGE_LOADING': return 'nothing';
        default: return state;
    }
}
const initialForSearch= 'hide-app';
const forSearch = (state = initialForSearch, action) => {
    switch(action.type) {
        case 'CHANGE_FORSEARCH': return 'nothing';
        default: return state;
    }
}
const initialForHeader= 'hide-app';
const forHeader = (state = initialForHeader, action) => {
    switch(action.type) {
        case 'CHANGE_FORHEADER': return 'topheadlines-card'
        default: return state;
    }
}
const initialTerm = '';
const term = (state = initialTerm, action) => {
    switch(action.type) {
        case 'CHANGE_TERM': return action.payload;
        default: return state;
    }
}
const initialShowEverything = false;
const showEverything = ( state = initialShowEverything, action) => {
    switch(action.type) {
        case 'SHOW_EVERYTHING': return true;
        default: return state;
    }
}
const initialRememberTerm = '';
const rememberTerm = (state = initialRememberTerm, action) => {
    switch(action.type) {
        case 'REMEMBER_TERM': return action.payload;
        default: return state;
    }
}
const initialRadio1 = true;
const radio1 = (state = initialRadio1, action) => {
    switch(action.type) {
        case 'RADIO_1': return true;
        case 'RADIO_2': return false;
        case 'RADIO_3': return false;
        default: return state;
    }
}
const initialRadio2 = false;
const radio2 = (state = initialRadio2, action) => {
    switch(action.type) {
        case 'RADIO_1': return false;
        case 'RADIO_2': return true;
        case 'RADIO_3': return false;
        default: return state;
    }
}
const initialRadio3 = false;
const radio3 = (state = initialRadio3, action) => {
    switch(action.type) {
        case 'RADIO_1': return false;
        case 'RADIO_2': return false;
        case 'RADIO_3': return true;
        default: return state;
    }
}
const initialShowError = false;
const ShowError = (state = initialShowError, action) => {
    switch(action.type) {
        case 'SHOW_ERROR': return true;
        default: return state;
    }
}
const initialTerm2 = '';
const term2 = (state = initialTerm2, action) => {
    switch(action.type) {
        case 'CHANGE_TERM2': return action.payload;
        default: return state;
    }
}

export default combineReducers ({
    headlines,
    selectedArticle,
    setShow,
    background,
    loaded,
    loading,
    forSearch,
    forHeader,
    term,
    showEverything,
    rememberTerm,
    radio1,
    radio2,
    radio3,
    ShowError,
    term2,
})