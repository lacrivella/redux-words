import React from 'react';
import PropTypes from 'prop-types';
import SearchWords from '../../containers/words/SearchWords';
import TopWords from '../../containers/words/TopWords';

export default function Searchable({ match }) {
  return (
    <>
      <SearchWords />
      <TopWords count={match.params.count} />
    </>
  );
}

Searchable.propTypes = {
  match: PropTypes.object.isRequired
};
