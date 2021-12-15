import React from 'react';
import ContentEditable from 'react-contenteditable';
import sanitizeHtml from 'sanitize-html';
import { debounce } from '../../util/utils';

class Code extends React.Component {
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
      <div className="block-body-code">
        <div className="code">
          <ContentEditable
            innerRef={this.contentEditable}
            html={this.props.block.text}
            onChange={debounce(this.handleChange, 500)}
            tagName="div"
            className="code-inner"
            autoCapitalize="off"
            spellCheck="false"
          />
        </div>
      </div>
    );
  }
}

export default Code;
