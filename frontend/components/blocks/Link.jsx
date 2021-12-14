import React from 'react';

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      placeholder: '',
    };
  }

  render() {
    const linkBody = null;

    // open menu to choose page
    return (
      <div className="block-body link">
        {linkBody}
      </div>
    );
  }
}

export default Link;
