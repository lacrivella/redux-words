export const getWords = state => state.dictionary;
export const getFirstWords = (state, count) => getWords(state).slice(0, count);
