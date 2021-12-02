import React from 'react';
import { BiImage } from 'react-icons/bi';

class Image extends React.Component {
  constructor(props) {
    super(props);
    // this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      photoFile: null,
      photoUrl: null,
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  // handleFile(e) {
  //   e.preventDefault();
  //   const file = e.target.files[0];
  //   const fileReader = new FileReader();

  //   if (file) {
  //     fileReader.readAsDataURL(file);
  //     fileReader.onloadend = () => {
  //       this.setState(
  //         {
  //           photoFile: file,
  //           photoUrl: fileReader.result,
  //         },
  //         () => this.handleSubmit()
  //       );
  //     };
  //   }
  // }

  // handleSubmit() {
  //   console.log('image handleSubmit');

  handleSubmit(e) {
    e.preventDefault();
    const file = e.target.files[0];
    console.log('file: ', file);

    
    if (file) {
      const fileReader = new FileReader();
      console.log(fileReader)
      fileReader.readAsDataURL(file);

      fileReader.onloadend = () => {
         console.log(fileReader);
        const formData = new FormData();
        formData.append('_method', 'patch');
        formData.append('block[id]', this.props.block.id);
        formData.append('block[userId]', this.props.block.userId);
        formData.append('block[pageId]', this.props.block.pageId);
        formData.append('block[blockType]', this.props.block.blockType);
        formData.append('block[text]', this.props.block.text);
        formData.append('block[checked]', this.props.block.checked);
        formData.append('block[expanded]', this.props.block.expanded);
        formData.append('block[image]', file);

        $.ajax({
          url: `/api/blocks/${this.props.block.id}`,
          method: 'PATCH',
          data: formData,
          contentType: false,
          processData: false,
        }).then(
          (res) => {
            console.log('res: ', res);
          },
          (err) => console.log('error: ', err)
        );
      };
    }

    

    // display formData's key/value pairs
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }


  }

  render() {
    // console.log(this.state);
    const { block } = this.props;
    // console.log(block.image);

    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} alt="" /> : null;

    const imageBody =
      block.image.length > 0 ? (
        <img className="block-image" src={block.image} alt="" />
      ) : (
        <>
          <form>
            <input name="_method" type="hidden" value="patch" />
            <label className="image-upload-label">
              <BiImage className="image-upload-icon" />
              <div className="image-upload-text">Add an image</div>
              <input
                type="file"
                className="image-upload-input"
                accept="image/*"
                onChange={this.handleSubmit}
                hidden
              />
            </label>
          </form>
          {preview}
        </>
      );

    return (
      <div className="block-body">
        image
        <div className="image-block-wrapper">{imageBody}</div>
      </div>
    );
  }
}

export default Image;
