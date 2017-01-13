import fetch from 'isomorphic-fetch';

export const REQUEST_TOPICS = 'REQUEST_TOPICS';
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';
 
function requestTopics() {
  return {
    type: REQUEST_TOPICS
  }
}

function receiveTopics(json) {
  return {
    type: RECEIVE_TOPICS,
    topics: json,
    receivedAt: Date.now()
  }
}

export function fetchTopics() {
  return dispatch => {
    dispatch(requestTopics())
      return fetch('http://warm-springs-61775.herokuapp.com/api/topics?enable=true&show=true&populate=subtopics&sort=order')
      .then(response => response.json())
      .then(json => {
        dispatch(receiveTopics(json));
      });
  }
}

export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';

export function showModal(title, cssImageUrl) {
  return {
    type: SHOW_MODAL,
    title,
    cssImageUrl
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

function receivePlaylist(json) {
  return {
    type: RECEIVE_PLAYLIST,
    playlist: json,
    receivedAt: Date.now()
  }
}

export function fetchPlaylist(subtopicId) {
  return dispatch => {
      return fetch(`http://warm-springs-61775.herokuapp.com/api/days?subtopic=${subtopicId}&sort=order`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        dispatch(receivePlaylist(json));
      });
  }
}
