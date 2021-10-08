import React from 'react';

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    if (this.state.blocks.length === 0 || Object.keys(this.props.pages).length == 0) {
      return null;
    }

    const { currentUser, blocks } = this.props;
    const currentPageBlocks = blocks[this.state.pageId];
    // const pageCover = this.state.page.coverUrl;

    return (
      <div className="page">
        <div className="topbar-wrapper">
          <div className="topbar">
            <div className="breadcrumb-wrapper">
              <div className="breadcrumb">
                {this.props.pages[this.state.pageId].properties.title}
              </div>
            </div>
            <div className="topbar-action-buttons">
              <div className="more-button-wrapper">
                <div className="more-button">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-scroller">
          <div className="page-header-wrapper">
            <div className="page-header">
              {/* {pageCover ? <img src={this.state.page.coverUrl} className="page-cover" /> : null} */}
            </div>
          </div>

          <div className="page-wrapper">
            <h1 className="page-title">{this.props.pages[this.state.pageId].properties.title}</h1>

            <DragDropContext onDragEnd={this.OnDragEnd}>
              <div className="page-content">
                <Droppable droppableId={this.state.pageId}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="droppable-area"
                    >
                      {currentPageBlocks.map((block, index) => (
                        // <Draggable
                        //   key={block.id}
                        //   draggableId={block.id}
                        //   index={index}
                        // >
                        //   {(provided, snapshot) => (
                        //     <div
                        //       ref={provided.innerRef}
                        //       {...provided.draggableProps}
                        //       className="block"
                        //     >
                        //       <div
                        //         className="block-handle"
                        //         role="button"
                        //         tabIndex="0"
                        //         {...provided.dragHandleProps}
                        //       >⋮⋮</div>

                        //       <div className="block-content">
                        //         {block.properties.title}
                        //       </div>

                        //     </div>
                        //   )}
                        // </Draggable>
                        <BlockContainer key={block.id} block={block} index={index} />
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </DragDropContext>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHeader;
