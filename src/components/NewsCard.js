import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectArticle } from '../actions';
import '../styles/NewsCard.css';

class NewsCard extends Component {
  render() {
    const backgroundImgStyle = {
      backgroundImage: `url(${this.props.item.urlToImage})`,
    };
    const PictureCard = () => {
      if (this.props.item.urlToImage === 'null') return null;
      return <div style={backgroundImgStyle} className="card-photo" />;
    };
    return (
      <div className="card-style" key={this.props.item.url}>
        {PictureCard()}
        <h3 className="card-header">{this.props.item.title}</h3>
        <div className="card-description">{this.props.item.description}</div>
        <button className="article-button ui black basic button">
          <Link
            to={{ pathname: '/article' }}
            onClick={() => this.props.selectArticle(this.props.item)}
            className="article-link"
          >
            Read full article
          </Link>
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  headlines: state.headlines,
  item: state.headlines.find(item => item === ownProps.item),
});
NewsCard.propTypes = {
  headlines: PropTypes.array
}
export default connect(
  mapStateToProps,
  { selectArticle }
)(NewsCard);
