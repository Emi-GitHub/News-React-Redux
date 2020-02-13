import React, { Component } from 'react';
import "../styles/SearchBarEverything.css";
import "../styles/SearchBar.css";
import { connect } from 'react-redux';
import {fetchNews} from '../actions';
import {fetchNewsSort} from '../actions';
import {changeTerm2} from '../actions';

class SearchBarEverything extends Component {
    componentDidMount(){
        this.props.fetchNews(this.props.term);
    }
    render() {
        console.log('term2:', this.props.term2, 'rememberTerm:', this.props.rememberTerm, 'term:', this.props.term)
       /* const searchForOptions = () => {
            return(
                <div className="radio-button">
                    <div className="inline fields sort-section">
                        <label className="label-sort"> Sort by section: </label>
                        <div className="field">
                            <div className="ui radio checkbox popularity-radio" >
                                <input 
                                    type="radio" 
                                    name="radio1" 
                                    value="radio1" 
                                    checked={this.props.radio1}  
                                    onChange={(event) => this.props.fetchNewsSort(this.props.rememberTerm, event.target.value)}
                                />
                                <label className="sort-radio">Popularity</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox relevance-radio" >
                                <input 
                                    type="radio" 
                                    name="radio2"  
                                    value="radio2" 
                                    checked={this.props.radio2}  
                                    onChange={(event) => this.props.fetchNewsSort(this.props.rememberTerm, event.target.value)}
                                />
                                <label className="sort-radio">Relevance</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox publiched-radio">
                                <input 
                                    type="radio" 
                                    name="radio3" 
                                    value="radio3" 
                                    checked={this.props.radio3}  
                                    onChange={(event) => this.props.fetchNewsSort(this.props.rememberTerm, event.target.value)}
                                />
                                <label className="sort-radio">Published date</label>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }*/
        return(
            <div>
                <form className="ui form container search-sort" onSubmit={() => this.props.fetchNews(this.props.term2)}>
                    <div className="field" >
                        <div className="ui search" >
                            <div className="ui icon input focus home-search" >
                                <input
                                    type="text" 
                                    value={this.props.term2}
                                    placeholder="Search news..."
                                    onChange={(event) => this.props.changeTerm2(event.target.value)}
                                />
                                <span onClick={() => this.props.fetchNews(this.props.term2)} className="search-icon">
                                    <i className="search icon"/>
                                </span>
                            </div>
                        </div>
                        {/*{searchForOptions()}*/}
                    </div>
                </form>
            </div>
        )
        
    }
}

const mapStateToProps = state => {
    return {
        term2: state.term2,
        rememberTerm: state.rememberTerm,
        radio1: state.radio1,
        radio2: state.radio2,
        radio3: state.radio3,
        term: state.term
    }
}
export default connect(mapStateToProps, {fetchNews, fetchNewsSort, changeTerm2})(SearchBarEverything);