import { connect } from 'react-redux';
import { fetchBlock, createBlock, updateBlock, deleteBlock } from '../../actions/block-actions';
import Paragraph from './Paragraph';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBlock: (blockId) => dispatch(fetchBlock(blockId)),
  createBlock: (block) => dispatch(createBlock(block)),
  updateBlock: (block) => dispatch(updateBlock(block)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Paragraph);
