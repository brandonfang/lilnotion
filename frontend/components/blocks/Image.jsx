import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.state = {
      placeholder: '',
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  handleChange(e) {
  }

  handleImageUpload() {

  }

  render() {
    return (
      <div className="block-body">
        <input
          type="file"
          onChange={this.handleImageUpload}
          hidden
        />
      </div>
    );
  }
}

export default Image;
