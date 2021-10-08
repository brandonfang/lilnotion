import React from 'react';
import matchSorter from 'match-sorter';
import Menu, { SubMenu, MenuItem } from 'rc-menu';


class BlockSelectMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount() {}

  render() { 
    return (
      <div className="block-select-menu-wrapper">
        <div className="block-select-menu">
          <Menu>
            <MenuItem>1</MenuItem>
            <SubMenu title="2">
              <MenuItem>2-1</MenuItem>
            </SubMenu>
          </Menu>
          ,
        </div>
      </div>
    );
  }
}
 
export default BlockSelectMenu;
