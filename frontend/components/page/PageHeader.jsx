import React from 'react';

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.page) {
      return null;
    }

    return (
      <div className="">

      </div>
    );
  }
}

export default PageHeader;
