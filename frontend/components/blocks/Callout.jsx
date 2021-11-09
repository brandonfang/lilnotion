import React from 'react';
import ContentEditable from 'react-contenteditable';
import { debounce } from '../../util/utils';

class Callout extends React.Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      html: this.props.block.text,
      placeholder: '',
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const htmlChanged = this.props.html !== this.state.html;
    if (htmlChanged) {
      const newBlock = Object.assign(this.props.block, { text: this.state.html });
      this.props.updateBlock(newBlock);
    }
  }

  handleChange(e) {
    this.setState({ html: e.target.value });
  }

  render() {
    return (
      <div className="block-body">
        {/* add callout styling */}
        <ContentEditable
          innerRef={this.contentEditable}
          html={this.state.html}
          onChange={debounce(this.handleChange, 1000)}
          tagName="div"
          className="callout"
          placeholder="Type something"
        />
      </div>
    );
  }
}

export default Callout;
