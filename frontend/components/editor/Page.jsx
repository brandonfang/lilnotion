import React, { useState, useEffect, useCallback } from 'react';
import { Router } from 'react-router-dom';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';
import { v4 } from 'uuidv4';
import PageHeader from './PageHeader';
import Block from '../block/Block';
// import Container from './Container'


const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const Page = (props) => {
  const [blocks, setBlocks] = useState([]);
  const [currentBlock, setcurrentBlock] = useState('');
  const [items, setItems] = useState([
    {
      id: 'item-1',
      content: "Block 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum porta dolor ut venenatis. Duis tristique elementum metus, a posuere magna ultricies pellentesque. Donec dictum egestas quam vel sodales. Integer vulputate nisi vel ex feugiat, ultrices laoreet enim efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 'item-2',
      content: "Block 2. Cras sed placerat tellus. Cras libero ligula, faucibus quis posuere ac, ullamcorper non nisl. Integer bibendum lacinia nisl at faucibus. Ut dignissim elit vitae lorem ornare, a mattis orci scelerisque. Vivamus nec accumsan eros, eu finibus tellus. Morbi ut sapien feugiat, bibendum massa nec, mattis sem. Phasellus facilisis nulla non euismod malesuada."
    },
    {
      id: 'item-3',
      content: "Block 3. Nam pretium diam lacus, et pellentesque augue imperdiet et. Pellentesque gravida aliquet justo, vel consectetur turpis aliquam non. Nulla vehicula, tellus et dapibus facilisis, mauris sapien tempus tortor, sit amet pretium tellus nulla quis lacus. Curabitur facilisis laoreet malesuada."
    }
  ]);
  
  // fetch blocks on component mount
  useEffect(() => {
    return;
  }, [blocks]);


  // check position of drag end
  const OnDragEnd = useCallback((result) => {
    // dropped outside the list
    if (!result.destination) return;

    const items = reorder(
      items, 
      result.source.index,
      result.destination.index
    );

    setItems(items);
  }, []);

  return (
    <div className="page-content">
      <PageHeader />
      <h1>Meeting Notes</h1>

      <DragDropContext onDragEnd={OnDragEnd}>

        <Droppable droppableId="droppable" type="ITEM">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="droppable-area"
            >
              {items.map((item, index) => (
                // <Draggable key={item.id} draggableId={item.id} index={index}>
                //   {(provided, snapshot) => (
                //     <div
                //       ref={provided.innerRef}
                //       {...provided.draggableProps}
                //       {...provided.dragHandleProps}
                //     >
                //       {item.content}
                //     </div>
                //   )}
                // </Draggable>
                <Block key={item.id} item={item} index={index}/>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Page;
