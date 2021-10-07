import React from 'react';
import ContentEditable from 'react-contenteditable';
import debounce from './debounce';

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      html: this.props.block.properties.title,
      placeholder: '',
    };
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
    const htmlChanged = this.props.html !== this.state.html;
    if (htmlChanged) {
      const newBlock = Object.assign(this.props.block, { properties: { title: this.state.html }});
      this.props.updateBlock(newBlock);
    }
  }

  handleChange(e) {
    this.setState({ html: e.target.value });
  }

  render() {
    // console.log(this.props.block);

    return (
      <div className="block-body">
        <ContentEditable
          innerRef={this.contentEditable}
          html={this.state.html}
          onChange={debounce(this.handleChange, 1000)}
          tagName="p"
          className="text"
          placeholder="Type '/' for commands"
          properties={this.props.block.properties}
        />
      </div>
    );
  }
}

export default Text;
