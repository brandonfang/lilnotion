import React, { useState, useEffect } from 'react';
import { Router } from 'react-router-dom';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';
import { v4 } from 'uuidv4';
import Block from '../block/Block';
// import Container from './Container'

const demoBlocks = [
  "Block 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum porta dolor ut venenatis. Duis tristique elementum metus, a posuere magna ultricies pellentesque. Donec dictum egestas quam vel sodales. Integer vulputate nisi vel ex feugiat, ultrices laoreet enim efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Block 2. Cras sed placerat tellus. Cras libero ligula, faucibus quis posuere ac, ullamcorper non nisl. Integer bibendum lacinia nisl at faucibus. Ut dignissim elit vitae lorem ornare, a mattis orci scelerisque. Vivamus nec accumsan eros, eu finibus tellus. Morbi ut sapien feugiat, bibendum massa nec, mattis sem. Phasellus facilisis nulla non euismod malesuada.",
  "Block 3. Nam pretium diam lacus, et pellentesque augue imperdiet et. Pellentesque gravida aliquet justo, vel consectetur turpis aliquam non. Nulla vehicula, tellus et dapibus facilisis, mauris sapien tempus tortor, sit amet pretium tellus nulla quis lacus. Curabitur facilisis laoreet malesuada."
];

const Page = () => {
  const [blocks, setBlocks] = useState([]);
  const [currentBlock, setcurrentBlock] = useState('');
  
  // fetch blocks on component mount
  useEffect(() => {
    return;
  }, [blocks]);


  const OnDragEnd = () => {
    // check position of drag end
    return;
  }

  return (
    <>
      <DragDropContext onDragEnd={OnDragEnd}>
        <div className="page-content">
          {/* page header component */}
          <h1>Meeting Notes</h1>

          <Droppable droppableId={v4()}>
            {/* {(provided) => (
              <Div
                innerRef={provided.innerRef}
                {...provided.droppableProps}
                text
              >
                {demoBlocks.map((ele, i) => <Block text={ele} key={i} />)}
                {provided.placeholder}
              </Div>
            )} */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum porta dolor ut venenatis. Duis tristique elementum metus, a posuere magna ultricies pellentesque. Donec dictum egestas quam vel sodales. Integer vulputate nisi vel ex feugiat, ultrices laoreet enim efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Cras sed placerat tellus. Cras libero ligula, faucibus quis posuere ac, ullamcorper non nisl. Integer bibendum lacinia nisl at faucibus. Ut dignissim elit vitae lorem ornare, a mattis orci scelerisque. Vivamus nec accumsan eros, eu finibus tellus. Morbi ut sapien feugiat, bibendum massa nec, mattis sem. Phasellus facilisis nulla non euismod malesuada.</p>
            <p>Nam pretium diam lacus, et pellentesque augue imperdiet et. Pellentesque gravida aliquet justo, vel consectetur turpis aliquam non. Nulla vehicula, tellus et dapibus facilisis, mauris sapien tempus tortor, sit amet pretium tellus nulla quis lacus. Curabitur facilisis laoreet malesuada.</p>
          </Droppable>
        </div>
      </DragDropContext>
    </>
  );
}

export default Page;
