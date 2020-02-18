import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/Article.css';
import SearchBarArticle from './SearchBarArticle';

class Article extends Component {
  render() {
    const PictureCard = () => {
      const articleImage = this.props.selectedArticle.urlToImage;
      if (articleImage === 'null') return null;
      return (
        <div>
          <img
            className="ui fluid image article-image"
            src={articleImage}
            alt="not found img"
          />
        </div>
      );
    };
    const Title = () => {
      const articleTitle = this.props.selectedArticle.title;
      if (articleTitle === 'null') return null; 
      return (
        <div>
          <h1 className="header-article">{articleTitle}</h1>
          <div className="ui divider" />
        </div>
      );
    };
    const Author = () => {
      const articleAuthor = this.props.selectedArticle.author;
      if (articleAuthor === 'null') return null;
      return (
        <div className="article-light">
          By:
          {` ${articleAuthor}`}
          <br />
        </div>
      );
    };
    const Description = () => {
      const articleDesc = this.props.selectedArticle.description;
      if (articleDesc === 'null') return null;
      return (
        <div>
          <b className="article-desc">{articleDesc}</b>
          <br />
          <br />
        </div>
      );
    };
    const Content = () => {
      const articleContent = this.props.selectedArticle.content;
      if (articleContent === 'null') return null;
      return (
        <div className="article-content">
          {articleContent}
          <br />
          <br />
        </div>
      );
    };
    const functionForPublished = () => {
      const output = this.props.selectedArticle.publishedAt.split('');
      let i = 0;
      let publishedDate = '';
      while (output[i] !== 'T') {
        publishedDate += output[i];
        i++;
      }
      return publishedDate;
    };
    const Published = () => {
      const articlePublished = this.props.selectedArticle.publishedAt;
      if (articlePublished === 'null') return null;
      return (
        <div className="article-light">
          Published at:
          {` ${functionForPublished()}`}
          <br />
        </div>
      );
    };
    const Source = () => {
      const articleSource = this.props.selectedArticle.source.name;
      if (articleSource === 'null') return null;
      return (
        <div className="article-light">
          Source:
          {` ${articleSource}`}
          <br /> <br />
        </div>
      );
    };
    return (
      <div className="background-article">
          <SearchBarArticle />
        <div className="transparent-div">
          {Title()}
          {PictureCard()}
          {Source()}
          {Description()}
          {Content()}
          {Author()}
          {Published()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedArticle: state.selectedArticle,
});

Article.propTypes = {
  selectedArticle: PropTypes.bool
}

export default connect(mapStateToProps)(Article);
