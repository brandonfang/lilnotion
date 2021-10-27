import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BlockActionMenu from './BlockActionMenu';
import {
  createBlock,
  fetchBlock,
  updateBlock,
  deleteBlock,
} from '../../actions/block-actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  blocks: state.entities.blocks,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createBlock: (block) => dispatch(createBlock(block)),
  fetchBlock: (blockId) => dispatch(fetchBlock(blockId)),
  updateBlock: (block) => dispatch(updateBlock(block)),
  deleteBlock: (blockId) => dispatch(deleteBlock(blockId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlockActionMenu));
