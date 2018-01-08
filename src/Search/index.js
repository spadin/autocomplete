import Search from './Search';
import {connect} from 'react-redux';
import {search} from '../ducks/words';

const mapDispatchToProps = (dispatch) => ({
  onChange(term) {
    dispatch(search(term));
  },
});

export default connect(null, mapDispatchToProps)(Search);
