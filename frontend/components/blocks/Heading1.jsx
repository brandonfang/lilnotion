import React from 'react';
import ContentEditable from 'react-contenteditable'

class Heading1 extends React.Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      html: this.props.block.properties.title,
      placeholder: '',
      isTyping: false,
    };
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  handleChange(e) {
  }

  render() {
    return (
    <div className="block-body">
        <ContentEditable
          innerRef={this.contentEditable}
          html={this.state.html}
          onChange={this.handleChange}
          tagName="h1"
          className="h1"
          placeholder="Type '/' for commands"
          properties={this.props.block.properties}
        />
      </div>
    );
  }
}

export default Heading1;
