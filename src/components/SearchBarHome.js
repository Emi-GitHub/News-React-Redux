import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { showEverythingonSearch } from '../actions';
import { changeTerm } from '../actions';
import "../styles/SearchBar.css";

class SearchBarHome extends Component {
    render() {
        return(
            <div>
                <form className="ui form container" onSubmit={() => this.props.showEverythingonSearch()}>
                    <div className="field" >
                        <div className="ui search">
                            <div className="ui icon input focus home-search">
                                <input
                                    type="text" 
                                    placeholder="Search news..."
                                    onChange={(event) => this.props.changeTerm(event.target.value)}
                                    value={this.props.term}
                                />
                                <span onClick={() => this.props.showEverythingonSearch()} className="search-icon">
                                    <i className="search icon"/>
                                </span>
                            </div>
                            {this.props.showEverything ? <Redirect to={{pathname:'/everything'}} /> : null} 
                        </div>
                    </div>
                </form>
            </div>
        )   
    }
}

const mapStateToProps = state => {
    return {
        term: state.term,
        showEverything: state.showEverything
    }
}
export default connect(mapStateToProps, {showEverythingonSearch, changeTerm})(SearchBarHome);