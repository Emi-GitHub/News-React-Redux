import React, { Component } from 'react';
import '../styles/Article.css';
import { connect } from 'react-redux';

class Article extends Component {
     render() {
         const PictureCard = () => {
            var articleImage = this.props.selectedArticle.urlToImage;
            if(articleImage === "null") return null
            else return (
                <div>
                    <img 
                        className="ui fluid image article-image" 
                        src={articleImage} 
                        alt="not found img"
                    /> 
                </div>
            )
        }
        const Title = () => {
            var articleTitle = this.props.selectedArticle.title;
            if(articleTitle === "null") return null
            else return (
                <div>
                    <h1 className="header-article">{articleTitle}</h1>
                    <div className="ui divider"></div>
                </div>
            )
        }
        const Author = () => {
            var articleAuthor = this.props.selectedArticle.author;
            if( articleAuthor === "null") return null
            else return(
                <div className="article-light">
                    By: 
                    {' ' + articleAuthor}
                    <br/>
                </div>
            )
        }
        const Description = () => {
            var articleDesc = this.props.selectedArticle.description;
            if(articleDesc === "null") return null
            else return (
                <div>
                    <b className="article-desc">{articleDesc}</b>
                    <br/><br/>
                </div>
            )
        }
        const Content = () => {
            var articleContent = this.props.selectedArticle.content;
            if(articleContent === "null") return null
            else return(
                <div className="article-content">
                    {articleContent}
                    <br/><br/>
                </div>
            )
        }
        const functionForPublished = () => {
            var output = this.props.selectedArticle.publishedAt.split('');
            var i = 0;
            var publishedDate = '';
            while(output[i]!=='T') {
                publishedDate = publishedDate + output[i]
                i++
            }
           return publishedDate
        }
        const Published = () => {
            var articlePublished = this.props.selectedArticle.publishedAt;
            if(articlePublished === "null") return null;
            else return (
                <div className="article-light">
                    Published at:
                    {' ' + functionForPublished()}
                    <br/>
                </div>
            )
        }
        const Source = () => {
            var articleSource = this.props.selectedArticle.source.name;
            if(articleSource === "null") return null;
            else return(
                <div className="article-light">
                     Source:
                    {' ' + articleSource}
                    <br/> <br/>
                </div>
            )
        }
         return (
            <div className="ui container background-article">
                <div className="ui container">
                    {Title()}  
                    {PictureCard()} 
                    {Source()}
                    {Description()} 
                    {Content()} 
                    {Author()}
                    {Published()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedArticle: state.selectedArticle
    }
}

 export default connect(mapStateToProps)(Article);