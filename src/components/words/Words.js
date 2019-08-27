import React from 'react';
import PropTypes from 'prop-types';

function Words({ words }) {
  const wordElements = words.map((word) => (
    <li key={word}>
      <h2>{word}</h2>
    </li>
  ));
  return (
    <ul>
      {wordElements}
    </ul>
  );
}

Words.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Words;
