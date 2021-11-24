import React from 'react';
import { BiImage } from 'react-icons/bi';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpload = this.handleUpload.bind(this);
    this.state = {
      photoFile: null,
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  handleUpload(e) {
    this.setState({
      photoFile: e.target.files[0],
    }, () => this.handleSubmit());
  }

  handleSubmit() {
    console.log('image handle submit reached')
    const formData = new FormData();
    formData.append('block[image]', this.state.photoFile);
    console.log(this.state.photoFile);
    console.log(this.props.block.id); 
    $.ajax({
      url: `/api/blocks/${this.props.block.id}`,
      method: 'PATCH',
      data: formData,
      contentType: false,
      processData: false,
    }).then(
      (res) => {
        console.log(res);
        // this.props.updateBlock(this.state.page);
      },
      (err) => console.log(err)
    );
  }

  render() {
    console.log(this.state);
    const { block } = this.props;
    
    console.log(block.image)
    const imageComponent =
      block.image.length > 0 ? (
        <div>
          <img src={block.image} alt="" />
        </div>
      ) : (
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
      );


    return (
      <div className="block-body">
        <div className="image-block">
          {/* {imageComponent} */}
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
