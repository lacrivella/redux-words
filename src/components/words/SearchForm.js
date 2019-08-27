import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ searchTerm, handleOnChange }) {
  <input type="text" value={searchTerm} onChange={handleOnChange} />;
}

SearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleOnChanges: PropTypes.func.isRequired
};

export default SearchForm;
