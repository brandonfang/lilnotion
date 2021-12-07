import React from 'react';
import { BiImage } from 'react-icons/bi';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.handlePreview = this.handlePreview.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.state = {
      photoFile: null,
      photoUrl: null,
    };
  }

  handlePreview(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const fileReader = new FileReader();
    if (file) {
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        this.setState(
          {
            photoFile: file,
            photoUrl: fileReader.result,
          },
          () => this.handleUpload()
        );
      };
    }
  }

  handleUpload() {
    const file = this.state.photoFile;
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onloadend = () => {
        const formData = new FormData();
        formData.append('block[imageUrl]', file);

        $.ajax({
          url: `/api/blocks/${this.props.block.id}`,
          method: 'PATCH',
          data: formData,
          contentType: false,
          processData: false,
        }).then(
          (res) => console.log('res: ', res),
          (err) => console.log('error: ', err)
        );
      };
    }
  }

  render() {
    const { block } = this.props;

    const preview = this.state.photoUrl ? (
      <img className="block-image-preview" src={this.state.photoUrl} alt="" />
    ) : null;

    const imageBody =
      (block.imageUrl && block.imageUrl.length > 0) ? (
        <img className="block-image" src={block.imageUrl} alt="" />
      ) : (
        <>
          <label className="image-upload-label">
            <BiImage className="image-upload-icon" />
            <div className="image-upload-text">Add an image</div>
            <input
              type="file"
              className="image-upload-input"
              accept="image/*"
              onChange={this.handlePreview}
              hidden
            />
          </label>
          {preview}
        </>
      );

    return (
      <div className="block-body image"> 
        <div className="image-block-wrapper">{imageBody}</div>
      </div>
    );
  }
}

export default Image;
