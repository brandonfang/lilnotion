import React, { useState, useEffect } from 'react'
import SidebarContainer from '../sidebar/SidebarContainer'
import PageContainer from '../page/PageContainer'
import Loader from './Loader'

function Editor({ currentUser, pages, blocks, fetchPages, fetchBlocks }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  useEffect(() => {
    fetchPages(currentUser.id)
    fetchBlocks(currentUser.id)
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
    console.log('toggleSidebar()')
  }

  const isDataValid =
    pages &&
    blocks &&
    Object.keys(pages).length > 0 &&
    Object.keys(blocks).length > 0 &&
    Object.values(blocks)[0].id

  return isDataValid ? (
    <div id="editor">
      <SidebarContainer pages={pages} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <PageContainer
        pages={pages}
        blocks={blocks}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
    </div>
  ) : (
    <Loader />
  )
}

export default Editor
