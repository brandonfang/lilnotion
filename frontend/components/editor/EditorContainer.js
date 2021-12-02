import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session-actions';
import { fetchPages } from '../../actions/page-actions';
import { fetchBlocks } from '../../actions/block-actions';
import Editor from './Editor';

// const mapStateToProps = (state, ownProps) => ({
//   errors: state.errors.session,
//   currentUser: state.entities.users[state.session.currentUserId],
//   pages: state.entities.pages,
//   blocks: state.entities.blocks,
// });

const mapStateToProps = (state, ownProps) => {
  console.log("blocks: ", state.entities.blocks);
  console.log("blocks: ", Object.keys(state.entities.blocks).length);
  return ({
    errors: state.errors.session,
    currentUser: state.entities.users[state.session.currentUserId],
    pages: state.entities.pages,
    blocks: state.entities.blocks,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPages: (userId) => dispatch(fetchPages(userId)),
  fetchBlocks: (userId) => dispatch(fetchBlocks(userId)),
  logout: () => dispatch(logout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Editor));
