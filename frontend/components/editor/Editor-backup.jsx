import React from 'react';
import SidebarContainer from '../sidebar/SidebarContainer';
import PageContainer from '../page/PageContainer';
import Loader from './Loader';
import equal from 'fast-deep-equal';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageId: this.props.location.pathname.slice(3),
      pages: {},
      blocks: {},
      isLoading: true,
    };
  }

  async componentDidMount() {
    // console.log('editor.jsx componentDidMount()');
    const pageRes = await this.props.fetchPages(this.props.currentUser.id);
    const blockRes = await this.props.fetchBlocks(this.props.currentUser.id);
    const pages = pageRes.pages;
    const blocks = blockRes.blocks;
    this.setState(
      {
        pages: pages,
        blocks: blocks,
        isLoading: false,
      },
      () => {
        if (!pages[this.state.pageId]) {
          const firstPage = Object.values(pages)[0];
          this.props.history.push(`/p/${firstPage.id}`);
        }
      }
    );
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (!equal(this.props, nextProps)) {
  //     return true;
  //   }
  //   return false;
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('editor.jsx componentDidUpdate()');
    // if (!equal(prevProps, this.props)) {
    if (prevProps.blocks !== this.props.blocks || prevProps.pages !== this.props.pages) {
      this.setState({
        pages: this.props.pages,
        blocks: this.props.blocks,
      }, () => {
        console.log("updated state: ", Object.keys(this.state.blocks).length);
      });
    }
  }

  render() {
    console.log('editor.jsx render()');
    const { pages, blocks, isLoading } = this.state;
    if (isLoading) {
      return <Loader />;
    }
    return (
      <div id="editor">
        <SidebarContainer pages={pages} />
        <PageContainer pages={pages} blocks={blocks} />
      </div>
    );
  }
}

export default Editor;
