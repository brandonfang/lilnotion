import React from 'react';
import ContentEditable from 'react-contenteditable';
import sanitizeHtml from 'sanitize-html';
import { debounce } from '../../util/utils';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      html: this.props.block.text,
      checked: this.props.block.checked,
      expanded: this.props.block.expanded,
      // toggleInnerText
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
      <div className="block-body">
        {/* add input or custom checkbox */}
        <ContentEditable
          innerRef={this.contentEditable}
          html={this.state.html}
          onChange={debounce(this.handleChange, 500)}
          tagName="div"
          className="toggle"
          placeholder="Toggle"
        />
        {/* innerPlaceholder="Empty toggle. Click or drag blocks inside" */}
        {/* innerPlaceholder2="Empty toggle. Click to start writing inside" */}
      </div>
    );
  }
}

export default Toggle;
