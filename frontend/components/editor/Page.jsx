import React, { useState, useEffect } from 'react';
import { Router } from 'react-router-dom';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';
import { v4 } from 'uuidv4';
import Block from '../block/Block';
// import Container from './Container'

const demoBlocks = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum porta dolor ut venenatis. Duis tristique elementum metus, a posuere magna ultricies pellentesque. Donec dictum egestas quam vel sodales. Integer vulputate nisi vel ex feugiat, ultrices laoreet enim efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Cras sed placerat tellus. Cras libero ligula, faucibus quis posuere ac, ullamcorper non nisl. Integer bibendum lacinia nisl at faucibus. Ut dignissim elit vitae lorem ornare, a mattis orci scelerisque. Vivamus nec accumsan eros, eu finibus tellus. Morbi ut sapien feugiat, bibendum massa nec, mattis sem. Phasellus facilisis nulla non euismod malesuada.",
  "Nam pretium diam lacus, et pellentesque augue imperdiet et. Pellentesque gravida aliquet justo, vel consectetur turpis aliquam non. Nulla vehicula, tellus et dapibus facilisis, mauris sapien tempus tortor, sit amet pretium tellus nulla quis lacus. Curabitur facilisis laoreet malesuada."
];

const Page = () => {




  return (
    <>
      <DragDropContext>
        <div className="page-content">
          <h1>Meeting Notes</h1>
          {/* <Droppable droppableId={v4()}>
            {(provided) => (
              <Div
                innerRef={provided.innerRef}
                {...provided.droppableProps}
                text
              >
                {demoBlocks.map((ele, i) => <Block text={ele} key={i} />)}
                {provided.placeholder}
              </Div>
            )}
          </Droppable> */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum porta dolor ut venenatis. Duis tristique elementum metus, a posuere magna ultricies pellentesque. Donec dictum egestas quam vel sodales. Integer vulputate nisi vel ex feugiat, ultrices laoreet enim efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Cras sed placerat tellus. Cras libero ligula, faucibus quis posuere ac, ullamcorper non nisl. Integer bibendum lacinia nisl at faucibus. Ut dignissim elit vitae lorem ornare, a mattis orci scelerisque. Vivamus nec accumsan eros, eu finibus tellus. Morbi ut sapien feugiat, bibendum massa nec, mattis sem. Phasellus facilisis nulla non euismod malesuada.</p>
          <p>Nam pretium diam lacus, et pellentesque augue imperdiet et. Pellentesque gravida aliquet justo, vel consectetur turpis aliquam non. Nulla vehicula, tellus et dapibus facilisis, mauris sapien tempus tortor, sit amet pretium tellus nulla quis lacus. Curabitur facilisis laoreet malesuada.</p>
        </div>
      </DragDropContext>
    </>
  );
}

export default Page;
