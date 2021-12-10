import React from 'react';
import ContentEditable from 'react-contenteditable';
import sanitizeHtml from 'sanitize-html';
import { debounce } from '../../util/utils';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
    this.toggleChecked = this.toggleChecked.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      html: this.props.block.text,
      checked: this.props.block.checked,
      placeholder: '',
    };
  }

  toggleChecked() {
    this.setState({ checked: !this.state.checked }, () => {
      const newBlock = Object.assign(this.props.block, { checked: this.state.checked });
      this.props.updateBlock(newBlock);
    });
  }

  handleChange(e) {
    this.setState({ html: e.target.value }, () => {
      const newBlock = Object.assign(this.props.block, { text: this.state.html });
      this.props.updateBlock(newBlock);
    });
  }

  render() {
    const checkbox = (
      <div className="checkbox-wrapper">
        <svg
          viewBox="0 0 16 16"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            fill: 'inherit',
            flexShrink: '0',
            backfaceVisibility: 'hidden',
          }}
        >
          <path d="M1.5,1.5 L1.5,14.5 L14.5,14.5 L14.5,1.5 L1.5,1.5 Z M0,0 L16,0 L16,16 L0,16 L0,0 Z"></path>
        </svg>
      </div>
    );

    const check = (
      <div className="check-wrapper">
        <svg
          viewBox="0 0 14 14"
          style={{
            width: '12px',
            height: '12px',
            display: 'block',
            fill: 'white',
            flexShrink: '0',
            backfaceVisibility: 'hidden',
          }}
        >
          <polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"></polygon>
        </svg>
      </div>
    );

    return (
      <div className="block-body-todo">
        <div className="todo-control" onClick={this.toggleChecked}>
          <div className="todo-bg">{this.state.checked ? check : checkbox}</div>
        </div>
        <ContentEditable
          innerRef={this.contentEditable}
          html={this.state.html}
          onChange={debounce(this.handleChange, 1000)}
          tagName="div"
          className="todo"
          placeholder="To-do"
        />
      </div>
    );
  }
}

export default ToDo;
