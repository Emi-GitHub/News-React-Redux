import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadMore from './LoadMore';
import { buttonClicked } from '../actions';
import '../styles/ButtonBar.css';

class ButtonBar extends Component {
  render() {
    return (
      <div>
        <button
          className="fluid ui button loadmore-button"
          onClick={() => this.props.buttonClicked()}
        >
          Load more
        </button>
        {this.props.setShow && <LoadMore />}
        {!this.props.setShow ? () => this.props.buttonClicked() : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({ 
  setShow: state.setShow,
});

ButtonBar.propTypes = {
  setShow: PropTypes.bool
}

export default connect(mapStateToProps,
  { buttonClicked }
)(ButtonBar);
