import React from 'react';
import { BiImage } from 'react-icons/bi';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      photoFile: null,
      photoUrl: null,
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  handleFile(e) {
    e.preventDefault();
    console.log('image handleFile');
    const file = e.target.files[0];
    const fileReader = new FileReader();
    console.log("file: ", file);

    if (file) {
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        console.log("result: ", fileReader.result)
        this.setState({
            photoFile: file,
            photoUrl: fileReader.result,
          },
          () => this.handleSubmit()
        );
      };
    }
  }

  // for (var key of formData.entries()) {
  //   console.log(key[0] + ', ' + key[1]);
  //  }
  // write down notes of what i have to do and the substeps 
  handleSubmit() {
    console.log('image handleSubmit');
    const formData = new FormData();
    // formData.append('id', this.props.block.id);
    // formData.append('blockType', this.props.block.blockType);
    // formData.append('userId', this.props.block.userId);
    // formData.append('pageId', this.props.block.pageId);
    formData.append('block[image]', this.state.photoFile);

    for (var key of formData.entries()) {
      console.log(key[0] + ', ' + key[1]);
    }

    $.ajax({
      url: `/api/blocks/${this.props.block.id}`,
      method: 'PATCH',
      data: formData,
      contentType: false,
      processData: false,
    }).then(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  render() {
    // console.log(this.state);
    const { block } = this.props;
    // console.log(block.image);

    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} alt=""/> : null;

    const imageBody =
      block.image.length > 0 ? (
        <img className="block-image" src={block.image} alt="" />
      ) : (
        <>
          <form>
            <input name="_method" type="hidden" value="patch" />
            <label className="image-block-upload-label">
              <BiImage className="image-upload-icon" />
              Add an image
              <input
                type="file"
                className="image-block-upload"
                id="image-block-upload"
                accept="image/*"
                onChange={this.handleFile}
                hidden
              />
            </label>
          </form>
          {/* <div className="temp-submit" onClick={this.handleSubmit}>
            Submit
          </div> */}
        </>
      );

    return (
      <div className="block-body">
        <div className="image-block-wrapper">image{imageBody}</div>
        {preview}
      </div>
    );
  }
}

export default Image;
