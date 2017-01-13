import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchTopics, closeModal } from '../actions';
import Subtopic from '../components/Subtopic';

class Subtopics extends Component {
  render() {
    const { subtopics } = this.props;

    return (
        <div style={{
          display: 'flex',
          flexFlow: 'row wrap'
        }}>
        { this.props.subtopics.map(subtopic =>
          <Subtopic key={subtopic._id} subtopic={subtopic} />
        )}
        </div>
    );
  }
}


class Topics extends Component {
  render() {
    return (
      <div>
        { this.props.topics.map(topic => {
          return (
            <div key={topic._id}>
              <h2 key={topic._id} style={{
                color: 'white'
              }}>{topic.name}</h2>
            <Subtopics subtopics={topic.subtopics} />
            </div>
          );
        })}
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.modalClick = this.modalClick.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTopics());
  }

  modalClick(event) {
    if (event.target.className.indexOf('modalOverlay') !== -1)
      this.props.dispatch(closeModal());
  }

  render() {
    const { dispatch, topics, modal } = this.props;
    const topicsList = topics.topics;
    const playlist = modal.playlist;

    return (
      <div>
        { topicsList && topicsList.length > 0 &&
          <Topics topics={topicsList} />
        }
        <div className={
          'modalOverlay' + (modal.show ? ' active': '')
        } onClick={(event)=>{this.modalClick(event)}}>
          <div className={
            'modal' + (modal.show ? ' active': '')
          }>
            <content>
              <div className="modalHeader" style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.35),rgba(0, 0, 0, 0)), ' + modal.cssImageUrl,
                backgroundSize: 'cover'
              }}>
                <h2>{modal.title}</h2>
              </div>
              <ol>
                { playlist.map(file => {
                  return (
                      <li>{file.title}</li>
                  );
                })}
              </ol>
            </content>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { topics, modal } = state;

  return {
    topics,
    modal
  }
}

export default connect(mapStateToProps)(App);
