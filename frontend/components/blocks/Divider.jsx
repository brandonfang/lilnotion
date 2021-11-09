import React from 'react';
import ContentEditable from 'react-contenteditable';

class Divider extends React.Component {
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

  render() {
    return (
      <div className="block-body">
        {/* add divider styling */}
        <div className="divider"></div>
      </div>
    );
  }
}

export default Divider;
