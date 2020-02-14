import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsCard from './NewsCard';
import '../styles/NewsList.css'
import '../styles/LoadMore.css';

class LoadMore extends Component {
    render () {
        const news = this.props.headlines.map((item, i)=> {
            if(i >= 16) return (<NewsCard item={item}/>)
            return true;
        }); 
        return (
            <div className="cards-wrapper">
                {news}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        headlines: state.headlines
    }
}

export default connect(mapStateToProps)(LoadMore);