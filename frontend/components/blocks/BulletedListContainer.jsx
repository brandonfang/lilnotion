import { connect } from 'react-redux';
import { fetchBlock, createBlock, updateBlock, deleteBlock } from '../../actions/block-actions';
import BulletedList from './BulletedList';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBlock: (blockId) => dispatch(fetchBlock(blockId)),
  createBlock: (block) => dispatch(createBlock(block)),
  updateBlock: (block) => dispatch(updateBlock(block)),
  deleteBlock: (blockId) => dispatch(deleteBlock(blockId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BulletedList);
