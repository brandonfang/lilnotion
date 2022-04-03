import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchPages } from '../../actions/page-actions'
import { fetchBlocks } from '../../actions/block-actions'
import Editor from './Editor'

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  currentUser: state.entities.users[state.session.currentUserId],
  pages: state.entities.pages,
  blocks: state.entities.blocks,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPages: (userId) => dispatch(fetchPages(userId)),
  fetchBlocks: (userId) => dispatch(fetchBlocks(userId)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Editor))
