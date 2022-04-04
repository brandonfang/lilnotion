import React, { useState } from 'react'
import { BiImage } from 'react-icons/bi'

function Image({ block, updateBlock }) {
  const [photoUrl, setPhotoUrl] = useState(null)

  function handleUpload(e) {
    const file = e.target.files[0]
    if (file) {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)

      fileReader.onloadend = () => {
        const formData = new FormData()
        formData.append('block[imageUrl]', file)

        $.ajax({
          url: `/api/blocks/${block.id}`,
          method: 'PATCH',
          data: formData,
          contentType: false,
          processData: false,
        }).then(
          (res) => updateBlock(res),
          (err) => console.log('error: ', err)
        )
      }
    }
  }

  const isImageUploaded = block.imageUrl && block.imageUrl.length > 0
  const imageBody = isImageUploaded ? (
    <img className="block-image" src={block.imageUrl} alt="" />
  ) : (
    <label className="image-upload-label">
      <BiImage className="image-upload-icon" />
      <div className="image-upload-text">Add an image</div>
      <input
        type="file"
        className="image-upload-input"
        accept="image/*"
        onChange={handleUpload}
        hidden
      />
    </label>
  )

  return (
    <div className="block-body image">
      <div className="image-block-wrapper">{imageBody}</div>
    </div>
  )
}

export default Image
