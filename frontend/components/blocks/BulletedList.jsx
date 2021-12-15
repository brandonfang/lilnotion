import React from 'react';
import ContentEditable from 'react-contenteditable';
import sanitizeHtml from 'sanitize-html';
import { debounce } from '../../util/utils';

class BulletedList extends React.Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      html: this.props.block.text,
      placeholder: '',
    };
  }

  handleChange(e) {
    this.setState({ html: e.target.value }, () => {
      const newBlock = Object.assign(this.props.block, { text: this.state.html });
      this.props.updateBlock(newBlock);
    });
  }

  render() {
    return (
      <div className="block-body-bulleted-list">
        <div className="bulleted-list-pseudo">
        </div>
        <ContentEditable
          innerRef={this.contentEditable}
          html={this.state.html}
          onChange={debounce(this.handleChange, 500)}
          tagName="div"
          className="bulleted-list"
          placeholder="List"
        />
      </div>
    );
  }
}

export default BulletedList;
