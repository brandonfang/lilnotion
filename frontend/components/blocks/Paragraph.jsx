import React from 'react';
import ContentEditable from 'react-contenteditable';
import sanitizeHtml from 'sanitize-html';
import { debounce, pasteAsPlainText } from '../../util/utils';
import BlockSlashMenu from '../menus/BlockSlashMenu';

class Paragraph extends React.Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {
      html: this.props.block.text,
      placeholder: '',
    };
    this.keysPressed = {};
  }

  handleChange(e) {
    this.setState({ html: e.target.value }, () => {
      const newBlock = Object.assign(this.props.block, { text: this.state.html });
      this.props.updateBlock(newBlock);
    });
  }

  handleKeyDown(e) {
    if (e.key === '/') {
      e.preventDefault();
      // console.log('/ pressed');
      // open slash command menu

    } else if (e.key === 'Backspace' && !this.state.html) {
      this.props.deleteBlock(this.props.block.id);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      // console.log('break up this block');
      // this.contentEditable.current.blur();

    }
  }

  handleFocus(e) {}

  handleBlur(e) {}

  render() {
    // sanitizeHtml example: https://codesandbox.io/s/simple-rich-text-editor-in-react-forked-295gc
    // const html = '<strong>hello world</strong>';
    // console.log(sanitizeHtml(html));
    // console.log(sanitizeHtml("<img src=x onerror=alert('img') />").length);
    // console.log(sanitizeHtml("console.log('hello world')"));
    // console.log(sanitizeHtml("<script>alert('hello world')</script>").length);

    return (
      <div className="block-body">
        <ContentEditable
          innerRef={this.contentEditable}
          html={this.state.html}
          onChange={debounce(this.handleChange, 500)}
          onKeyDown={this.handleKeyDown}
          // onFocus={}
          // onBlur={}
          tagName="p"
          className="paragraph"
          // placeholder="Type '/' for commands"
          placeholder="Click the ⋮⋮ button for commands"
        />
      </div>
    );
  }
}

export default Paragraph;
