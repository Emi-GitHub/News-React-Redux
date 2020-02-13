import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewsList from './NewsList';
import ButtonBar from './ButtonBar';
import SearchBarEverything from './SearchBarEverything';
import '../styles/Home.css';
import '../styles/Everything.css';
import { connect } from 'react-redux';

class Everything extends Component { 
    render() {
        if(this.props.showError){
            return (
                <div>
                    <p>Your search - <b>{this.props.rememberTerm}</b> - did not match any documents.</p>
                    <p>Suggestions:</p> 
                    <li>Make sure that all words are spelled correctly.</li>
                    <li>Try different keywords.</li>
                    <li>Try more general keywords</li>
                    <li>Try fewer keywords</li>
                </div>
            )
        }
        return (
           <div className={this.props.loaded}>
               <div className={this.props.loading}>
                    <div className={this.props.background}>
                        <div className={this.props.forSearch}>
                            <SearchBarEverything />
                        </div>
                        <div className={this.props.forSearch}>
                            <div className="topheadlines-card">
                                <div className="transparent-div">
                                    <Link to="/" className="go-back">
                                        <i className="left chevron icon"/>
                                        Go back to home page
                                    </Link>
                                    <div className="header-top">Search for...</div>
                                    <NewsList />
                                    <ButtonBar /> 
                                    {this.props.showError ? <div>Not found</div> : null}
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        headlines: state.headlines,
        rememberTerm: state.rememberTerm,
        radio1: state.radio1,
        radio2: state.radio2,
        radio3: state.radio3,
        showError: state.showError,
        background: state.background,
        loaded: state.loaded,
        loading: state.loading,
        forSearch: state.forSearch,
        forHeader: state.forHeader
    }
}
export default connect(mapStateToProps)(Everything);