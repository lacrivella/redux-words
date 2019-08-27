import words from '../fixtures/words.json';

export const initialState = [...words];

export default function wordsReducer(state = initialState, action) {
  switch(action.type) {
    default: return state;
  }
}