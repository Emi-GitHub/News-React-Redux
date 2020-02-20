import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showEverythingOnSearch } from '../actions';
import { changeTerm } from '../actions';
import '../styles/SearchBar.css';

class SearchBarArticle extends Component {
  onFormSubmit = event => {
    event.preventDefault();
    this.props.showEverythingOnSearch(true);
  };

  render() {
    return (
      <div>
        <form className="ui form container" onSubmit={this.onFormSubmit}>
          <div className="field">
            <div className="ui search">
              <div className="ui icon input focus home-search">
                <input
                  type="text"
                  placeholder="Search news..."
                  onChange={event => this.props.changeTerm(event.target.value)}
                  value={this.props.termHome}
                />
                <span
                  onClick={() => this.props.showEverythingOnSearch(true)}
                  className="search-icon"
                >
                  <i className="search icon" />
                </span>
              </div>
              {this.props.showEverything ? (
                <Redirect to={{ pathname: '/everything' }} />
              ) : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  termHome: state.termHome,
  showEverything: state.showEverything,
});
SearchBarArticle.propTypes = {
  termHome: PropTypes.string,
  showEverything: PropTypes.bool,
};
export default connect(
  mapStateToProps,
  { showEverythingOnSearch, changeTerm }
)(SearchBarArticle);
