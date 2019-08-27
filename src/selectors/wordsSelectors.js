export const getWords = state => state.words.dictionary;
export const getFirstWords = (state, count) => getWords(state).slice(0, count);
