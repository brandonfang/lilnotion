import React from 'react';
import matchSorter from 'match-sorter';

class BlockSelectMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount() {}

  render() { 
    return (
      <>
        <div className="block-select-menu-wrapper">
          <div className="block-select-menu">
            <div className="menu-row">Turn into</div>
          </div>
        </div>
      </>
    );
  }
}
 
export default BlockSelectMenu;
