import React, { useState, useEffect, useCallback } from 'react';
import { Router } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import PageHeader from './PageHeader';
import Block from '../blocks/Block';
// import Container from './Container'


// const reorder = (list, startIndex, endIndex) => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);

//   return result;
// };

const Page = (props) => {
  // const [blocks, setBlocks] = useState([]);
  const [currentBlock, setcurrentBlock] = useState('');
  const [blocks, setBlocks] = useState([
    {
      id: 'block-1',
      content: 'At first, books were copied mostly in monasteries, one at a time. With the rise of universities in the 13th century, the Manuscript culture of the time led to an increase in the demand for books, and a new system for copying books appeared. The books were divided into unbound leaves (pecia), which were lent out to different copyists, so the speed of book production was considerably increased. The system was maintained by secular stationers guilds, which produced both religious and non-religious material.'
    },
    {
      id: 'block-2',
      content: 'Judaism has kept the art of the scribe alive up to the present. According to Jewish tradition, the Torah scroll placed in a synagogue must be written by hand on parchment and a printed book would not do, though the congregation may use printed prayer books and printed copies of the Scriptures are used for study outside the synagogue. A sofer "scribe" is a highly respected member of any observant Jewish community.'
    },
    {
      id: 'block-3',
      content: 'The Chinese inventor Bi Sheng made movable type of earthenware c. 1045, but there are no known surviving examples of his printing. Around 1450, in what is commonly regarded as an independent invention, Johannes Gutenberg invented movable type in Europe, along with innovations in casting the type based on a matrix and hand mould. This invention gradually made books less expensive to produce, and more widely available.'
    },
    {
      id: 'block-4',
      content: 'Early printed books, single sheets and images which were created before 1501 in Europe are known as incunables or incunabula. "A man born in 1453, the year of the fall of Constantinople, could look back from his fiftieth year on a lifetime in which about eight million books had been printed, more perhaps than all the scribes of Europe had produced since Constantine founded his city in AD 330."'
    }, 
    {
      id: 'block-5',
      content: 'The codices of pre-Columbian Mesoamerica (Mexico and Central America) had the same form as the European codex, but were instead made with long folded strips of either fig bark (amatl) or plant fibers, often with a layer of whitewash applied before writing. New World codices were written as late as the 16th century (see Maya codices and Aztec codices). Those written before the Spanish conquests seem all to have been single long sheets folded concertina-style, sometimes written on both sides of the local amatl paper.'
    }, 
    {
      id: 'block-6',
      content: ''
    }, 
    
  ]);
  
  // fetch blocks on component mount
  useEffect(() => {
    return;
  }, [blocks]);


  const reorder = (blocks, startIndex, endIndex) => {
    const result = [...blocks];
    const [removed] = result.splice(startIndex - 1, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  // might want to use useCallback
  const OnDragEnd = (result) => {
    // dropped outside the list or no movement
    if (!result.destination || result.source.index === result.destination.index) {
      return;
    }

    const blocks = reorder(blocks, result.source.index, result.destination.index);
    setBlocks(blocks);
  };

  return (
    <div className="scroller">
      <div className="page-content">
        <PageHeader />
        <h1>Meeting Notes</h1>

        <DragDropContext onDragEnd={OnDragEnd}>

          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="droppable-area"
              >
                {blocks.map((block, index) => (
                  // <Draggable key={block.id} draggableId={block.id} index={index}>
                  //   {(provided, snapshot) => (
                  //     <div
                  //       ref={provided.innerRef}
                  //       {...provided.draggableProps}
                  //       {...provided.dragHandleProps}
                  //     >
                  //       {block.content}
                  //     </div>
                  //   )}
                  // </Draggable>
                  <Block key={block.id} block={block} index={index}/>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default Page;
