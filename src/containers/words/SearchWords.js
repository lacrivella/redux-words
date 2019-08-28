import { connect } from 'react-redux';
import SearchForm from '../../components/words/SearchForm';
import { updateSearchTerm } from '../../actions/wordsActions';
import { getSearchTerm } from '../../selectors/wordsSelectors';

const mapStateToProps = state => ({ searchTerm: getSearchTerm(state) });

const mapDispatchToProps = dispatch => ({ 
  handleOnChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
