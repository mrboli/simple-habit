import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { showModal, fetchPlaylist } from '../actions';

function getImageUrl(image) {
  return "url('https://bucketeer-760d0a32-a78c-4335-9090-9206d2933331.s3.amazonaws.com/"+image+"')";
}

class Subtopic extends Component {
  constructor(props) {
    super(props);
    this.setModal = this.setModal.bind(this);
  }

  setModal(subtopic) {
    let { dispatch } = this.props;
    dispatch(showModal(subtopic.name, getImageUrl(subtopic.image)));
    dispatch(fetchPlaylist(subtopic._id));
  }

  render() {
    const { subtopic } = this.props;

    return (
      <div className={'subtopic'} style={{
        height: 240,
        width: 200,
        margin: 5,
        background: 'linear-gradient(rgba(0, 0, 0, 0.35),rgba(0, 0, 0, 0)), ' + getImageUrl(subtopic.image),
        backgroundSize: 'cover',
      }} onClick={() => {this.setModal(subtopic)}}>
        <h3 style={{
          margin: 0,
          padding: 15,
          color: 'white'
        }}>{subtopic.name}</h3>
      </div>
    );
  }
}
export default connect()(Subtopic);
