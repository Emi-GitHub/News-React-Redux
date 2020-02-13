import axios from 'axios';

export const fetchTopHeadlines = () => async dispatch => {
    const BASE_URL = 'https://newsapi.org/v2/top-headlines?';
    const API_KEY = 'apiKey=' + process.env.REACT_APP_API_KEY;
    const url = BASE_URL + 'country=us&' + API_KEY;
    const response = await axios.get(url);
    dispatch({
        type: 'CHANGE_BACKGROUND',
    })
    dispatch({
        type: 'CHANGE_LOADED',
    })
    dispatch({
        type: 'CHANGE_LOADING',
    })
    dispatch({
        type: 'CHANGE_FORSEARCH',
    })
    dispatch({
        type: 'CHANGE_FORHEADER',
    })
    dispatch({
        type: 'FETCH_HEADLINES',
        payload: response.data.articles,
    })
}
export const fetchNews = (term) => async dispatch => {
    console.log(term)
    const BASE_URL = 'https://newsapi.org/v2/everything?';
    const API_KEY = 'apiKey=' + process.env.REACT_APP_API_KEY;
    const q = term; 
    const url = BASE_URL + 'q=' + q + '&' + API_KEY;
    console.log(url)
    const response = await axios.get(url);
    dispatch({
        type: 'RADIO_1'
    })
    dispatch({
        type: 'REMEMBER_TERM',
        payload: q
    })
    dispatch({
        type: 'CHANGE_BACKGROUND',
    })
    dispatch({
        type: 'CHANGE_LOADED',
    })
    dispatch({
        type: 'CHANGE_LOADING',
    })
    dispatch({
        type: 'CHANGE_FORSEARCH',
    })
    dispatch({
        type: 'CHANGE_FORHEADER',
    })
    dispatch({
        type: 'FETCH_HEADLINES',
        payload: response.data.articles,
    })
}
export const fetchNewsSort = (term, radio) => async dispatch => {
        var sortBy;
        if(radio === 'radio1') {
            dispatch({
                type: 'RADIO_1'
            })
            sortBy = 'popularity'
        }
        if(radio === 'radio2') {
            dispatch({
                type: 'RADIO_2'
            })
            sortBy = 'relevance';
        }
        if(radio === 'radio3') {
            dispatch({
                type: 'RADIO_3'
            })
            sortBy = 'publishedAt';
        }
        const BASE_URL = 'https://newsapi.org/v2/everything?';
        const API_KEY = 'apiKey=' + process.env.REACT_APP_API_KEY;
        const q = term; 
        const url = BASE_URL + 'q=' + q + '&sortBy=' + sortBy + '&' + API_KEY;
        const response = await axios.get(url);
        dispatch({
            type: 'REMEMBER_TERM',
            payload: q
        })
        dispatch({
            type: 'FETCH_HEADLINES',
            payload: response.data.articles,
        })
}
export const api = response => {
    return {
        type: 'FETCH_HEADLINES',
        payload: response,
    }
}
export const selectArticle = article => {
    return {
        type: 'ARTICLE_SELECTED',
        payload: article
    }
}
export const buttonClicked = () => {
    return {
        type: 'BUTTON_CLICKED',
    }
}
export const changeTerm = term => {
    return {
        type: 'CHANGE_TERM',
        payload: term
    }
}
export const showEverythingonSearch = () => {
    return {
        type: 'SHOW_EVERYTHING',
    }
}
export const changeTerm2 = term => {
    return {
        type: 'CHANGE_TERM2',
        payload: term
    }
}
