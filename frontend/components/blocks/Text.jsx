import React from 'react';
import ContentEditable from 'react-contenteditable'

class Text extends React.Component {
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

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  handleChange(e) {
    this.props.updateBlock({
      ...this.props.block,
      properties: { title: this.state.html }
    });
  }

  render() {
    return (
      <div className="block-body">
        <ContentEditable
          innerRef={this.contentEditable}
          html={this.state.html}
          onChange={this.debounce(this.handleChange, 500)}
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
