import {connect} from 'react-redux';
import Words from './Words';

const mapStateToProps = ({words}) => ({words});

export default connect(mapStateToProps)(Words);
