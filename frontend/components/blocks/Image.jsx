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

  handleImageUpload(e) {

  }

  render() {
    return (
      <div className="block-body">
        <input
          type="file"
          className="image-block-input"
          onChange={this.handleImageUpload}
          hidden
        />
        this is an image block
      </div>
    );
  }
}

export default Image;
