import { connect } from 'react-redux';
import Words from '../../components/words/Words';
import { getTopWordsByTerm } from '../../selectors/wordsSelectors';


const mapStateToProps = (state, props) => ({
  words: getTopWordsByTerm(state, props.count || 1000)
});

export default connect(
  mapStateToProps
)(Words);
