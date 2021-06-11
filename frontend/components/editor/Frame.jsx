import React from 'react';

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="frame">
        {/* <TopbarContainer /> */}
        <div className="topbar-wrapper">
          <div className="topbar">
            <div className="topbar-breadcrumb-wrapper">
              <div className="topbar-breadcrumb">

              </div>
            </div>
          </div>
        </div>
        <div className="temp-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis non in et, at vero, exercitationem similique commodi sequi totam accusantium eveniet laudantium, natus distinctio est nisi culpa! Quidem, cumque nihil!
        </div>
      </div>

    );
  }
}
 
export default Frame;
