import React from 'react';
import { BiImage } from 'react-icons/bi';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpload = this.handleUpload.bind(this);
    this.state = {
      placeholder: '',
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  handleUpload(e) {
     this.setState({
       file: URL.createObjectURL(e.target.files[0]),
     });
  }

  render() {
    return (
      <div className="block-body">
        <div className="image-block">
          <label className="image-block-upload-label">
            <BiImage className="image-upload-icon" />
            Add an image
            <input
              type="file"
              className="image-block-upload"
              id="image-block-upload"
              onChange={this.handleUpload}
              hidden
            />
          </label>
        </div>
      </div>
    );
  }
}

export default Image;
