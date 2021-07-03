import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Text from '../block/Text';
import Block from '../block/Block';
import PageContent from './PageContent';

const demoBlocks = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum porta dolor ut venenatis. Duis tristique elementum metus, a posuere magna ultricies pellentesque. Donec dictum egestas quam vel sodales. Integer vulputate nisi vel ex feugiat, ultrices laoreet enim efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Cras sed placerat tellus. Cras libero ligula, faucibus quis posuere ac, ullamcorper non nisl. Integer bibendum lacinia nisl at faucibus. Ut dignissim elit vitae lorem ornare, a mattis orci scelerisque. Vivamus nec accumsan eros, eu finibus tellus. Morbi ut sapien feugiat, bibendum massa nec, mattis sem. Phasellus facilisis nulla non euismod malesuada",
  "Nam pretium diam lacus, et pellentesque augue imperdiet et. Pellentesque gravida aliquet justo, vel consectetur turpis aliquam non. Nulla vehicula, tellus et dapibus facilisis, mauris sapien tempus tortor, sit amet pretium tellus nulla quis lacus. Curabitur facilisis laoreet malesuada."
];

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onDragEnd = (result) => {

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
        <DragDropContext onDragEnd={this.onDragEnd}>
          {() => (
            <PageContent>
            </PageContent>
          )}
        </DragDropContext>
        <div className="page-content">
          <h1 contentEditable>Meeting Notes</h1>
          <p contentEditable>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum porta dolor ut venenatis. Duis tristique elementum metus, a posuere magna ultricies pellentesque. Donec dictum egestas quam vel sodales. Integer vulputate nisi vel ex feugiat, ultrices laoreet enim efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p contentEditable>Cras sed placerat tellus. Cras libero ligula, faucibus quis posuere ac, ullamcorper non nisl. Integer bibendum lacinia nisl at faucibus. Ut dignissim elit vitae lorem ornare, a mattis orci scelerisque. Vivamus nec accumsan eros, eu finibus tellus. Morbi ut sapien feugiat, bibendum massa nec, mattis sem. Phasellus facilisis nulla non euismod malesuada.</p>
          <p contentEditable>Nam pretium diam lacus, et pellentesque augue imperdiet et. Pellentesque gravida aliquet justo, vel consectetur turpis aliquam non. Nulla vehicula, tellus et dapibus facilisis, mauris sapien tempus tortor, sit amet pretium tellus nulla quis lacus. Curabitur facilisis laoreet malesuada.</p>
          <p onClick={this.props.logout}>Log out</p>
        </div>
      </div>

    );
  }
}
 
export default Frame;
