import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNews } from '../actions';
import { fetchNewsSort } from '../actions';
import { changeTerm } from '../actions';
import '../styles/SearchBarEverything.css';
import '../styles/SearchBar.css';

class SearchBarEverything extends Component {
  componentDidMount() {
    this.props.fetchNews(this.props.termHome);
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.fetchNews(this.props.termEverything);
  };

  render() {
    const searchForOptions = () => (
      <div className="radio-button">
        <div className="inline fields sort-section">
          <label className="label-sort"> Sort by section: </label>
          <div className="field">
            <div className="ui radio checkbox popularity-radio">
              <input
                type="radio"
                name="radio1"
                value="option1"
                checked={this.props.selectedOption === 'option1'}
                onChange={event =>
                  this.props.fetchNewsSort(
                    this.props.termEverything,
                    event.target.value
                  )
                }
              />
              <label className="sort-radio">Popularity</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox relevance-radio">
              <input
                type="radio"
                name="radio2"
                value="option2"
                checked={this.props.selectedOption === 'option2'}
                onChange={event =>
                  this.props.fetchNewsSort(
                    this.props.termEverything,
                    event.target.value
                  )
                }
              />
              <label className="sort-radio">Relevance</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox publiched-radio">
              <input
                type="radio"
                name="radio3"
                value="option3"
                checked={this.props.selectedOption === 'option3'}
                onChange={event =>
                  this.props.fetchNewsSort(
                    this.props.termEverything,
                    event.target.value
                  )
                }
              />
              <label className="sort-radio">Published date</label>
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <div>
        <form
          className="ui form container search-sort"
          onSubmit={this.onFormSubmit}
        >
          <div className="field">
            <div className="ui search">
              <div className="ui icon input focus home-search">
                <input
                  type="text"
                  value={this.props.termEverything}
                  placeholder="Search news..."
                  onChange={event => this.props.changeTerm(event.target.value)}
                />
                <span
                  onClick={() =>
                    this.props.fetchNews(this.props.termEverything)
                  }
                  className="search-icon"
                >
                  <i className="search icon" />
                </span>
              </div>
            </div>
            {searchForOptions()}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  termEverything: state.termEverything,
  selectedOption: state.selectedOption,
  termHome: state.termHome,
});
SearchBarEverything.propTypes = {
  termEverything: PropTypes.string,
  termHome: PropTypes.string,
};
export default connect(
  mapStateToProps,
  { fetchNews, fetchNewsSort, changeTerm }
)(SearchBarEverything);
