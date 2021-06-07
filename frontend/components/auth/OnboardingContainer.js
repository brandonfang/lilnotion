import { connect } from 'react-redux';
import { receiveWorkspace, receiveErrors, removeErrors } from '../../actions/workspace-actions';
import Onboarding from './Onboarding';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (workspace) => dispatch(receiveWorkspace(workspace)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    removeErrors: () => dispatch(removeErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);
