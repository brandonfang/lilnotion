import React from 'react';
import ContentEditable from 'react-contenteditable';
import { debounce } from '../../util/utils';

class Heading1 extends React.Component {
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
      <div className="block-body h1">
        <ContentEditable
          innerRef={this.contentEditable}
          html={this.props.block.text}
          onChange={debounce(this.handleChange, 500)}
          tagName="h1"
          className="h1"
          placeholder="Heading 1"
        />
      </div>
    );
  }
}

export default Heading1;
