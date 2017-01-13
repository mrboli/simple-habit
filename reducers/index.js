import { combineReducers } from 'redux';
import {
  REQUEST_TOPICS,
  RECEIVE_TOPICS,
  SHOW_MODAL,
  CLOSE_MODAL,
  RECEIVE_PLAYLIST
} from '../actions';

function topics(state = { topics: [] }, action) {
  switch (action.type) {
    case REQUEST_TOPICS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_TOPICS:
      return Object.assign({}, state, {
        isFetching: false,
        topics: action.topics,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

function modal(state = { playlist: [] }, action) {
  switch(action.type) {
    case SHOW_MODAL:
      return Object.assign({}, state, {
        show: true,
        title: action.title,
        cssImageUrl: action.cssImageUrl
      });
    case CLOSE_MODAL: 
      let newState = Object.assign({}, state, {
        show: false,
      });
      //delete newState.playlist;
      return newState;
    case RECEIVE_PLAYLIST:
      return Object.assign({}, state, {
        playlist: action.playlist
      });
    default: 
      return state;
  }
}

export default combineReducers({
  topics,
  modal
});
