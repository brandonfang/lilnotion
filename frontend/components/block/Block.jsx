import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { v4 } from 'uuidv4';
import Text from './Text';

class Block extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Draggable draggableId={v4()} index={v4()}>
        {(provided) => (
          <Text
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
            text="Duis non velit id ex eleifend iaculis. In ornare ultricies mi, sagittis varius ex aliquam sit amet. Donec sed mi eu nunc consectetur ullamcorper. Etiam aliquet eu ex ut pulvinar. Pellentesque at ante lacus. In nulla augue, blandit sed ipsum quis, pellentesque blandit sem. In scelerisque nisl sit amet felis rhoncus finibus. Cras consequat nulla mauris, eget finibus turpis consequat a. Ut eget fringilla libero. Aenean bibendum vitae urna et aliquet."
          >
          </Text>
        )}
    </Draggable>
    );
  }
}
 
export default Block;
