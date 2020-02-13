import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadMore from './LoadMore';
import { buttonClicked } from '../actions';
import '../styles/ButtonBar.css';

class ButtonBar extends Component {
    render() {
        return (
            <div>
                <button className="fluid ui button loadmore-button" onClick={() => this.props.buttonClicked()}>Load more</button>
                {this.props.setShow && <LoadMore /> }
                {!this.props.setShow ? () => this.props.buttonClicked() : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        setShow: state.setShow
    }
}

export default connect(mapStateToProps, {buttonClicked})(ButtonBar);