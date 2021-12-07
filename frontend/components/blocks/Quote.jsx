import React from 'react';
import ContentEditable from 'react-contenteditable';
import { debounce } from '../../util/utils';

class Quote extends React.Component {
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
    this.setState({ html: e.target.value });
  }

  render() {
    return (
      <div className="block-body">
        <div className="quote-wrapper">
          <ContentEditable
            innerRef={this.contentEditable}
            html={this.state.html}
            onChange={debounce(this.handleChange, 1000)}
            tagName="blockquote"
            className="quote"
            placeholder="Empty quote"
            />
        </div>
      </div>
    );
  }
}

export default Quote;
