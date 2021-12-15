import React from 'react';

class Divider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="block-body-divider">
        <div className="divider">
          <div className="divider-line"></div>
        </div>
      </div>
    );
  }
}

export default Divider;
