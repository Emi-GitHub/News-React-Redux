import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadMore from './LoadMore';
import { buttonClicked } from '../actions';
import '../styles/ButtonBar.css';

class ButtonBar extends Component {
  onButtonClick = () =>  {
    if (!this.props.setShow) return this.props.buttonClicked()
  }
  render() {
    return (
      <div>
        {this.props.setShow && <LoadMore />}
        <button
          className="fluid ui button loadmore-button"
          onClick={this.onButtonClick}
        >
          Load more
        </button>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  setShow: state.setShow,
});

ButtonBar.propTypes = {
  setShow: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  { buttonClicked }
)(ButtonBar);
