import React from 'react';

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  handleTitleChange() {}

  componentDidMount() {}
  

  render() {
    if (!this.props.page) {
      return null;
    }

    return (
      <>
      </>
    );
  }
}

export default PageHeader;
