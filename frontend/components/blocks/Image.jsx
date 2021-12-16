import React from 'react';
import { BiImage } from 'react-icons/bi';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpload = this.handleUpload.bind(this);
    this.state = {
      photoUrl: null,
      // imageCaption
    };
  }

  handleUpload(e) { 
    const file = e.target.files[0];
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
          (res) => {
            console.log('res: ', res)
            this.props.updateBlock(res);
          },
          (err) => console.log('error: ', err)
        );
      };
    }
  }

  render() {
    const { block } = this.props;

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
              onChange={this.handleUpload}
              hidden
            />
          </label>
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
