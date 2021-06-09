import { connect } from 'react-redux';
import { createWorkspace, receiveErrors, removeErrors } from '../../actions/workspace-actions';
import Onboarding from './Onboarding';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (workspace) => dispatch(createWorkspace(workspace)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  removeErrors: () => dispatch(removeErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);
