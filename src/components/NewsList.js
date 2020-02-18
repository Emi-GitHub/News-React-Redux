import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewsCard from './NewsCard';
import '../styles/NewsList.css';

class NewsList extends Component {
  render() {
    const news = this.props.headlines.map((item, i) => {
      if (i < 20) return <NewsCard item={item} />;
      return true;
    });
    return <div className="cards-wrapper">{news}</div>;
  }
}

const mapStateToProps = state => ({
  headlines: state.headlines,
});

NewsList.propTypes = {
  headlines: PropTypes.array
}

export default connect(mapStateToProps)(NewsList);
