import dictionary from '../fixtures/words.json';
import { UPDATE_SEARCH_TERM } from '../actions/wordsActions';

export const initialState = {
  dictionary,
  searchTerm: ''
};

export default function wordsReducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default: return state;
  }
}